#!/usr/bin/env node

import { generateComponentStructure } from './create-comp.mjs';

// Configuration
const APP_NAME = 'app0';
const LIBRARIES = ['lib0', 'lib1', 'lib2', 'lib3', 'lib4'];

// Optional: customize component counts
const config = {
  childComponentsCount: 10,
  subChildComponentsPerChild: 30
};

// Track total components generated
let totalComponents = 0;
const startTime = Date.now();

console.log(`🚀 Starting component generation for ${APP_NAME} across ${LIBRARIES.length} libraries...`);
console.log(`📊 Configuration: ${config.childComponentsCount} children, ${config.subChildComponentsPerChild} sub-children each\n`);

// Iterate over all libraries
for (let i = 0; i < LIBRARIES.length; i++) {
  const libName = LIBRARIES[i];
  const libStartTime = Date.now();
  
  console.log(`\n📦 [${i + 1}/${LIBRARIES.length}] Generating components for ${APP_NAME}-${libName}...`);
  
  try {
    generateComponentStructure(APP_NAME, libName, config);
    
    const libEndTime = Date.now();
    const libDuration = libEndTime - libStartTime;
    const libComponents = 1 + config.childComponentsCount + (config.childComponentsCount * config.subChildComponentsPerChild);
    totalComponents += libComponents;
    
    console.log(`✅ ${APP_NAME}-${libName} completed in ${(libDuration / 1000).toFixed(2)}s`);
    console.log(`📈 Generated ${libComponents.toLocaleString()} components for this library`);
    
  } catch (error) {
    console.error(`❌ Error generating components for ${APP_NAME}-${libName}:`, error.message);
    console.log(`⏭️  Continuing with next library...`);
  }
}

const endTime = Date.now();
const totalDuration = endTime - startTime;

console.log(`\n🎉 All component generation completed!`);
console.log(`📊 Summary:`);
console.log(`   • Libraries processed: ${LIBRARIES.length}`);
console.log(`   • Total components generated: ${totalComponents.toLocaleString()}`);
console.log(`   • Total time: ${(totalDuration / 1000).toFixed(2)}s`);
console.log(`   • Average per library: ${(totalDuration / LIBRARIES.length / 1000).toFixed(2)}s`);
console.log(`   • Components per second: ${(totalComponents / (totalDuration / 1000)).toFixed(0)}`);

console.log(`\n📁 All components saved to: libs/${APP_NAME}/`);
console.log(`🔧 Ready for Angular performance testing!`);
