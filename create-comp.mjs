// lib creation command
//npx nx g @nx/angular:library --directory=libs/app0/lib0 --buildable=true --name=app0-lib0 --publishable=true --flat=true --importPath=@nx-angular-incremental-build/app-lib0 --inlineStyle=true --inlineTemplate=true --linter=none --simpleName=true --skipModule=true --skipSelector=true --skipTests=true --style=scss --unitTestRunner=none --no-interactive --dry-run

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const NUMBER_OF_COMPONENTS = 10
const ROOT_DIRECTIVES = 'libs/app0/lib0/src/lib/components';
const COMPONENTS = [];

const componentContent = (importStatements, selector, template, name) =>
  `import { Component } from '@angular/core';
  ${importStatements}

@Component({
  selector: '${selector}',
  template: \`${template}\`,
})
export class ${name} {}
`;


for (let i = 0; i < NUMBER_OF_COMPONENTS; i++) {

  const filename = `${i}.component`;
  const componentPath = join(ROOT_DIRECTIVES, `${i}.component.ts`);
  const selector =`app0-lib0-comp${i}`;
  const name = `App0Lib0Comp${i}`;
  const content = componentContent('', selector, `<p>${name} works!</p>`, name);

  COMPONENTS.push({
    filename,
    name,
    selector,
  });
  writeFileSync(componentPath, content, 'utf8');
}




const rootComponentContent =
  () => `import { Component } from '@angular/core';
${COMPONENTS.map((component) => `import { ${ component.name} } from './components/${component.filename}';`).join('\n')}

@Component({
  selector: 'app0-lib0',
  template: \`
  ${COMPONENTS.map((component) => `<${component.selector} />`).join('\n')}
  \`,
  imports: [${COMPONENTS.map(c => `${c.name},`).join('\n')}],
})
export class App0Lib0 {}
`;

writeFileSync(join('libs/app0/lib0/src/lib/', `app0-lib0.ts`), rootComponentContent(), 'utf8');
