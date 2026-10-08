#!/usr/bin/env node

/**
 * Generates a multi-app workspace whose buildable Angular libraries are split into many secondary
 * entry points (e.g. `@nx-angular-incremental-build/app1-lib0/feature-3`), the way large design
 * systems and feature libraries are usually structured.
 *
 * It creates:
 *   - `sharedLibs` shared UI libs (`libs/shared/ui<n>`), each with a `core` entry point plus
 *     `entryPoints` widget entry points
 *   - `apps` apps (`apps/app<n>`, copies of app0), each with `libsPerApp` feature libs
 *     (`libs/app<n>/lib<m>`) that have a `core` entry point plus `entryPoints` feature entry points.
 *     Every feature entry point renders a widget from one of the shared libs.
 *   - `components` components per entry point, every one with an inline SCSS stylesheet
 *
 * Every lib has a `build` target (`@angular/build:library`, entry points from package.json `exports`)
 * and a `build-ng-packagr` target (`@nx/angular:package`, entry points from `ng-package.json`).
 *
 * Previously generated apps (`apps/app1`…) and libs (`libs/app1`…, `libs/shared`) are deleted first.
 *
 * Usage: node tools/generate-entry-point-libs.mjs [--apps=4] [--libsPerApp=5] [--sharedLibs=3] [--entryPoints=40] [--components=8]
 */

import { cpSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

const arg = (name, fallback) =>
  Number(process.argv.find((a) => a.startsWith(`--${name}=`))?.split('=')[1] ?? fallback);

const APPS = arg('apps', 4);
const LIBS_PER_APP = arg('libsPerApp', 5);
const SHARED_LIBS = arg('sharedLibs', 3);
const ENTRY_POINTS = arg('entryPoints', 40);
const COMPONENTS = arg('components', 8);
const SCOPE = '@nx-angular-incremental-build';

const write = (file, content) => {
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, typeof content === 'string' ? content : JSON.stringify(content, null, 2) + '\n');
};
const pascal = (s) => s.replace(/(^|-)(\w)/g, (_, __, c) => c.toUpperCase());

function coreSource(prefix) {
  return {
    'src/index.ts': `export * from './lib/card.component';\nexport * from './lib/badge.component';\nexport * from './lib/store.service';\n`,
    'src/lib/store.service.ts': `import { Injectable, computed, signal } from '@angular/core';

export type Status = 'draft' | 'active' | 'archived';

export interface Item {
  id: number;
  label: string;
  tags: string[];
  score: number;
  price: number;
  status: Status;
  updated: Date;
}

@Injectable({ providedIn: 'root' })
export class Store {
  readonly items = signal<Item[]>(
    Array.from({ length: 20 }, (_, id) => ({
      id,
      label: \`Item \${id}\`,
      tags: ['a', 'b', 'c'].slice(0, (id % 3) + 1),
      score: id * 3,
      price: id * 9.5,
      status: (['draft', 'active', 'archived'] as const)[id % 3],
      updated: new Date(2026, id % 12, (id % 27) + 1),
    }))
  );
  readonly total = computed(() => this.items().reduce((sum, item) => sum + item.score, 0));
  readonly byStatus = computed(() =>
    this.items().reduce<Record<Status, number>>(
      (acc, item) => ({ ...acc, [item.status]: acc[item.status] + 1 }),
      { draft: 0, active: 0, archived: 0 }
    )
  );
}
`,
    'src/lib/card.component.ts': `import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: '${prefix}-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`
    <section class="card" [class.card--accent]="accent()">
      <header><h3>{{ title() }}</h3></header>
      <ng-content />
    </section>
  \`,
  styles: \`
    $radius: 8px;
    .card {
      border-radius: $radius;
      padding: 1rem;
      &--accent { border: 2px solid rebeccapurple; }
      h3 { margin: 0 0 0.5rem; }
    }
  \`,
})
export class Card {
  readonly title = input.required<string>();
  readonly accent = input(false);
}
`,
    'src/lib/badge.component.ts': `import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: '${prefix}-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`<span class="badge">{{ label() }}</span>\`,
  styles: \`
    .badge { display: inline-block; padding: 0 0.25rem; border-radius: 4px; background: #eee; }
  \`,
})
export class Badge {
  readonly label = input.required<string>();
}
`,
  };
}

