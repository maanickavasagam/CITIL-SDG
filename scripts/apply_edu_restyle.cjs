const fs = require('fs');

// ---------------------------------------------------------
// 1. UPDATE index.css
// ---------------------------------------------------------
let css = fs.readFileSync('src/index.css', 'utf8');

css = css.replace(/body\s*\{\n\s*font-family/g, `body {
    background-color: #0B1C2C; /* Background Primary */
    color: #FFFFFF;
    font-family`);

// Replace old card-tier classes with the unified premium glass system
css = css.replace(/\.card-tier-1\s*\{[\s\S]*?\}\n\n\.card-tier-2\s*\{[\s\S]*?\}\n\n\.card-tier-3\s*\{[\s\S]*?\}/g,
    `.card-tier-1, .card-tier-2, .card-tier-3 {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 14px;
    backdrop-filter: blur(12px);
    box-shadow: 0 8px 30px rgba(0,0,0,0.35);
    transition: all 0.25s ease;
}`);

// Add new Particle styles and Hover states
if (!css.includes('@keyframes floatParticles')) {
    css += `\n
@keyframes floatParticles {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.subtle-particles {
  opacity: 0.05;
  animation: floatParticles 20s linear infinite;
}

.hover-lift { transition: all 0.25s ease; }
.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 45px rgba(0,0,0,0.45);
  border-color: rgba(77,163,255,0.35) !important;
}

.premium-grid-bg {
    background-color: #0B1C2C;
    background-image:
      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
      radial-gradient(circle at 20% 30%, rgba(77,163,255,0.15), transparent 60%);
    background-size: 40px 40px, 40px 40px, 100% 100%;
}
`;
}
fs.writeFileSync('src/index.css', css, 'utf8');

// ---------------------------------------------------------
// 2. UPDATE App.jsx
// ---------------------------------------------------------
let app = fs.readFileSync('src/App.jsx', 'utf8');

// Container Background Class
app = app.replace(/<div className="min-h-screen text-white relative">/, '<div className="min-h-screen text-white relative premium-grid-bg">');

// Navbar update
app = app.replace(/<nav className="w-full border-b border-white\/10 bg-\[#0B0B0C\]\/80 backdrop-blur-lg sticky top-0 z-40">/, '<nav className="w-full border-b border-white/10 bg-[#10293F]/80 backdrop-blur-lg sticky top-0 z-40">');

// Particles update
app = app.replace(/<div key=\{i\} className="absolute rounded-full"/g, '<div key={i} className="absolute rounded-full subtle-particles"');

// Color Mappings Global Swap (except specific places)
// Safe is now Primary Blue #4DA3FF
// High remains #EF4444 (or #E45757 back to #EF4444)
// Moderate is #F59E0B
app = app.replace(/#E45757/g, '#EF4444');
app = app.replace(/#F2B84B/g, '#F59E0B');
app = app.replace(/#6BBF8A/g, '#4DA3FF');
// Gold defaults generally swapped to Education Blues
app = app.replace(/#BFA14A/g, '#4DA3FF');
app = app.replace(/#A88C3D/g, '#8CC7FF');

// Update getLevelColor and getBadgeStyle explicitly
app = app.replace(/const getLevelColor = \(level\) => \{\s*if \(level === "SAFE"\) return "#4DA3FF";\s*if \(level === "MODERATE"\) return "#F59E0B";\s*return "#EF4444";\s*\};/g, 'const getLevelColor = (level) => { if (level === "SAFE") return "#4DA3FF"; if (level === "MODERATE") return "#F59E0B"; return "#EF4444"; };');

// getBadgeStyle update
const badgeStyleFunc = `
const getBadgeStyle = (level) => {
    if (level === "SAFE") return { background: 'rgba(77,163,255,0.12)', border: '1px solid rgba(77,163,255,0.35)', color: '#FFFFFF' };
    if (level === "MODERATE") return { background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.35)', color: '#FFFFFF' };
    return { background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.35)', color: '#FFFFFF' };
};
`;
app = app.replace(/const getBadgeStyle = \(level\) => \{.*?return \{ background: 'rgba\(228,87,87,0\.12\)', border: '1px solid rgba\(228,87,87,0\.35\)', color: '#E5E7EB' \};\n\w*?\};/s, badgeStyleFunc);

// Typographic / Metric Highlight Fixes
app = app.replace(/fontFamily: 'Syne', fontSize: '1.5rem', fontWeight: 700/g, "fontFamily: 'Syne', fontSize: 22, fontWeight: 600, letterSpacing: 0.3");
app = app.replace(/fontFamily: 'Syne', fontSize: 28, color: '#4DA3FF'/g, "fontFamily: 'Syne', fontSize: 28, fontWeight: 600, color: '#8CC7FF', letterSpacing: 0.3");
app = app.replace(/fontFamily: 'Syne', fontSize: 32, fontWeight: 700, color: color/g, "fontFamily: 'Syne', fontSize: 28, fontWeight: 600, color: '#8CC7FF', letterSpacing: 0.3");

// Dashboard card label fix
app = app.replace(/fontSize: 11, color: 'rgba\(255,255,255,0\.4\)'/g, "fontSize: 13, color: 'rgba(255,255,255,0.65)'");

fs.writeFileSync('src/App.jsx', app, 'utf8');
console.log('Styles refactored successfully.');
