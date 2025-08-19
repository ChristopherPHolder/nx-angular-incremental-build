// lib creation command
//npx nx g @nx/angular:library --directory=libs/app0/lib0 --buildable=true --name=app0-lib0 --publishable=true --flat=true --importPath=@nx-angular-incremental-build/app-lib0 --inlineStyle=true --inlineTemplate=true --linter=none --simpleName=true --skipModule=true --skipSelector=true --skipTests=true --style=scss --unitTestRunner=none --no-interactive --dry-run

import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// Configuration
const CHILD_COMPONENTS_COUNT = 20; // Number of child components
const SUB_CHILD_COMPONENTS_PER_CHILD = 500; // Number of sub-child components per child
const TOTAL_SUB_CHILDREN = CHILD_COMPONENTS_COUNT * SUB_CHILD_COMPONENTS_PER_CHILD;

// Directory structure
const BASE_DIR = 'libs/app0/lib0/src/lib';

const componentContent = (importStatements, selector, template, name) =>
  `import { Component } from '@angular/core';
${importStatements}

@Component({
  selector: '${selector}',
  template: \`${template}\`,
})
export class ${name} {}
`;

// Generate sub-child components for each child
const allSubChildComponents = [];
for (let childIndex = 0; childIndex < CHILD_COMPONENTS_COUNT; childIndex++) {
  const childSubChildDir = join(BASE_DIR, `child-${childIndex}/sub-children`);

  // Ensure sub-children directory exists for this child
  try {
    mkdirSync(childSubChildDir, { recursive: true });
  } catch (error) {
    // Directory might already exist
  }

  const childSubChildComponents = [];
  for (let i = 0; i < SUB_CHILD_COMPONENTS_PER_CHILD; i++) {
    const globalIndex = childIndex * SUB_CHILD_COMPONENTS_PER_CHILD + i;
    const filename = `sub-child-${globalIndex}.component`;
    const componentPath = join(childSubChildDir, `sub-child-${globalIndex}.component.ts`);
    const selector = `app0-lib0-sub-child-${globalIndex}`;
    const name = `App0Lib0SubChild${globalIndex}`;
    const content = componentContent('', selector, `<div class="sub-child">${name} works!</div>`, name);

    childSubChildComponents.push({
      filename,
      name,
      selector,
    });
    writeFileSync(componentPath, content, 'utf8');
  }
  allSubChildComponents.push(childSubChildComponents);
}

// Generate child components that import sub-child components
const childComponents = [];
for (let i = 0; i < CHILD_COMPONENTS_COUNT; i++) {
  const filename = `child-${i}.component`;
  const componentPath = join(BASE_DIR, `child-${i}/child-${i}.component.ts`);
  const selector = `app0-lib0-child-${i}`;
  const name = `App0Lib0Child${i}`;

  // Each child component imports its own sub-child components
  const childSubChildren = allSubChildComponents[i];

  const importStatements = childSubChildren
    .map(subChild => `import { ${subChild.name} } from './sub-children/${subChild.filename}';`)
    .join('\n');

  const template = `
    <div class="child-component">
      <h3>${name}</h3>
      <p>This is child component ${i}</p>
      ${childSubChildren.map(subChild => `<${subChild.selector} />`).join('\n      ')}
    </div>`;

  const content = `import { Component } from '@angular/core';
${importStatements}

@Component({
  selector: '${selector}',
  template: \`${template}\`,
  imports: [
${childSubChildren.map(subChild => `    ${subChild.name},`).join('\n')}
  ],
})
export class ${name} {}
`;

  childComponents.push({
    filename,
    name,
    selector,
    subChildren: childSubChildren,
  });
  writeFileSync(componentPath, content, 'utf8');
}

// Generate root component that imports all child components
const rootComponentContent = `import { Component } from '@angular/core';
${childComponents.map((component, index) => `import { ${component.name} } from './child-${index}/${component.filename}';`).join('\n')}

@Component({
  selector: 'app0-lib0',
  template: \`
    <div class="root-component">
      <h1>App0Lib0 Root Component</h1>
      <p>This is the root component with ${CHILD_COMPONENTS_COUNT} child components</p>
      <div class="children-container">
        ${childComponents.map((component) => `<${component.selector} />`).join('\n        ')}
      </div>
    </div>
  \`,
  imports: [
${childComponents.map(c => `    ${c.name},`).join('\n')}
  ],
})
export class App0Lib0 {}
`;

writeFileSync(join(BASE_DIR, 'app0-lib0.ts'), rootComponentContent, 'utf8');

// Generate index.ts to export only the root component
const indexContent = `// Root component
export { App0Lib0 } from './app0-lib0';
`;

writeFileSync(join(BASE_DIR, 'index.ts'), indexContent, 'utf8');

console.log(`Generated complex component structure:`);
console.log(`- 1 root component (App0Lib0)`);
console.log(`- ${CHILD_COMPONENTS_COUNT} child components`);
console.log(`- ${TOTAL_SUB_CHILDREN} sub-child components`);
console.log(`- Total: ${1 + CHILD_COMPONENTS_COUNT + TOTAL_SUB_CHILDREN} components`);
