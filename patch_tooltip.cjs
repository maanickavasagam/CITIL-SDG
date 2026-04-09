const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.jsx');
let appCode = fs.readFileSync(appPath, 'utf8');

const startIndex = appCode.indexOf('const CustomTooltip = ({ active, payload, label }) => {');
const returnNullIndex = appCode.indexOf('return null;', startIndex);
const endIndex = appCode.indexOf('};', returnNullIndex) + 2;

if (startIndex !== -1 && endIndex !== -1) {
    const newTooltip = `const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white/95 dark:bg-[#0A1628]/90 border border-gray-200 dark:border-white/10 backdrop-blur-md rounded-xl p-4 text-gray-900 dark:text-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(77,163,255,0.08)] min-w-[150px] pointer-events-none transition-colors duration-300">
                <p className="font-bold text-gray-900 dark:text-white mb-3 text-sm">{label}</p>
                <div className="space-y-2 mt-1">
                    {payload.map((entry, index) => (
                        <div key={\`item-\${index}\`} className="flex items-center justify-between text-sm gap-5">
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full shadow-sm" style={{ backgroundColor: entry.color || entry.fill }}></div>
                                <span className="text-gray-600 dark:text-gray-400 font-medium">{entry.name || 'Value'}</span>
                            </div>
                            <span className="font-bold text-gray-900 dark:text-white">{entry.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    return null;
};`;

    appCode = appCode.substring(0, startIndex) + newTooltip + appCode.substring(endIndex);
    fs.writeFileSync(appPath, appCode, 'utf8');
    console.log("SUCCESS! Tooltip refined to glass Dashboard Card style.");
} else {
    console.log("Could not find start/end indices: start=" + startIndex + ", end=" + endIndex);
}