/**
 * A component with a realistic amount of template, logic and SCSS. `uses` optionally names a
 * component from another lib that it renders.
 */
function component({ className, prefix, selector, title, corePkg, index, uses }) {
  const usesImport = uses ? `import { ${uses.className} } from '${uses.pkg}';\n` : '';
  const usesTag = uses ? `\n      <${uses.selector} />` : '';
  return `import { ChangeDetectionStrategy, Component, computed, inject, input, output, signal } from '@angular/core';
import { CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';
import { Badge, Card, Item, Status, Store } from '${corePkg}';
${usesImport}
interface ${className}Row {
  item: Item;
  selected: boolean;
  weight: number;
  bucket: 'low' | 'mid' | 'high';
}

type ${className}Sort = 'label' | 'score' | 'price' | 'updated';

@Component({
  selector: '${selector}',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Card, Badge, CurrencyPipe, DatePipe, DecimalPipe${uses ? `, ${uses.className}` : ''}],
  host: { '[class.has-selection]': 'selectedCount() > 0', '(keydown.escape)': 'reset()' },
  template: \`
    <${prefix}-card [title]="heading()" [accent]="selectedCount() > 2">
      <p class="summary">{{ summary() }}</p>
      <nav class="filters">
        @for (status of statuses; track status) {
          <button type="button" [class.active]="filter() === status" (click)="filter.set(status)">
            {{ status }} ({{ counts()[status] }})
          </button>
        }
        <select [value]="sort()" (change)="sortBy($any($event.target).value)">
          @for (key of sortKeys; track key) {
            <option [value]="key">{{ key }}</option>
          }
        </select>
      </nav>
      <table>
        <thead>
          <tr><th>Label</th><th>Tags</th><th>Score</th><th>Price</th><th>Updated</th></tr>
        </thead>
        <tbody>
          @for (row of rows(); track row.item.id; let odd = $odd) {
            <tr [class.odd]="odd" [class.selected]="row.selected" (click)="toggle(row.item.id)">
              <td>{{ row.item.label }}</td>
              <td>
                @for (tag of row.item.tags; track tag) {
                  <${prefix}-badge [label]="tag" />
                }
              </td>
              <td>
                @switch (row.bucket) {
                  @case ('high') { <strong>{{ row.weight | number: '1.0-1' }}</strong> }
                  @case ('mid') { <span>{{ row.weight | number: '1.0-1' }}</span> }
                  @default { <em>{{ row.weight | number: '1.0-1' }}</em> }
                }
              </td>
              <td>{{ row.item.price | currency: 'EUR' }}</td>
              <td>{{ row.item.updated | date: 'mediumDate' }}</td>
            </tr>
          } @empty {
            <tr><td colspan="5">No items</td></tr>
          }
        </tbody>
      </table>
      @if (selectedCount() > 0) {
        <footer>
          <span>{{ selectedCount() }} selected · {{ selectedTotal() | currency: 'EUR' }}</span>
          <button type="button" (click)="reset()">Reset</button>
        </footer>
      }${usesTag}
    </${prefix}-card>
  \`,
  styles: \`
    @use 'sass:color';
    @use 'sass:map';
    @use 'sass:math';
    $gap: 4px;
    $palette: (low: #4a7, mid: #e93, high: #c33);
    @mixin chip($color) {
      padding: math.div($gap, 2) $gap;
      border-radius: $gap;
      background: color.adjust($color, $lightness: 35%);
      color: color.adjust($color, $lightness: -15%);
    }
    :host { display: block; margin: $gap * 2; &.has-selection { outline: 1px solid map.get($palette, mid); } }
    .summary { font-size: 0.875rem; }
    .filters {
      display: flex;
      gap: $gap;
      button { @include chip(#336699); &.active { @include chip(#663399); } }
    }
    table { width: 100%; border-collapse: collapse; }
    tr {
      &.odd { background: color.adjust(#336699, $lightness: ${45 + (index % 10)}%); }
      &.selected { background: color.adjust(#336699, $lightness: ${20 + (index % 30)}%); }
      &:hover { outline: 1px dashed #999; }
    }
    @each $name, $color in $palette {
      .bucket-#{$name} { @include chip($color); }
    }
    @for $n from 1 through 6 {
      .col-#{$n} { width: math.percentage(math.div($n, 6)); }
    }
    footer { display: flex; justify-content: space-between; margin-top: $gap * 2; }
  \`,
})
export class ${className} {
  private readonly store = inject(Store);
  readonly heading = input('${title}');
  readonly threshold = input(${index * 3 + 10});
  readonly changed = output<number[]>();
  readonly statuses: Status[] = ['draft', 'active', 'archived'];
  readonly sortKeys: ${className}Sort[] = ['label', 'score', 'price', 'updated'];
  readonly filter = signal<Status>('active');
  readonly sort = signal<${className}Sort>('score');
  private readonly selected = signal<number[]>([]);

  readonly counts = this.store.byStatus;
  readonly rows = computed<${className}Row[]>(() =>
    this.store
      .items()
      .filter((item) => item.status === this.filter())
      .sort((a, b) => this.compare(a, b))
      .map((item) => {
        const weight = item.score * ${index + 1} + item.price / ${index + 2};
        return {
          item,
          selected: this.selected().includes(item.id),
          weight,
          bucket: weight > this.threshold() * 2 ? 'high' : weight > this.threshold() ? 'mid' : 'low',
        };
      })
  );
  readonly selectedCount = computed(() => this.selected().length);
  readonly selectedTotal = computed(() =>
    this.rows()
      .filter((row) => row.selected)
      .reduce((sum, row) => sum + row.item.price, 0)
  );
  readonly summary = computed(() => \`\${this.selectedCount()} of \${this.rows().length} selected, total \${this.store.total()}\`);

  sortBy(key: ${className}Sort) {
    this.sort.set(key);
  }

  toggle(id: number) {
    this.selected.update((ids) => (ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id]));
    this.changed.emit(this.selected());
  }

  reset() {
    this.selected.set([]);
    this.changed.emit([]);
  }

  private compare(a: Item, b: Item): number {
    switch (this.sort()) {
      case 'label':
        return a.label.localeCompare(b.label);
      case 'price':
        return a.price - b.price;
      case 'updated':
        return a.updated.getTime() - b.updated.getTime();
      default:
        return b.score - a.score;
    }
  }
}
`;
}

