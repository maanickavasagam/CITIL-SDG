const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.jsx');
let appCode = fs.readFileSync(appPath, 'utf8');

// Replace standard colors to make them responsive
appCode = appCode.replace(/text-white/g, 'text-gray-900 dark:text-white');
appCode = appCode.replace(/bg-\[\#10293F\]\/80/g, 'bg-white/90 dark:bg-[#10293F]/80');
appCode = appCode.replace(/border-white\/10/g, 'border-gray-200 dark:border-white/10');
appCode = appCode.replace(/border-white\/5/g, 'border-gray-200 dark:border-white/5');
appCode = appCode.replace(/bg-white\/5(?!0)/g, 'bg-gray-100 dark:bg-white/5'); // prevent changing bg-white/50
appCode = appCode.replace(/text-gray-400/g, 'text-gray-600 dark:text-gray-400');
appCode = appCode.replace(/text-gray-300/g, 'text-gray-700 dark:text-gray-300');
appCode = appCode.replace(/text-slate-200/g, 'text-slate-800 dark:text-slate-200');
appCode = appCode.replace(/text-slate-400/g, 'text-slate-500 dark:text-slate-400');

// Chart fills
appCode = appCode.replace(/fill: '#6B7280'/g, 'fill: isDarkMode ? "#6B7280" : "#4b5563"');
appCode = appCode.replace(/backgroundColor: '#10293F'/g, 'backgroundColor: isDarkMode ? "#10293F" : "#ffffff"');
appCode = appCode.replace(/stroke="rgba\(255,255,255,0.08\)"/g, 'stroke={isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)"}');

fs.writeFileSync(appPath, appCode);

const cssPath = path.join(__dirname, 'src', 'index.css');
let cssCode = fs.readFileSync(cssPath, 'utf8');

cssCode = cssCode.replace(/background-color: #0B0B0C;/, 'background-color: transparent;\n    @apply bg-gray-50 dark:bg-[#0B0B0C];');
cssCode = cssCode.replace(/color: white;/, 'color: inherit;\n    @apply text-gray-900 dark:text-white;');

// premium-grid-bg
cssCode = cssCode.replace(/\.premium-grid-bg \{/, '.premium-grid-bg {\n    @apply bg-gray-50 dark:bg-[#0B1C2C];\n');
cssCode = cssCode.replace(/background-color: #0B1C2C;/, ''); // remove hardcoded

// card-tiers
cssCode = cssCode.replace(/background: rgba\(255,255,255,0.04\);/, '@apply bg-white dark:bg-[rgba(255,255,255,0.04)];');
cssCode = cssCode.replace(/border: 1px solid rgba\(255,255,255,0.08\);/, '@apply border border-gray-200 dark:border-[rgba(255,255,255,0.08)];');

fs.writeFileSync(cssPath, cssCode);

console.log("Patched successfully!");
