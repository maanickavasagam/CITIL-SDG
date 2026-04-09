const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

const cssVars = `
:root {
  --glass-bg-01: rgba(0,0,0,0.02);
  --glass-bg-02: rgba(0,0,0,0.03);
  --glass-bg-03: rgba(0,0,0,0.04);
  --glass-bg-04: rgba(0,0,0,0.06);
  --glass-bg-05: rgba(0,0,0,0.08);
  --glass-border-05: rgba(0,0,0,0.08);
  --glass-border-06: rgba(0,0,0,0.10);
  --glass-border-08: rgba(0,0,0,0.12);
  --text-muted-2: rgba(0,0,0,0.40);
  --text-muted-25: rgba(0,0,0,0.50);
  --text-muted-3: rgba(0,0,0,0.55);
  --text-muted-35: rgba(0,0,0,0.60);
  --text-muted-4: rgba(0,0,0,0.65);
  --text-normal-5: rgba(0,0,0,0.70);
  --text-normal-65: rgba(0,0,0,0.75);
  --text-normal-8: rgba(0,0,0,0.85);
  --text-normal-9: rgba(0,0,0,0.95);
}
.dark {
  --glass-bg-01: rgba(255,255,255,0.01);
  --glass-bg-02: rgba(255,255,255,0.02);
  --glass-bg-03: rgba(255,255,255,0.03);
  --glass-bg-04: rgba(255,255,255,0.04);
  --glass-bg-05: rgba(255,255,255,0.05);
  --glass-border-05: rgba(255,255,255,0.05);
  --glass-border-06: rgba(255,255,255,0.06);
  --glass-border-08: rgba(255,255,255,0.08);
  --text-muted-2: rgba(255,255,255,0.20);
  --text-muted-25: rgba(255,255,255,0.25);
  --text-muted-3: rgba(255,255,255,0.30);
  --text-muted-35: rgba(255,255,255,0.35);
  --text-muted-4: rgba(255,255,255,0.40);
  --text-normal-5: rgba(255,255,255,0.50);
  --text-normal-65: rgba(255,255,255,0.65);
  --text-normal-8: rgba(255,255,255,0.80);
  --text-normal-9: rgba(255,255,255,0.90);
}
`;

if (!cssContent.includes('--glass-bg-02')) {
    cssContent = cssVars + cssContent;
    fs.writeFileSync(cssPath, cssContent, 'utf8');
    console.log("Added CSS variables to index.css");
}

const appPath = path.join(__dirname, 'src', 'App.jsx');
let appCode = fs.readFileSync(appPath, 'utf8');

// Replace standard inline styles with CSS vars
const replacements = [
    { from: /'rgba\(255,255,255,0\.01\)'/g, to: "'var(--glass-bg-01)'" },
    { from: /'rgba\(255,255,255,0\.02\)'/g, to: "'var(--glass-bg-02)'" },
    { from: /'rgba\(255,255,255,0\.03\)'/g, to: "'var(--glass-bg-03)'" },
    { from: /'rgba\(255,255,255,0\.04\)'/g, to: "'var(--glass-bg-04)'" },
    { from: /'rgba\(255,255,255,0\.05\)'/g, to: "'var(--glass-bg-05)'" },
    { from: /'1px solid rgba\(255,255,255,0\.05\)'/g, to: "'1px solid var(--glass-border-05)'" },
    { from: /'1px solid rgba\(255,255,255,0\.06\)'/g, to: "'1px solid var(--glass-border-06)'" },
    { from: /'1px solid rgba\(255,255,255,0\.08\)'/g, to: "'1px solid var(--glass-border-08)'" },
    { from: /'rgba\(255,255,255,0\.2\)'/g, to: "'var(--text-muted-2)'" },
    { from: /'rgba\(255,255,255,0\.25\)'/g, to: "'var(--text-muted-25)'" },
    { from: /'rgba\(255,255,255,0\.3\)'/g, to: "'var(--text-muted-3)'" },
    { from: /'rgba\(255,255,255,0\.35\)'/g, to: "'var(--text-muted-35)'" },
    { from: /'rgba\(255,255,255,0\.4\)'/g, to: "'var(--text-muted-4)'" },
    { from: /'rgba\(255,255,255,0\.5\)'/g, to: "'var(--text-normal-5)'" },
    { from: /'rgba\(255,255,255,0\.65\)'/g, to: "'var(--text-normal-65)'" },
    { from: /'rgba\(255,255,255,0\.8\)'/g, to: "'var(--text-normal-8)'" },
    { from: /'rgba\(255,255,255,0\.9\)'/g, to: "'var(--text-normal-9)'" }
];

let changed = false;
for (const req of replacements) {
    if (appCode.match(req.from)) {
        appCode = appCode.replace(req.from, req.to);
        changed = true;
    }
}

if (changed) {
    fs.writeFileSync(appPath, appCode, 'utf8');
    console.log("Replaced fixed transparent white colors with CSS variables in App.jsx");
} else {
    console.log("No color replacements were matched in App.jsx");
}
