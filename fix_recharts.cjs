const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.jsx');
let appCode = fs.readFileSync(appPath, 'utf8');

// 1. Fix the CustomTooltip conflicting classes
const tooltipTarget = /className="bg-white dark:bg-white dark:bg-\[#0B0B0C\] border border-gray-200 dark:border-white\/10 backdrop-blur-md rounded-lg p-3 text-gray-900 dark:text-white shadow-xl"/g;
appCode = appCode.replace(tooltipTarget, 'className="bg-white dark:bg-[#0B0B0C] border border-gray-200 dark:border-white/10 backdrop-blur-md rounded-lg p-3 text-gray-900 dark:text-white shadow-xl"');

// Fix another potential version just in case
const tooltipTarget2 = /className="bg-white dark:bg-white dark:bg-\[#0B0B0C\](.*?)"/g;
appCode = appCode.replace(tooltipTarget2, 'className="bg-white dark:bg-[#0B0B0C]$1"');

// 2. Fix Axis labels tick colors
// Instead of (document.documentElement.classList.contains('dark')) ? "#9ca3af" : "#6b7280"
// we should just use CSS variables format or 'currentColor' / a specific CSS variable
const tickTarget1 = /tick=\{\{ fill: \(document\.documentElement\.classList\.contains\('dark'\)\) \? "#9ca3af" : "#6b7280"(.*?)\} \}/g;
appCode = appCode.replace(tickTarget1, "tick={{ fill: 'var(--text-muted-4)'$1} }");

const tickTarget1b = /tick=\{\{ fill: '#6B7280', fontSize: 12 \}\}/g;
appCode = appCode.replace(tickTarget1b, "tick={{ fill: 'var(--text-muted-4)', fontSize: 12 }}");

// 3. Fix CartesianGrid stroke colors
const gridTarget1 = /stroke="rgba\(255,255,255,0\.08\)"/g;
appCode = appCode.replace(gridTarget1, 'stroke="var(--glass-border-08)"');

const gridTarget2 = /stroke="#1E2A3A"/g;
appCode = appCode.replace(gridTarget2, 'stroke="var(--glass-border-08)"');

// 4. Fix Cursor fill
const cursorTarget = /cursor=\{\{ fill: 'rgba\(255,255,255,0\.05\)' \}\}/g;
appCode = appCode.replace(cursorTarget, "cursor={{ fill: 'var(--glass-bg-05)' }}");

// 5. Fix XAxis and YAxis default strokes (some were hardcoded #4A5568 or #8CC7FF)
// XAxis stroke #4A5568 -> var(--glass-border-08)
appCode = appCode.replace(/stroke="#4A5568"/g, 'stroke="var(--glass-border-08)"');

fs.writeFileSync(appPath, appCode, 'utf8');
console.log("Recharts successfully patched for theme compatibility!");
