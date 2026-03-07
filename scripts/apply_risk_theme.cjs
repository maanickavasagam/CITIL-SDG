const fs = require('fs');

// --- index.css fixes ---
let css = fs.readFileSync('src/index.css', 'utf8');

css = css.replace(/\.risk-meter-glow-high \{\s*position: absolute;\s*inset: -20px;\s*background: radial-gradient\(circle, rgba\(239, 68, 68, 0\.2\), transparent 70%\);\s*filter: blur\(30px\);\s*z-index: -1;\s*border-radius: 50%;\s*animation: riskPulse 2s infinite;\s*\}/, `.risk-meter-glow-high {
  position: absolute;
  inset: -20px;
  background: radial-gradient(circle, rgba(245, 158, 11, 0.15), transparent 70%);
  filter: blur(30px);
  z-index: -1;
  border-radius: 50%;
  animation: riskPulse 2s infinite;
}`);

// Fix text-gradient to Hackspace Blue
css = css.replace(/\.text-gradient \{\s*background: linear-gradient\(135deg, #BFA14A, #A88C3D\);\s*-webkit-background-clip: text;\s*-webkit-text-fill-color: transparent;\s*background-clip: text;\s*\}/, `.text-gradient {
  background: linear-gradient(135deg, #4DA3FF, #8CC7FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}`);

fs.writeFileSync('src/index.css', css, 'utf8');

// --- App.jsx fixes ---
let app = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Risk Score Circle
app = app.replace(/style=\{\{ border: `3px solid \$\{isSafe \? 'rgba\(191,161,74,0\.26\)' : color\}`/, "style={{ border: `3px solid ${isSafe ? 'rgba(191,161,74,0.26)' : isHigh ? '#F59E0B' : color}`");
app = app.replace(/style=\{\{ color: color, textShadow: isHigh \? `0 0 15px \$\{color\}` : 'none' \}\}/, "style={{ color: isHigh ? '#F59E0B' : color, textShadow: isHigh ? '0 0 25px rgba(245,158,11,0.25)' : 'none' }}");

// 2. Risk Contribution Bars
// Find the shapData array and recolor Semantic fills
const replaceShapData = `const shapData = [
        { factor: 'Attendance', value: risk.breakdown.attendance, type: 'attendance' },
        { factor: 'Recent Marks', value: risk.breakdown.marks, type: 'marks' },
        { factor: 'LMS Inactivity', value: risk.breakdown.lms, type: 'lms' },
        { factor: 'Assignments', value: risk.breakdown.assignments, type: 'assignments' },
        { factor: 'Co-curriculars', value: -risk.breakdown.competitions, type: 'safe' }
    ].filter(d => d.value !== 0).sort((a, b) => Math.abs(b.value) - Math.abs(a.value));`;

app = app.replace(/const shapData = \[\s*\{ factor: 'Attendance', value: risk\.breakdown\.attendance, type: 'risk' \},\s*\{ factor: 'Recent Marks', value: risk\.breakdown\.marks, type: 'risk' \},\s*\{ factor: 'LMS Inactivity', value: risk\.breakdown\.lms, type: 'risk' \},\s*\{ factor: 'Assignments', value: risk\.breakdown\.assignments, type: 'risk' \},\s*\{ factor: 'Co-curriculars', value: -risk\.breakdown\.competitions, type: 'safe' \}\s*\].filter\(d => d\.value !== 0\)\.sort\(\(a, b\) => Math\.abs\(b\.value\) - Math\.abs\(a\.value\)\);/, replaceShapData);

const replaceShapFill = `<Cell key={\`cell-\${index}\`} fill={entry.type === 'attendance' ? '#F59E0B' : entry.type === 'marks' ? '#F59E0B' : entry.type === 'lms' ? '#8CC7FF' : entry.type === 'assignments' ? '#4DA3FF' : '#34D399'} />`;
app = app.replace(/<Cell key=\{\`cell-\\\$\{index\}\`\} fill=\{entry\.type === 'risk' \? '#EF4444' : '#4DA3FF'\} \/>/, replaceShapFill);


// 3. Remove Red Glow Effects / Re-map box-shadows
app = app.replace(/boxShadow: isSafe \? 'none' : `0 0 8px \$\{color\}`/g, "boxShadow: isSafe ? 'none' : '0 0 18px rgba(77,163,255,0.15)'");
// Specifically for the "Hackspace" brand title
app = app.replace(/<span style=\{\{ fontFamily: 'Syne', fontWeight: 700, fontSize: 20, background: 'linear-gradient\(135deg,#A88C3D,#BFA14A\)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1\.1 \}\}>Hackspace<\/span>/, "<span style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: 20, background: 'linear-gradient(135deg,#4DA3FF,#8CC7FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.1 }}>Hackspace</span>");


// 4. High Risk Badge Softening
const badgeStyleFunc = `
const getBadgeStyle = (level) => {
    if (level === "SAFE") return { background: 'rgba(77,163,255,0.12)', border: '1px solid rgba(77,163,255,0.35)', color: '#FFFFFF' };
    if (level === "MODERATE") return { background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.35)', color: '#FFFFFF' };
    return { background: 'rgba(239,68,68,0.15)', border: '1px solid #EF4444', color: '#EF4444' };
};
`;
app = app.replace(/const getBadgeStyle = \(level\) => \{.*?return \{ background: 'rgba\(239,68,68,0\.12\)', border: '1px solid rgba\(239,68,68,0\.35\)', color: '#FFFFFF' \};\n\w*?\};/s, badgeStyleFunc);

// 5. Chart Line Colors 
app = app.replace(/<Line type="monotone" dataKey="val" stroke=\{risk\.breakdown\.marks > 10 \? '#EF4444' : '#4DA3FF'\} strokeWidth=\{3\} dot=\{\{ r: 4 \}\} \/>/, '<Line type="monotone" dataKey="val" stroke="#4DA3FF" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6, fill: "#8CC7FF" }} />');

// 6. Financial Risk Bar
app = app.replace(/background: student\.financial\.vulnerabilityScore <= 30 \? '#4DA3FF' : student\.financial\.vulnerabilityScore <= 60 \? '#F59E0B' : '#EF4444'/g, "background: 'linear-gradient(90deg, #F59E0B, #FFD166)'");
app = app.replace(/<div style=\{\{\s*height: 6, background: 'rgba\(255,255,255,0\.06\)', borderRadius: 3, width: '100%', marginBottom: 4\s*\}\}>/g, "<div style={{ height: 6, background: 'rgba(255,255,255,0.08)', borderRadius: 3, width: '100%', marginBottom: 4 }}>");


fs.writeFileSync('src/App.jsx', app, 'utf8');
console.log('Risk Visualization script completed');
