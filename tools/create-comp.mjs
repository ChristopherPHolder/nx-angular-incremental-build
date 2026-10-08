// lib creation command
//npx nx g @nx/angular:library --directory=libs/${APP_NAME}/${LIB_NAME} --buildable=true --name=${APP_NAME}-${LIB_NAME} --publishable=true --flat=true --importPath=@nx-angular-incremental-build/${APP_NAME}-${LIB_NAME} --inlineStyle=true --inlineTemplate=true --linter=none --simpleName=true --skipModule=true --skipSelector=true --skipTests=true --style=scss --unitTestRunner=none --no-interactive --dry-run

import { writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Generates a complex Angular component structure for performance testing
 * @param {string} appName - The application name (e.g., 'app0', 'app1')
 * @param {string} libName - The library name (e.g., 'lib0', 'lib1')
 * @param {Object} config - Configuration options
 * @param {number} config.childComponentsCount - Number of child components (default: 50)
 * @param {number} config.subChildComponentsPerChild - Number of sub-child components per child (default: 100)
 */
/**
 * Cleans up the library directory before generating new components
 * @param {string} baseDir - The base directory to clean
 */
function cleanupLibraryDirectory(baseDir) {
  console.log(`🧹 Cleaning up library directory: ${baseDir}`);
  
  if (existsSync(baseDir)) {
    try {
      rmSync(baseDir, { recursive: true, force: true });
      console.log(`✅ Successfully cleaned up ${baseDir}`);
    } catch (error) {
      console.warn(`⚠️  Warning: Could not fully clean up ${baseDir}:`, error.message);
    }
  } else {
    console.log(`📁 Directory ${baseDir} doesn't exist, no cleanup needed`);
  }
  
  // Ensure the directory exists
  try {
    mkdirSync(baseDir, { recursive: true });
    console.log(`📁 Created directory: ${baseDir}`);
  } catch (error) {
    console.error(`❌ Error creating directory ${baseDir}:`, error.message);
    throw error;
  }
}

function generateComponentStructure(appName, libName, config = {}) {
  // Component Configuration with defaults
  const CHILD_COMPONENTS_COUNT = config.childComponentsCount || 50;
  const SUB_CHILD_COMPONENTS_PER_CHILD = config.subChildComponentsPerChild || 100;
  const TOTAL_SUB_CHILDREN = CHILD_COMPONENTS_COUNT * SUB_CHILD_COMPONENTS_PER_CHILD;

  // Directory structure
  const BASE_DIR = `libs/${appName}/${libName}/src/lib`;
  
  // Clean up the library directory first
  cleanupLibraryDirectory(BASE_DIR);

const componentContent = (importStatements, selector, template, name, properties = '') =>
  `import { Component } from '@angular/core';
${importStatements}

// EXTREMELY COMPLEX TYPESCRIPT INTERFACES - These will dramatically slow down compilation
interface ComplexDataStructure {
  id: number;
  name: string;
  metadata: {
    created: Date;
    modified: Date;
    tags: string[];
    properties: Record<string, any>;
    nested: {
      level1: {
        level2: {
          level3: {
            value: number;
            computed: boolean;
            dependencies: Array<{
              id: string;
              type: 'primary' | 'secondary' | 'tertiary';
              weight: number;
              metadata: Record<string, any>;
            }>;
          };
        };
      };
    };
  };
  calculations: {
    base: number;
    multipliers: number[];
    factors: Array<{
      name: string;
      value: number;
      formula: (input: number) => number;
    }>;
  };
}

interface ProcessingResult<T = any> {
  success: boolean;
  data: T;
  errors: string[];
  warnings: string[];
  metadata: {
    processingTime: number;
    memoryUsage: number;
    cacheHits: number;
    cacheMisses: number;
  };
}

// EXTREMELY COMPLEX GENERIC TYPES - These will make TypeScript work very hard
type ComplexGenericType<T extends Record<string, any>, K extends keyof T> = {
  [P in K]: T[P] extends Function ? T[P] : T[P] extends object ? ComplexGenericType<T[P], keyof T[P]> : T[P];
} & {
  computed: {
    [P in K as \`computed\${Capitalize<string & P>}\`]: T[P] extends number ? number : T[P] extends string ? string : any;
  };
};

// ADDITIONAL COMPLEX TYPES FOR COMPILATION SLOWDOWN
type DeepNestedType<T, Depth extends number = 10> = Depth extends 0 ? T : {
  [K in keyof T]: T[K] extends object ? DeepNestedType<T[K], Prev<Depth>> : T[K];
} & {
  metadata: {
    depth: Depth;
    computed: boolean;
    dependencies: Array<DeepNestedType<T, Prev<Depth>>>;
    transformations: Array<(input: T) => DeepNestedType<T, Prev<Depth>>>;
  };
};

type Prev<T extends number> = T extends 0 ? never : T extends 1 ? 0 : T extends 2 ? 1 : T extends 3 ? 2 : T extends 4 ? 3 : T extends 5 ? 4 : T extends 6 ? 5 : T extends 7 ? 6 : T extends 8 ? 7 : T extends 9 ? 8 : T extends 10 ? 9 : never;

interface HeavyComputationInterface<T extends Record<string, any>> {
  data: DeepNestedType<T, 8>;
  processors: Array<{
    name: string;
    transform: (input: DeepNestedType<T, 8>) => DeepNestedType<T, 8>;
    validate: (input: DeepNestedType<T, 8>) => boolean;
    dependencies: Array<keyof T>;
  }>;
  cache: Map<string, DeepNestedType<T, 8>>;
  observers: Array<(data: DeepNestedType<T, 8>) => void>;
}

// COMPLEX UNION TYPES - These are expensive for TypeScript to process
type ComplexUnionType = 
  | { type: 'user'; data: { id: string; name: string; permissions: string[]; metadata: Record<string, any> } }
  | { type: 'admin'; data: { id: string; name: string; roles: string[]; privileges: Record<string, boolean> } }
  | { type: 'guest'; data: { id: string; sessionId: string; temporary: boolean; expires: Date } }
  | { type: 'system'; data: { id: string; version: string; configuration: Record<string, any>; health: boolean } }
  | { type: 'service'; data: { id: string; endpoint: string; methods: string[]; authentication: boolean } };

// COMPLEX MAPPED TYPES - These are very expensive for TypeScript
type ComplexMappedType<T> = {
  [K in keyof T as K extends string ? \`computed\${Capitalize<K>}\` : never]: T[K] extends number 
    ? { value: number; formatted: string; percentage: number; trend: 'up' | 'down' | 'stable' }
    : T[K] extends string 
    ? { value: string; length: number; hash: string; normalized: string }
    : T[K] extends boolean
    ? { value: boolean; opposite: boolean; probability: number }
    : { value: T[K]; type: string; serialized: string };
} & {
  metadata: {
    totalKeys: number;
    computedKeys: number;
    lastUpdated: Date;
    version: string;
  };
};

// EXTREMELY COMPLEX RECURSIVE TYPES - These will make TypeScript work very hard
type RecursiveComplexType<T, Depth extends number = 5> = Depth extends 0 ? T : {
  [K in keyof T]: T[K] extends object 
    ? RecursiveComplexType<T[K], Prev<Depth>> & {
        computed: {
          [P in keyof T[K] as \`computed\${Capitalize<string & P>}\`]: T[K][P] extends number 
            ? { value: number; doubled: number; squared: number; cubed: number }
            : T[K][P] extends string 
            ? { value: string; reversed: string; uppercased: string; lowercased: string }
            : T[K][P] extends boolean
            ? { value: boolean; negated: boolean; random: boolean }
            : { value: T[K][P]; type: string; serialized: string };
        };
        metadata: {
          depth: Depth;
          computed: boolean;
          dependencies: Array<RecursiveComplexType<T[K], Prev<Depth>>>;
          transformations: Array<(input: T[K]) => RecursiveComplexType<T[K], Prev<Depth>>>;
        };
      }
    : T[K];
} & {
  globalMetadata: {
    totalDepth: Depth;
    totalComputed: number;
    lastProcessed: Date;
    processingTime: number;
    memoryUsage: number;
  };
};

// COMPLEX CONDITIONAL TYPES - These are expensive for TypeScript to resolve
type ComplexConditionalType<T> = T extends string 
  ? { type: 'string'; value: T; length: number; hash: string; normalized: string; reversed: string }
  : T extends number
  ? { type: 'number'; value: T; doubled: number; squared: number; cubed: number; formatted: string }
  : T extends boolean
  ? { type: 'boolean'; value: T; negated: boolean; random: boolean; probability: number }
  : T extends object
  ? { type: 'object'; value: T; keys: Array<keyof T>; values: Array<T[keyof T]>; entries: Array<[keyof T, T[keyof T]]> }
  : { type: 'unknown'; value: T; serialized: string };

// COMPLEX UTILITY TYPES - These will slow down compilation
type ComplexUtilityType<T> = {
  [K in keyof T]: ComplexConditionalType<T[K]> & {
    metadata: {
      key: K;
      type: string;
      computed: boolean;
      dependencies: Array<keyof T>;
      transformations: Array<(input: T[K]) => ComplexConditionalType<T[K]>>;
    };
  };
} & {
  globalMetadata: {
    totalKeys: number;
    totalComputed: number;
    lastUpdated: Date;
    version: string;
    processingTime: number;
  };
};

@Component({
  selector: '${selector}',
  template: \`${template}\`,
})
export class ${name} {
${properties}
}
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
    const selector = `${appName}-${libName}-sub-child-${globalIndex}`;
    const name = `${appName.charAt(0).toUpperCase() + appName.slice(1)}${libName.charAt(0).toUpperCase() + libName.slice(1)}SubChild${globalIndex}`;
    
    // Generate EXTREMELY complex template with deep nesting and heavy computation
    const template = `
    <div class="sub-child">
      <h4>{{title}}</h4>
      
      @if (isVisible) {
        <div class="visible-content">
          <p>Status: {{status}}</p>
          
          @switch (status) {
            @case ('active') {
              <div class="status-active">
                <span class="badge success">Active</span>
                <p>Component is running smoothly</p>
              </div>
            }
            @case ('warning') {
              <div class="status-warning">
                <span class="badge warning">Warning</span>
                <p>Component needs attention</p>
              </div>
            }
            @case ('error') {
              <div class="status-error">
                <span class="badge error">Error</span>
                <p>Component has issues</p>
              </div>
            }
            @default {
              <div class="status-unknown">
                <span class="badge default">Unknown</span>
                <p>Status not determined</p>
              </div>
            }
          }
          
          <!-- EXTREMELY HEAVY COMPUTATION BLOCK - This will make compilation very slow -->
          <div class="heavy-computation">
            <h5>Complex Data Processing</h5>
            @for (category of getComplexCategories(); track category.id; let catIdx = $index) {
              <div class="category" [class]="'category-' + catIdx">
                <h6>{{category.name}} ({{category.items.length}} items)</h6>
                @if (category.isExpanded) {
                  @for (item of category.items; track item.id; let itemIdx = $index) {
                    <div class="item" [class]="getItemClass(item, itemIdx)">
                      <span class="item-name">{{item.name}}</span>
                      <span class="item-value">{{calculateComplexValue(item, catIdx, itemIdx)}}</span>
                      <span class="computed-value">{{computeHeavyValue(item, catIdx, itemIdx, getComplexCategories().length, getCurrentTimestamp())}}</span>
                      @if (item.hasSubItems) {
                        @for (subItem of item.subItems; track subItem.id; let subIdx = $index) {
                          <div class="sub-item" [class]="getSubItemClass(subItem, subIdx)">
                            <span>{{subItem.name}}: {{processSubItemData(subItem, item, category)}}</span>
                            <span class="processed-data">{{processComplexData(subItem, item, category, catIdx, itemIdx, subIdx)}}</span>
                            <span class="validated-data">{{validateAndTransform(subItem, item, category, getComplexCategories())}}</span>
                            @if (subItem.isSpecial) {
                              <div class="special-content">
                                @for (specialData of getSpecialData(subItem); track specialData.id) {
                                  <div class="special-item">
                                    <span>{{specialData.label}}: {{complexCalculation(specialData, subItem, item, category)}}</span>
                                    <span class="advanced-calculation">{{performAdvancedCalculation(specialData, subItem, item, category, getComplexCategories(), getCurrentTimestamp())}}</span>
                                    <span class="conditional-value">{{getConditionalValue(specialData, subItem, item, category, catIdx, itemIdx, subIdx)}}</span>
                                    @if (specialData.hasVariants) {
                                      @for (variant of specialData.variants; track variant.id) {
                                        <div class="variant" [class]="getVariantClass(variant)">
                                          <span>{{variant.name}} - {{calculateVariantValue(variant, specialData, subItem)}}</span>
                                          <span class="variant-computed">{{computeVariantMetrics(variant, specialData, subItem, item, category)}}</span>
                                          <span class="variant-formatted">{{formatVariantData(variant, specialData, subItem, getComplexCategories().length)}}</span>
                                        </div>
                                      }
                                    }
                                  </div>
                                }
                              </div>
                            }
                          </div>
                        }
                      }
                    </div>
                  }
                }
              </div>
            }
            
            <!-- ADDITIONAL HEAVY COMPUTATION BLOCKS - Reduced complexity -->
            <div class="additional-computations">
              <h6>Additional Heavy Processing</h6>
              @for (i of getProcessingIndices(); track i) {
                <div class="processing-item">
                  <span>{{processHeavyComputation(i, getComplexCategories(), getCurrentTimestamp())}}</span>
                  <span>{{transformData(i, getComplexCategories(), getProcessingIndices())}}</span>
                  @for (j of getNestedIndices(i); track j) {
                    <div class="nested-processing">
                      <span>{{performNestedComputation(i, j, getComplexCategories(), getProcessingIndices(), getNestedIndices(i))}}</span>
                    </div>
                  }
                </div>
              }
            </div>
          </div>
          
          @if (hasData) {
            <div class="data-section">
              <h5>Data Points:</h5>
              @defer (on viewport; when shouldLoadData) {
                <ul>
                  @for (item of dataItems; track item.id) {
                    <li [class]="item.type">
                      @defer (on timer(100ms)) {
                        <span class="item-name">{{item.name}}:</span>
                        <span class="item-value">{{item.value}}</span>
                        @if (item.isImportant) {
                          <span class="important">⭐</span>
                        }
                      } @placeholder {
                        <div class="data-skeleton"></div>
                      }
                    </li>
                  }
                </ul>
              } @placeholder {
                <div class="data-loading">
                  <div class="skeleton"></div>
                  <p>Loading data...</p>
                </div>
              } @loading (minimum 200ms) {
                <div class="data-loading">
                  <div class="spinner small"></div>
                  <p>Loading data points...</p>
                </div>
              } @error {
                <div class="data-error">
                  <p>Failed to load data</p>
                  <button (click)="retryDataLoad()" class="btn btn-sm">Retry</button>
                </div>
              }
            </div>
          } @else {
            <div class="no-data">
              <p>No data available</p>
              @defer (on interaction(loadDataBtn)) {
                <button (click)="loadSampleData()" class="btn btn-primary">Load Sample Data</button>
              } @placeholder {
                <button #loadDataBtn class="btn btn-secondary">Click to load data</button>
              }
            </div>
          }
          
          <div class="actions">
            @if (canEdit) {
              <button (click)="edit()" class="btn btn-primary">Edit</button>
            }
            @if (canDelete) {
              <button (click)="delete()" class="btn btn-danger">Delete</button>
            }
            @if (!canEdit && !canDelete) {
              <span class="no-actions">No actions available</span>
            }
          </div>
        </div>
      } @else {
        <div class="hidden-content">
          <p>Content is hidden</p>
          <button (click)="toggleVisibility()" class="btn btn-secondary">Show</button>
        </div>
      }
      
      <div class="metadata">
        <small>ID: {{componentId}} | Index: ${globalIndex} | Child: ${childIndex}</small>
      </div>
    </div>`;
    
    const properties = `  title = '${name} Component';
  isVisible = true;
  hasData = ${globalIndex % 3 === 0};
  canEdit = ${globalIndex % 2 === 0};
  canDelete = ${globalIndex % 4 === 0};
  componentId = '${appName}-${libName}-sub-child-${globalIndex}';
  shouldLoadData = true;
  dataLoadError = false;
  
  status = this.getStatus();
  dataItems = this.generateDataItems();
  
  // HEAVY COMPUTATION PROPERTIES - Complex data structures
  complexCategories = this.generateComplexCategories();
  processingCache = new Map<string, any>();
  
  // EXTREMELY COMPLEX TYPESCRIPT PROPERTIES - These will make compilation very slow
  complexData: ComplexDataStructure = {
    id: ${globalIndex},
    name: \`ComplexData\${${globalIndex}}\`,
    metadata: {
      created: new Date(),
      modified: new Date(),
      tags: ['complex', 'heavy', 'computation'],
      properties: { complexity: 'high', performance: 'slow' },
      nested: {
        level1: {
          level2: {
            level3: {
              value: ${globalIndex} * 100,
              computed: true,
              dependencies: [
                { id: 'dep1', type: 'primary', weight: 1.5, metadata: { source: 'template' } },
                { id: 'dep2', type: 'secondary', weight: 0.8, metadata: { source: 'component' } }
              ]
            }
          }
        }
      }
    },
    calculations: {
      base: ${globalIndex} * 10,
      multipliers: [1.2, 1.5, 2.0, 0.8],
      factors: [
        { name: 'factor1', value: 1.1, formula: (x: number) => x * 1.1 },
        { name: 'factor2', value: 1.3, formula: (x: number) => x * 1.3 }
      ]
    }
  };
  
  processingResult: ProcessingResult<ComplexDataStructure> = {
    success: true,
    data: this.complexData,
    errors: [],
    warnings: [],
    metadata: {
      processingTime: 100,
      memoryUsage: 1024,
      cacheHits: 5,
      cacheMisses: 2
    }
  };
  
  // ADDITIONAL COMPLEX TYPESCRIPT PROPERTIES FOR COMPILATION SLOWDOWN
  complexGenericData: ComplexGenericType<{ id: number; name: string; value: number }, 'id' | 'name' | 'value'> = {
    id: ${globalIndex},
    name: \`GenericData\${${globalIndex}}\`,
    value: ${globalIndex} * 50,
    computed: {
      computedId: ${globalIndex} * 2,
      computedName: \`Computed\${${globalIndex}}\`,
      computedValue: ${globalIndex} * 100
    }
  };
  
  heavyComputationData: HeavyComputationInterface<{ id: number; name: string; value: number }> = {
    data: {
      id: ${globalIndex},
      name: \`HeavyData\${${globalIndex}}\`,
      value: ${globalIndex} * 25,
      metadata: {
        depth: 8,
        computed: true,
        dependencies: [],
        transformations: []
      }
    },
    processors: [
      {
        name: 'processor1',
        transform: (input) => input,
        validate: (input) => true,
        dependencies: ['id', 'name']
      }
    ],
    cache: new Map(),
    observers: []
  };
  
  recursiveComplexData: RecursiveComplexType<{ id: number; name: string; value: number }, 3> = {
    id: ${globalIndex},
    name: \`RecursiveData\${${globalIndex}}\`,
    value: ${globalIndex} * 75,
    globalMetadata: {
      totalDepth: 3,
      totalComputed: 3,
      lastProcessed: new Date(),
      processingTime: 200,
      memoryUsage: 2048
    }
  };
  
  getStatus() {
    const statuses = ['active', 'warning', 'error'];
    return statuses[${globalIndex} % statuses.length];
  }
  
  generateDataItems(): any[] {
    const items: any[] = [];
    for (let i = 0; i < ${(globalIndex % 5) + 1}; i++) {
      items.push({
        id: i,
        name: \`Item \${i + 1}\`,
        value: Math.random() * 100,
        type: ['primary', 'secondary', 'tertiary'][i % 3],
        isImportant: i % 2 === 0
      });
    }
    return items;
  }
  
  // HEAVY COMPUTATION METHODS - These will slow down compilation significantly
  generateComplexCategories(): any[] {
    const categories: any[] = [];
    for (let i = 0; i < ${(globalIndex % 8) + 3}; i++) {
      const category: any = {
        id: i,
        name: \`Category \${i + 1}\`,
        isExpanded: i % 2 === 0,
        items: [] as any[]
      };
      
      for (let j = 0; j < ${(globalIndex % 6) + 2}; j++) {
        const item: any = {
          id: j,
          name: \`Item \${j + 1} in Category \${i + 1}\`,
          hasSubItems: j % 3 === 0,
          subItems: [] as any[]
        };
        
        if (item.hasSubItems) {
          for (let k = 0; k < ${(globalIndex % 4) + 1}; k++) {
            item.subItems.push({
              id: k,
              name: \`SubItem \${k + 1}\`,
              isSpecial: k % 2 === 0
            });
          }
        }
        
        category.items.push(item);
      }
      
      categories.push(category);
    }
    return categories;
  }
  
  getComplexCategories(): any[] {
    return this.complexCategories;
  }
  
  getItemClass(item: any, index: number): string {
    const classes: string[] = ['item'];
    classes.push(\`item-\${index}\`);
    classes.push(\`type-\${item.type || 'default'}\`);
    if (item.hasSubItems) classes.push('has-sub-items');
    return classes.join(' ');
  }
  
  calculateComplexValue(item: any, catIdx: number, itemIdx: number): number {
    // Complex calculation that will be called frequently
    const baseValue = item.value || Math.random() * 100;
    const categoryMultiplier = (catIdx + 1) * 1.5;
    const itemMultiplier = (itemIdx + 1) * 0.8;
    const timeFactor = Date.now() % 1000 / 1000;
    
    return Math.round((baseValue * categoryMultiplier * itemMultiplier * timeFactor) * 100) / 100;
  }
  
  getSubItemClass(subItem: any, index: number): string {
    const classes: string[] = ['sub-item'];
    classes.push(\`sub-item-\${index}\`);
    if (subItem.isSpecial) classes.push('special');
    return classes.join(' ');
  }
  
  processSubItemData(subItem: any, item: any, category: any): string {
    // Heavy processing method
    const cacheKey = \`\${subItem.id}-\${item.id}-\${category.id}\`;
    if (this.processingCache.has(cacheKey)) {
      return this.processingCache.get(cacheKey) as string;
    }
    
    const result = \`Processed: \${subItem.name} from \${item.name} in \${category.name}\`;
    this.processingCache.set(cacheKey, result);
    return result;
  }
  
  getSpecialData(subItem: any): any[] {
    if (!subItem.isSpecial) return [];
    
    const specialData: any[] = [];
    for (let i = 0; i < ${(globalIndex % 3) + 2}; i++) {
      specialData.push({
        id: i,
        label: \`Special Data \${i + 1}\`,
        hasVariants: i % 2 === 0,
        variants: i % 2 === 0 ? [
          { id: 0, name: 'Variant A' },
          { id: 1, name: 'Variant B' },
          { id: 2, name: 'Variant C' }
        ] : []
      });
    }
    return specialData;
  }
  
  complexCalculation(specialData: any, subItem: any, item: any, category: any): number {
    // Very complex calculation with multiple parameters
    const factors: number[] = [
      specialData.id * 1.2,
      subItem.id * 0.9,
      item.id * 1.1,
      category.id * 0.8,
      Math.sin(Date.now() / 1000) * 10
    ];
    
    return factors.reduce((acc, factor) => acc + factor, 0);
  }
  
  getVariantClass(variant: any): string {
    return \`variant variant-\${variant.id}\`;
  }
  
  calculateVariantValue(variant: any, specialData: any, subItem: any): number {
    return (variant.id * specialData.id * subItem.id) % 100;
  }
  
  // EXTREMELY HEAVY COMPUTATION METHODS - These will make compilation very slow
  computeHeavyValue(item: any, catIdx: number, itemIdx: number, totalCategories: number, timestamp: number): string {
    const baseValue = item.value || Math.random() * 100;
    const timeFactor = (timestamp % 10000) / 10000;
    const categoryFactor = (catIdx + 1) * 1.5;
    const itemFactor = (itemIdx + 1) * 0.8;
    const totalFactor = totalCategories * 0.1;
    
    const result = (baseValue * timeFactor * categoryFactor * itemFactor * totalFactor);
    return \`Heavy: \${result.toFixed(4)}\`;
  }
  
  formatComplexValue(value: number, itemName: string, categoryName: string): string {
    const formatted = value.toFixed(2);
    const hash = (itemName + categoryName).split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    return \`Formatted: \${formatted} (Hash: \${Math.abs(hash)})\`;
  }
  
  processComplexData(subItem: any, item: any, category: any, catIdx: number, itemIdx: number, subIdx: number): string {
    const factors = [subItem.id, item.id, category.id, catIdx, itemIdx, subIdx];
    const sum = factors.reduce((acc, factor) => acc + factor, 0);
    const product = factors.reduce((acc, factor) => acc * factor, 1);
    return \`Processed: \${sum} | \${product}\`;
  }
  
  validateAndTransform(subItem: any, item: any, category: any, categories: any[]): string {
    const isValid = subItem.id > 0 && item.id > 0 && category.id >= 0;
    const transform = isValid ? (subItem.id * item.id * category.id) : 0;
    const categoryCount = categories.length;
    return \`Valid: \${isValid} | Transform: \${transform} | Categories: \${categoryCount}\`;
  }
  
  performAdvancedCalculation(specialData: any, subItem: any, item: any, category: any, categories: any[], timestamp: number): string {
    const timeFactor = Math.sin(timestamp / 1000) * 10;
    const dataFactor = specialData.id * subItem.id * item.id * category.id;
    const categoryFactor = categories.length * 0.5;
    const result = (timeFactor + dataFactor + categoryFactor) % 1000;
    return \`Advanced: \${result.toFixed(2)}\`;
  }
  
  getConditionalValue(specialData: any, subItem: any, item: any, category: any, catIdx: number, itemIdx: number, subIdx: number): string {
    const conditions = [
      specialData.id % 2 === 0,
      subItem.id % 3 === 0,
      item.id % 4 === 0,
      category.id % 5 === 0,
      catIdx % 2 === 0,
      itemIdx % 3 === 0,
      subIdx % 4 === 0
    ];
    
    const trueCount = conditions.filter(c => c).length;
    const value = (specialData.id + subItem.id + item.id + category.id + catIdx + itemIdx + subIdx) * trueCount;
    return \`Conditional: \${value} (True: \${trueCount}/7)\`;
  }
  
  computeVariantMetrics(variant: any, specialData: any, subItem: any, item: any, category: any): string {
    const metrics = {
      variant: variant.id,
      special: specialData.id,
      sub: subItem.id,
      item: item.id,
      category: category.id
    };
    
    const sum = Object.values(metrics).reduce((acc: number, val: any) => acc + val, 0);
    const avg = sum / Object.keys(metrics).length;
    return \`Metrics: Sum=\${sum}, Avg=\${avg.toFixed(2)}\`;
  }
  
  formatVariantData(variant: any, specialData: any, subItem: any, categoryCount: number): string {
    const data = {
      variant: variant.name,
      special: specialData.label,
      sub: subItem.name,
      categories: categoryCount
    };
    
    const hash = Object.values(data).join('').split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    
    return \`Formatted: \${Math.abs(hash)}\`;
  }
  
  getProcessingIndices(): number[] {
    const indices: number[] = [];
    for (let i = 0; i < ${(globalIndex % 5) + 3}; i++) {
      indices.push(i);
    }
    return indices;
  }
  
  getNestedIndices(parentIndex: number): number[] {
    const indices: number[] = [];
    for (let i = 0; i < ${(globalIndex % 3) + 2}; i++) {
      indices.push(parentIndex * 10 + i);
    }
    return indices;
  }
  
  processHeavyComputation(index: number, categories: any[], timestamp: number): string {
    const timeFactor = (timestamp % 1000) / 1000;
    const categoryFactor = categories.length * 0.1;
    const indexFactor = index * 1.5;
    const result = (timeFactor + categoryFactor + indexFactor) * 100;
    return \`Heavy[\${index}]: \${result.toFixed(2)}\`;
  }
  
  transformData(index: number, categories: any[], indices: number[]): string {
    const categorySum = categories.reduce((acc, cat) => acc + cat.id, 0);
    const indexSum = indices.reduce((acc, idx) => acc + idx, 0);
    const transform = (index * categorySum + indexSum) % 1000;
    return \`Transform[\${index}]: \${transform}\`;
  }
  
  validateComputation(index: number, categories: any[], indices: number[], timestamp: number): string {
    const isValid = index >= 0 && categories.length > 0 && indices.length > 0;
    const timeValid = timestamp > 0;
    const result = isValid && timeValid ? (index * categories.length * indices.length) % 100 : 0;
    return \`Validate[\${index}]: \${result} (Valid: \${isValid && timeValid})\`;
  }
  
  performNestedComputation(i: number, j: number, categories: any[], indices: number[], nestedIndices: number[]): string {
    const categoryFactor = categories.reduce((acc, cat) => acc + cat.id, 0);
    const indexFactor = indices.reduce((acc, idx) => acc + idx, 0);
    const nestedFactor = nestedIndices.reduce((acc, idx) => acc + idx, 0);
    const result = (i * j * categoryFactor + indexFactor + nestedFactor) % 10000;
    return \`Nested[\${i}][\${j}]: \${result}\`;
  }
  
  calculateNestedMetrics(i: number, j: number, categories: any[], timestamp: number): string {
    const timeFactor = Math.cos(timestamp / 1000) * 5;
    const positionFactor = (i * 10 + j) * 0.1;
    const categoryFactor = categories.length * 0.05;
    const result = (timeFactor + positionFactor + categoryFactor) * 100;
    return \`Metrics[\${i}][\${j}]: \${result.toFixed(2)}\`;
  }
  
  getCurrentTimestamp(): number {
    return Date.now();
  }
  
  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
  
  edit() {
    console.log('Editing component', this.componentId);
  }
  
  delete() {
    console.log('Deleting component', this.componentId);
  }
  
  retryDataLoad() {
    this.dataLoadError = false;
    this.shouldLoadData = false;
    setTimeout(() => {
      this.shouldLoadData = true;
    }, 100);
  }
  
  loadSampleData() {
    this.hasData = true;
    this.dataItems = this.generateDataItems();
  }`;
    
    const content = componentContent('', selector, template, name, properties);

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
  const selector = `${appName}-${libName}-child-${i}`;
  const name = `${appName.charAt(0).toUpperCase() + appName.slice(1)}${libName.charAt(0).toUpperCase() + libName.slice(1)}Child${i}`;

  // Each child component imports its own sub-child components
  const childSubChildren = allSubChildComponents[i];

  const importStatements = childSubChildren
    .map(subChild => `import { ${subChild.name} } from './sub-children/${subChild.filename}';`)
    .join('\n');

  const template = `
    <div class="child-component">
      <div class="child-header">
        <h3>{{title}}</h3>
        <div class="child-controls">
          @if (isExpanded) {
            <button (click)="collapse()" class="btn btn-sm">Collapse</button>
          } @else {
            <button (click)="expand()" class="btn btn-sm">Expand</button>
          }
          <button (click)="toggleMode()" class="btn btn-sm" [class]="mode === 'grid' ? 'btn-primary' : 'btn-secondary'">
            {{mode === 'grid' ? 'List View' : 'Grid View'}}
          </button>
        </div>
      </div>
      
      <div class="child-info">
        <p>Child component ${i} | Status: {{status}} | Items: {{subChildren.length}}</p>
        <div class="progress-bar">
          <div class="progress-fill" [style.width.%]="progress"></div>
        </div>
      </div>
      
      @if (isExpanded) {
        <div class="sub-children-container" [class]="'mode-' + mode">
          @switch (status) {
            @case ('loading') {
              <div class="loading-state">
                <p>Loading sub-components...</p>
                <div class="spinner"></div>
              </div>
            }
            @case ('error') {
              <div class="error-state">
                <p>Error loading components</p>
                <button (click)="retry()" class="btn btn-warning">Retry</button>
              </div>
            }
            @case ('loaded') {
              @if (mode === 'grid') {
                <div class="grid-layout">
                  ${childSubChildren.map((subChild, idx) => `<div class="grid-item">
                    @defer (on viewport; when shouldLoadComponent(${idx})) {
                      <${subChild.selector} />
                    } @placeholder {
                      <div class="placeholder">
                        <div class="skeleton"></div>
                        <p>Loading ${subChild.selector}...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Failed to load ${subChild.selector}</p>
                        <button (click)="retryLoadComponent(${idx})" class="btn btn-sm">Retry</button>
                      </div>
                    }
                  </div>`).join('\n                  ')}
                </div>
              } @else {
                <div class="list-layout">
                  ${childSubChildren.map((subChild, idx) => `<div class="list-item" [class]="${idx} % 2 === 0 ? 'even' : 'odd'">
                    <div class="item-header">
                      <span class="item-index">${idx + 1}</span>
                      <span class="item-selector">${subChild.selector}</span>
                      <button (click)="toggleComponentLoad(${idx})" class="btn btn-xs">
                        {{isComponentLoaded(${idx}) ? 'Unload' : 'Load'}}
                      </button>
                    </div>
                    @defer (on interaction(loadBtn${idx}); when isComponentLoaded(${idx})) {
                      <${subChild.selector} />
                    } @placeholder {
                      <div class="placeholder">
                        <p>Click to load ${subChild.selector}</p>
                        <button #loadBtn${idx} class="btn btn-primary">Load Component</button>
                      </div>
                    } @loading (minimum 500ms) {
                      <div class="loading-placeholder">
                        <div class="spinner"></div>
                        <p>Loading ${subChild.selector}...</p>
                      </div>
                    } @error {
                      <div class="error-placeholder">
                        <p>Error loading ${subChild.selector}</p>
                        <button (click)="retryLoadComponent(${idx})" class="btn btn-warning">Retry</button>
                      </div>
                    }
                  </div>`).join('\n                  ')}
                </div>
              }
            }
            @default {
              <div class="unknown-state">
                <p>Unknown status: {{status}}</p>
              </div>
            }
          }
        </div>
      } @else {
        <div class="collapsed-summary">
          <p>{{subChildren.length}} sub-components hidden</p>
          <button (click)="expand()" class="btn btn-link">Click to expand</button>
        </div>
      }
      
      <div class="child-footer">
        <small>Generated at: {{generatedAt}} | Mode: {{mode}} | Progress: {{progress}}%</small>
      </div>
    </div>`;

  const childProperties = `  title = '${name}';
  isExpanded = true;
  mode: 'grid' | 'list' = 'grid';
  status: 'loading' | 'loaded' | 'error' = 'loaded';
  progress = ${Math.floor(Math.random() * 100)};
  generatedAt = new Date().toLocaleTimeString();
  
  subChildren = [
${childSubChildren.map(subChild => `    { selector: '${subChild.selector}', name: '${subChild.name}' }`).join(',\n')}
  ];
  
  // Defer loading state management
  loadedComponents = new Set<number>();
  loadingComponents = new Set<number>();
  errorComponents = new Set<number>();
  
  expand() {
    this.isExpanded = true;
  }
  
  collapse() {
    this.isExpanded = false;
  }
  
  toggleMode() {
    this.mode = this.mode === 'grid' ? 'list' : 'grid';
  }
  
  retry() {
    this.status = 'loading';
    setTimeout(() => {
      this.status = 'loaded';
    }, 1000);
  }
  
  shouldLoadComponent(index: number): boolean {
    // Load components in batches or based on viewport
    return index < 10 || this.loadedComponents.has(index);
  }
  
  isComponentLoaded(index: number): boolean {
    return this.loadedComponents.has(index);
  }
  
  toggleComponentLoad(index: number) {
    if (this.loadedComponents.has(index)) {
      this.loadedComponents.delete(index);
    } else {
      this.loadedComponents.add(index);
    }
  }
  
  retryLoadComponent(index: number) {
    this.errorComponents.delete(index);
    this.loadingComponents.add(index);
    
    // Simulate loading delay
    setTimeout(() => {
      this.loadingComponents.delete(index);
      if (Math.random() > 0.1) { // 90% success rate
        this.loadedComponents.add(index);
      } else {
        this.errorComponents.add(index);
      }
    }, Math.random() * 2000 + 500);
  }`;

  const content = `import { Component } from '@angular/core';
${importStatements}

@Component({
  selector: '${selector}',
  template: \`${template}\`,
  imports: [
${childSubChildren.map(subChild => `    ${subChild.name},`).join('\n')}
  ],
})
export class ${name} {
${childProperties}
}
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
import { FormsModule } from '@angular/forms';
${childComponents.map((component, index) => `import { ${component.name} } from './child-${index}/${component.filename}';`).join('\n')}

@Component({
  selector: '${appName}-${libName}',
  template: \`
    <div class="root-component">
      <header class="root-header">
        <h1>{{title}}</h1>
        <div class="root-controls">
          <div class="view-controls">
            <label>
              <input type="radio" name="viewMode" value="all" [(ngModel)]="viewMode" (change)="onViewModeChange()">
              Show All
            </label>
            <label>
              <input type="radio" name="viewMode" value="even" [(ngModel)]="viewMode" (change)="onViewModeChange()">
              Even Only
            </label>
            <label>
              <input type="radio" name="viewMode" value="odd" [(ngModel)]="viewMode" (change)="onViewModeChange()">
              Odd Only
            </label>
          </div>
          <div class="filter-controls">
            <select [(ngModel)]="statusFilter" (change)="onStatusFilterChange()">
              <option value="all">All Statuses</option>
              <option value="active">Active Only</option>
              <option value="warning">Warning Only</option>
              <option value="error">Error Only</option>
            </select>
          </div>
          <button (click)="toggleGlobalExpansion()" class="btn btn-primary">
            {{allExpanded ? 'Collapse All' : 'Expand All'}}
          </button>
        </div>
      </header>
      
      <div class="root-stats">
        <div class="stat-card">
          <h3>Total Components</h3>
          <span class="stat-value">{{totalComponents}}</span>
        </div>
        <div class="stat-card">
          <h3>Child Components</h3>
          <span class="stat-value">{{childComponents.length}}</span>
        </div>
        <div class="stat-card">
          <h3>Sub-Child Components</h3>
          <span class="stat-value">{{totalSubChildren}}</span>
        </div>
        <div class="stat-card">
          <h3>Visible Components</h3>
          <span class="stat-value">{{visibleComponents}}</span>
        </div>
      </div>
      
      <div class="root-content">
        @if (isLoading) {
          <div class="loading-overlay">
            <div class="spinner large"></div>
            <p>Loading components...</p>
          </div>
        } @else {
          <div class="children-container" [class]="'view-' + viewMode">
            ${childComponents.map((component, idx) => `<div class="child-wrapper" [class]="getChildWrapperClass(${idx})">
              @if (shouldShowComponent(${idx})) {
                <div class="component-header">
                  <h3>${component.name}</h3>
                  <div class="component-meta">
                    <span class="component-index">#${idx + 1}</span>
                    <span class="component-status" [class]="getComponentStatus(${idx})">
                      {{getComponentStatus(${idx})}}
                    </span>
                    <button (click)="toggleChildLoad(${idx})" class="btn btn-xs">
                      {{isChildLoaded(${idx}) ? 'Unload' : 'Load'}}
                    </button>
                  </div>
                </div>
                @defer (on viewport; when isChildLoaded(${idx}); prefetch on idle) {
                  <${component.selector} />
                } @placeholder {
                  <div class="child-placeholder">
                    <div class="skeleton large"></div>
                    <p>Loading ${component.name}...</p>
                    <button (click)="loadChild(${idx})" class="btn btn-primary">Load Now</button>
                  </div>
                } @loading (minimum 1s) {
                  <div class="child-loading">
                    <div class="spinner large"></div>
                    <p>Loading ${component.name}...</p>
                    <div class="progress-bar">
                      <div class="progress-fill" [style.width.%]="getChildLoadProgress(${idx})"></div>
                    </div>
                  </div>
                } @error {
                  <div class="child-error">
                    <p>Failed to load ${component.name}</p>
                    <button (click)="retryChildLoad(${idx})" class="btn btn-warning">Retry</button>
                  </div>
                }
              } @else {
                <div class="component-hidden">
                  <p>Component hidden by filter</p>
                  <button (click)="showComponent(${idx})" class="btn btn-sm">Show</button>
                </div>
              }
            </div>`).join('\n            ')}
          </div>
        }
      </div>
      
      <footer class="root-footer">
        <div class="footer-info">
          <p>Generated: {{generatedAt}} | View Mode: {{viewMode}} | Filter: {{statusFilter}}</p>
          <p>Performance: {{performanceMetrics.renderTime}}ms | Memory: {{performanceMetrics.memoryUsage}}MB</p>
        </div>
        <div class="footer-actions">
          <button (click)="refresh()" class="btn btn-secondary">Refresh</button>
          <button (click)="exportData()" class="btn btn-success">Export Data</button>
        </div>
      </footer>
    </div>
  \`,
  imports: [
    FormsModule,
${childComponents.map(c => `    ${c.name},`).join('\n')}
  ],
})
export class ${appName.charAt(0).toUpperCase() + appName.slice(1)}${libName.charAt(0).toUpperCase() + libName.slice(1)} {
  title = '${appName.charAt(0).toUpperCase() + appName.slice(1)}${libName.charAt(0).toUpperCase() + libName.slice(1)} Root Component';
  viewMode: 'all' | 'even' | 'odd' = 'all';
  statusFilter: 'all' | 'active' | 'warning' | 'error' = 'all';
  allExpanded = true;
  isLoading = false;
  generatedAt = new Date().toLocaleString();
  
  childComponents = [
${childComponents.map((component, index) => `    { selector: '${component.selector}', name: '${component.name}', index: ${index} }`).join(',\n')}
  ];
  
  // Defer loading state management
  loadedChildren = new Set<number>();
  loadingChildren = new Set<number>();
  errorChildren = new Set<number>();
  childLoadProgress = new Map<number, number>();
  
  get totalComponents() {
    return 1 + this.childComponents.length + ${TOTAL_SUB_CHILDREN};
  }
  
  get totalSubChildren() {
    return ${TOTAL_SUB_CHILDREN};
  }
  
  get visibleComponents() {
    return this.filteredChildComponents.length;
  }
  
  get filteredChildComponents() {
    return this.childComponents.filter((_, index) => this.shouldShowComponent(index));
  }
  
  shouldShowComponent(index: number): boolean {
    const viewMatch = this.viewMode === 'all' || 
                     (this.viewMode === 'even' && index % 2 === 0) ||
                     (this.viewMode === 'odd' && index % 2 === 1);
    
    const statusMatch = this.statusFilter === 'all' || 
                       this.getComponentStatus(index) === this.statusFilter;
    
    return viewMatch && statusMatch;
  }
  
  getComponentStatus(index: number): string {
    const statuses = ['active', 'warning', 'error'];
    return statuses[index % statuses.length];
  }
  
  getChildWrapperClass(index: number): string {
    const classes = ['child-wrapper'];
    if (index % 2 === 0) classes.push('even');
    else classes.push('odd');
    classes.push('status-' + this.getComponentStatus(index));
    return classes.join(' ');
  }
  
  onViewModeChange() {
    console.log('View mode changed to:', this.viewMode);
  }
  
  onStatusFilterChange() {
    console.log('Status filter changed to:', this.statusFilter);
  }
  
  toggleGlobalExpansion() {
    this.allExpanded = !this.allExpanded;
    console.log('Global expansion toggled:', this.allExpanded);
  }
  
  showComponent(index: number) {
    console.log('Showing component at index:', index);
  }
  
  refresh() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.generatedAt = new Date().toLocaleString();
    }, 1000);
  }
  
  exportData() {
    const data = {
      title: this.title,
      totalComponents: this.totalComponents,
      childComponents: this.childComponents.length,
      subChildren: this.totalSubChildren,
      generatedAt: this.generatedAt,
      viewMode: this.viewMode,
      statusFilter: this.statusFilter
    };
    console.log('Exporting data:', data);
  }
  
  get performanceMetrics() {
    return {
      renderTime: Math.floor(Math.random() * 100) + 50,
      memoryUsage: Math.floor(Math.random() * 50) + 10
    };
  }
  
  // Defer loading methods
  isChildLoaded(index: number): boolean {
    return this.loadedChildren.has(index);
  }
  
  toggleChildLoad(index: number) {
    if (this.loadedChildren.has(index)) {
      this.loadedChildren.delete(index);
    } else {
      this.loadChild(index);
    }
  }
  
  loadChild(index: number) {
    this.errorChildren.delete(index);
    this.loadingChildren.add(index);
    this.childLoadProgress.set(index, 0);
    
    // Simulate progressive loading
    const interval = setInterval(() => {
      const currentProgress = this.childLoadProgress.get(index) || 0;
      const newProgress = Math.min(currentProgress + Math.random() * 20, 100);
      this.childLoadProgress.set(index, newProgress);
      
      if (newProgress >= 100) {
        clearInterval(interval);
        this.loadingChildren.delete(index);
        if (Math.random() > 0.05) { // 95% success rate
          this.loadedChildren.add(index);
        } else {
          this.errorChildren.add(index);
        }
      }
    }, 100);
  }
  
  getChildLoadProgress(index: number): number {
    return this.childLoadProgress.get(index) || 0;
  }
  
  retryChildLoad(index: number) {
    this.errorChildren.delete(index);
    this.loadChild(index);
  }
}
`;

writeFileSync(join(BASE_DIR, `${appName}-${libName}.ts`), rootComponentContent, 'utf8');

// Generate index.ts to export only the root component
const indexContent = `// Root component
export { ${appName.charAt(0).toUpperCase() + appName.slice(1)}${libName.charAt(0).toUpperCase() + libName.slice(1)} } from './${appName}-${libName}';
`;

writeFileSync(join(BASE_DIR, 'index.ts'), indexContent, 'utf8');

console.log(`\n🎉 Generated complex component structure for ${appName}-${libName}:`);
console.log(`- 1 root component (${appName.charAt(0).toUpperCase() + appName.slice(1)}${libName.charAt(0).toUpperCase() + libName.slice(1)})`);
console.log(`- ${CHILD_COMPONENTS_COUNT} child components`);
console.log(`- ${TOTAL_SUB_CHILDREN} sub-child components`);
console.log(`- Total: ${1 + CHILD_COMPONENTS_COUNT + TOTAL_SUB_CHILDREN} components`);
console.log(`\n📁 All components saved to: ${BASE_DIR}`);
}

// Export the function for reuse
export { generateComponentStructure };

// Example usage - uncomment and modify as needed:
// generateComponentStructure('app0', 'lib4');
// generateComponentStructure('app1', 'lib0', { childComponentsCount: 25, subChildComponentsPerChild: 50 });
// generateComponentStructure('app2', 'lib1', { childComponentsCount: 100, subChildComponentsPerChild: 200 });