/** Files for one non-core entry point: `COMPONENTS` components plus a page that renders them all. */
function entryPointSource({ prefix, pkg, ep, usesFor }) {
  const files = {};
  const classes = [];
  for (let i = 0; i < COMPONENTS; i++) {
    const className = `${pascal(prefix)}${pascal(ep)}Item${i}`;
    classes.push(className);
    files[`src/lib/item-${i}.component.ts`] = component({
      className,
      prefix,
      selector: `${prefix}-${ep}-item-${i}`,
      title: `${ep} item ${i}`,
      corePkg: `${pkg}/core`,
      index: i,
      uses: usesFor?.(i),
    });
  }
  const page = `${pascal(prefix)}${pascal(ep)}Page`;
  files['src/lib/page.component.ts'] = `import { ChangeDetectionStrategy, Component } from '@angular/core';
${classes.map((c, i) => `import { ${c} } from './item-${i}.component';`).join('\n')}

@Component({
  selector: '${prefix}-${ep}-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [${classes.join(', ')}],
  template: \`
${classes.map((_, i) => `    <${prefix}-${ep}-item-${i} />`).join('\n')}
  \`,
})
export class ${page} {}
`;
  files['src/index.ts'] =
    classes.map((_, i) => `export * from './lib/item-${i}.component';`).join('\n') +
    `\nexport * from './lib/page.component';\n`;
  return { files, page, classes };
}

