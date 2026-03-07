const fs = require('fs');

let c = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Simple generic replacements
c = c.replace(/#EF4444/g, '#E45757');
c = c.replace(/red-500/g, '[#E45757]');
c = c.replace(/red-400/g, '[#F87171]'); // Soft red for minor text

c = c.replace(/#F59E0B/g, '#F2B84B');
c = c.replace(/amber-500/g, '[#F2B84B]');
c = c.replace(/amber-400/g, '[#FBBF24]');

c = c.replace(/#10B981/g, '#6BBF8A'); // Used for 'safe' / 'green'
c = c.replace(/emerald-500/g, '[#6BBF8A]');
c = c.replace(/green-500/g, '[#6BBF8A]');

// 2. Specific getLevelColor mapping changes
// We'll also inject getBadgeStyle right after getLevelColor
const badgeStyleFunc = `
const getBadgeStyle = (level) => {
    if (level === "SAFE") return { background: 'rgba(107,191,138,0.12)', border: '1px solid rgba(107,191,138,0.35)', color: '#E5E7EB' };
    if (level === "MODERATE") return { background: 'rgba(242,184,75,0.12)', border: '1px solid rgba(242,184,75,0.35)', color: '#E5E7EB' };
    return { background: 'rgba(228,87,87,0.12)', border: '1px solid rgba(228,87,87,0.35)', color: '#E5E7EB' };
};
`;

c = c.replace(/const getLevelColor = \(level\) => \{\n.*?return "#BFA14A";\n.*?return "#F2B84B";\n.*?return "#E45757";\n\}/s, (match) => {
    return `const getLevelColor = (level) => {\n    if (level === "SAFE") return "#6BBF8A";\n    if (level === "MODERATE") return "#F2B84B";\n    return "#E45757";\n}\n${badgeStyleFunc}`;
});
// Fallback if match fails (since previous replace modified it)
c = c.replace(/const getLevelColor = \(level\) => \{\n\s*if \(level === "SAFE"\) return "#BFA14A";\n\s*if \(level === "MODERATE"\) return "#F2B84B";\n\s*return "#E45757";\n\}/s, `const getLevelColor = (level) => {\n    if (level === "SAFE") return "#6BBF8A";\n    if (level === "MODERATE") return "#F2B84B";\n    return "#E45757";\n}\n${badgeStyleFunc}`);

// 3. Update PieData for safe
c = c.replace(/\{\s*name:\s*'Safe',\s*value:\s*safe,\s*color:\s*'#BFA14A'\s*\}/g, "{ name: 'Safe', value: safe, color: '#6BBF8A' }");

// 4. Update the styling on table badges to use getBadgeStyle
c = c.replace(/style=\{\{\s*backgroundColor:\s*isSafe\s*\?\s*'rgba\(191,161,74,0\.18\)'\s*:\s*\`\$\{getLevelColor\(s\.risk\.level\)\}.*?\,\s*color:\s*getLevelColor\(s\.risk\.level\)\s*\}\}/g, "style={getBadgeStyle(s.risk.level)}");

// Similarly for the risk level plain badge
c = c.replace(/style=\{\{\s*borderColor:\s*isSafe\s*\?\s*'rgba\(191,161,74,0\.24\)'\s*:\s*getLevelColor\(s\.risk\.level\).*?\}\}/g, "style={getBadgeStyle(s.risk.level)}");

// 5. Update background tints in FacultyDashboard row cells 
c = c.replace(/style=\{\{\s*border:\s*\`2px solid \$\{isSafe \? 'rgba\(191,161,74,0\.26\)' : getLevelColor\(s\.risk\.level\)\}\`,\s*color:\s*getLevelColor\(s\.risk\.level\)\s*\}\}/g, "style={getBadgeStyle(s.risk.level)}");

// 6. Update student detail badge tints
c = c.replace(/style=\{\{\s*backgroundColor:\s*s\.riskLevel === 'SAFE'\s*\?\s*'rgba\(191,161,74,0\.18\)'\s*:\s*\`\$\{getLevelColor\(s\.riskLevel\)\}20\`,\s*color:\s*getLevelColor\(s\.riskLevel\)\s*\}\}/g, "style={getBadgeStyle(s.riskLevel)}");

// Update literal text strings to use "#9CA3AF" or "#E5E7EB" when appropriate
// We'll replace text-gray-400 -> text-[#9CA3AF] in risk texts if needed, but text-gray-400 is already close (#9CA3AF in tailwind). Wait, text-gray-400 IS exactly #9CA3AF in Tailwind CSS. 
// "Text Secondary: #9CA3AF" - Tailwind text-gray-400 is #9CA3AF.
// "Text Primary: #E5E7EB" - Tailwind text-gray-200 is #E5E7EB.

// Save File
fs.writeFileSync('src/App.jsx', c, 'utf8');
console.log('Colors patched recursively.');