/** Writes package.json, ng-package.json, tsconfigs and project.json for a lib. */
function writeLibConfig({ root, project, pkg, prefix, entryPoints, tags, distPaths }) {
  const up = '../'.repeat(root.split('/').length);
  write(`${root}/package.json`, {
    name: pkg,
    version: '0.0.1',
    exports: Object.fromEntries([
      ['.', './src/index.ts'],
      ...entryPoints.map((ep) => [`./${ep}`, `./${ep}/src/index.ts`]),
    ]),
    peerDependencies: { '@angular/common': '^22.0.0', '@angular/core': '^22.0.0', '@angular/router': '^22.0.0' },
    sideEffects: false,
  });
  write(`${root}/ng-package.json`, {
    $schema: `${up}node_modules/ng-packagr/ng-package.schema.json`,
    dest: `${up}dist/ng-packagr/${root}`,
    inlineStyleLanguage: 'scss',
    lib: { entryFile: 'src/index.ts' },
  });
  for (const ep of entryPoints) write(`${root}/${ep}/ng-package.json`, { lib: { entryFile: 'src/index.ts' } });
  write(`${root}/tsconfig.json`, {
    extends: `${up}tsconfig.base.json`,
    compilerOptions: {
      target: 'es2022',
      moduleResolution: 'bundler',
      strict: true,
      noImplicitOverride: true,
      noPropertyAccessFromIndexSignature: true,
      noImplicitReturns: true,
      noFallthroughCasesInSwitch: true,
      module: 'preserve',
      lib: ['dom', 'es2022'],
      ignoreDeprecations: '6.0',
    },
    angularCompilerOptions: {
      enableI18nLegacyMessageIdFormat: false,
      strictInjectionParameters: true,
      strictInputAccessModifiers: true,
      typeCheckHostBindings: true,
      strictTemplates: true,
    },
    files: [],
    include: [],
    references: [{ path: './tsconfig.lib.json' }],
  });
  write(`${root}/tsconfig.lib.json`, {
    extends: './tsconfig.json',
    compilerOptions: { outDir: `${up}dist/out-tsc`, declaration: true, declarationMap: true, inlineSources: true, types: [] },
    include: ['**/*.ts'],
  });
  // The production build consumes other libs from `dist` instead of compiling their sources again.
  // Nx does this automatically for `@nx/angular:package`, but not for `@angular/build:library`.
  write(`${root}/tsconfig.lib.prod.json`, {
    extends: './tsconfig.lib.json',
    compilerOptions: { declarationMap: false, ...(distPaths ? { paths: distPaths } : {}) },
    angularCompilerOptions: { compilationMode: 'partial' },
  });
  write(`${root}/project.json`, {
    name: project,
    $schema: `${up}node_modules/nx/schemas/project-schema.json`,
    sourceRoot: `${root}/src`,
    prefix,
    projectType: 'library',
    tags,
    targets: {
      build: {
        executor: '@angular/build:library',
        outputs: ['{options.outputPath}'],
        options: { tsConfig: `${root}/tsconfig.lib.json`, outputPath: `dist/${root}`, inlineStyleLanguage: 'scss' },
        configurations: { production: { tsConfig: `${root}/tsconfig.lib.prod.json` }, development: {} },
        defaultConfiguration: 'production',
      },
      'build-ng-packagr': {
        executor: '@nx/angular:package',
        outputs: ['{workspaceRoot}/dist/ng-packagr/{projectRoot}'],
        dependsOn: ['^build-ng-packagr'],
        options: { project: `${root}/ng-package.json`, tsConfig: `${root}/tsconfig.lib.json` },
        configurations: { production: { tsConfig: `${root}/tsconfig.lib.prod.json` }, development: {} },
        defaultConfiguration: 'production',
      },
    },
  });
}

function generateSharedLib(s) {
  const project = `shared-ui${s}`;
  const prefix = `ui${s}`;
  const pkg = `${SCOPE}/${project}`;
  const root = `libs/shared/ui${s}`;
  const widgets = Array.from({ length: ENTRY_POINTS }, (_, w) => `widget-${w}`);

  write(`${root}/src/index.ts`, `export const ${pascal(project)}Widgets = ${JSON.stringify(widgets)};\n`);
  for (const [file, content] of Object.entries(coreSource(prefix))) write(`${root}/core/${file}`, content);
  const exportsByWidget = {};
  for (const ep of widgets) {
    const { files, classes } = entryPointSource({ prefix, pkg, ep });
    for (const [file, content] of Object.entries(files)) write(`${root}/${ep}/${file}`, content);
    exportsByWidget[ep] = { className: classes[0], selector: `${prefix}-${ep}-item-0`, pkg: `${pkg}/${ep}` };
  }
  writeLibConfig({ root, project, pkg, prefix, entryPoints: ['core', ...widgets], tags: ['demo:entry-points', 'type:shared'] });
  return { project, pkg, root, exportsByWidget };
}

function generateAppLib(app, l, sharedLibs) {
  const project = `${app}-lib${l}`;
  const prefix = `${app}l${l}`;
  const pkg = `${SCOPE}/${project}`;
  const root = `libs/${app}/lib${l}`;
  const features = Array.from({ length: ENTRY_POINTS }, (_, f) => `feature-${f}`);

  for (const [file, content] of Object.entries(coreSource(prefix))) write(`${root}/core/${file}`, content);
  const pages = [];
  for (const [f, ep] of features.entries()) {
    // Every feature entry point renders a widget from one of the shared libs
    const widget = sharedLibs[(f + l) % sharedLibs.length].exportsByWidget[`widget-${f}`];
    const { files, page } = entryPointSource({ prefix, pkg, ep, usesFor: (i) => (i === 0 ? widget : undefined) });
    for (const [file, content] of Object.entries(files)) write(`${root}/${ep}/${file}`, content);
    pages.push({ ep, page });
  }
  write(`${root}/src/index.ts`, `export * from './lib/routes';\n`);
  write(
    `${root}/src/lib/routes.ts`,
    `import { Route } from '@angular/router';

export const ${pascal(project)}Routes: Route[] = [
${pages.map(({ ep, page }) => `  { path: '${ep}', loadComponent: () => import('${pkg}/${ep}').then((m) => m.${page}) },`).join('\n')}
];
`
  );
  const distPaths = Object.fromEntries(
    sharedLibs.flatMap(({ pkg: sharedPkg, root: sharedRoot }) => [
      [sharedPkg, [`dist/${sharedRoot}`]],
      [`${sharedPkg}/*`, [`dist/${sharedRoot}/*`]],
    ])
  );
  writeLibConfig({ root, project, pkg, prefix, entryPoints: ['core', ...features], tags: ['demo:entry-points', `scope:${app}`], distPaths });
  return { project, pkg, root };
}

function generateApp(app, libs) {
  const appRoot = `apps/${app}`;
  cpSync('apps/app0', appRoot, { recursive: true });
  const project = JSON.parse(readFileSync(`${appRoot}/project.json`, 'utf8').replaceAll('app0', app));
  project.tags = ['demo:entry-points', 'type:app'];
  write(`${appRoot}/project.json`, project);
  write(
    `${appRoot}/src/app/app.routes.ts`,
    `import { Route } from '@angular/router';

export const appRoutes: Route[] = [
${libs.map(({ project, pkg }) => `  { path: '${project}', loadChildren: () => import('${pkg}').then((m) => m.${pascal(project)}Routes) },`).join('\n')}
];
`
  );
}

// Clean up anything generated before
for (const dir of ['apps', 'libs']) {
  for (const name of readdirSync(dir)) {
    if (/^app[1-9]\d*$/.test(name)) rmSync(`${dir}/${name}`, { recursive: true, force: true });
  }
}
rmSync('libs/shared', { recursive: true, force: true });

const sharedLibs = Array.from({ length: SHARED_LIBS }, (_, s) => generateSharedLib(s));
const appLibs = [];
for (let a = 1; a <= APPS; a++) {
  const app = `app${a}`;
  const libs = Array.from({ length: LIBS_PER_APP }, (_, l) => generateAppLib(app, l, sharedLibs));
  generateApp(app, libs);
  appLibs.push(...libs);
}

// Path aliases so apps and libs resolve the primary and secondary entry points from source
const tsconfigBase = JSON.parse(readFileSync('tsconfig.base.json', 'utf8'));
const paths = Object.fromEntries(
  Object.entries(tsconfigBase.compilerOptions.paths).filter(
    ([key]) => !/^@nx-angular-incremental-build\/(app[1-9]\d*-|shared-)/.test(key)
  )
);
for (const { pkg, root } of [...sharedLibs, ...appLibs]) {
  paths[pkg] = [`${root}/src/index.ts`];
  paths[`${pkg}/*`] = [`${root}/*/src/index.ts`];
}
tsconfigBase.compilerOptions.paths = Object.fromEntries(Object.entries(paths).sort(([a], [b]) => a.localeCompare(b)));
write('tsconfig.base.json', tsconfigBase);

const componentsPerLib = ENTRY_POINTS * (COMPONENTS + 1) + 2;
const libCount = SHARED_LIBS + APPS * LIBS_PER_APP;
console.log(
  `Generated ${APPS} apps and ${libCount} libs (${SHARED_LIBS} shared), ${ENTRY_POINTS + 1} secondary entry points and ${componentsPerLib} components per lib, ${(libCount * componentsPerLib).toLocaleString()} components in total`
);
