const fs = require('fs');
let c = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Rebranding
c = c.replace(/<span style=\{\{ color:\s*'rgba\(197,25,45,0\.6\)' \}\}>\s*Supporting SDG 4 – Quality Education\s*<\/span>/, '');
c = c.replace(/\{' \| '\}\s*2030 Agenda for Sustainable Development/g, '');
c = c.replace(/\{' \| '\}\s*Continuum/g, "{' | '}Hackspace");

c = c.replace(/<h1 className="text-4xl font-extrabold mb-2 text-gradient tracking-tight relative z-10">Continuum<\/h1>/,
    '<h1 className="text-4xl font-extrabold mb-2 text-gradient tracking-tight relative z-10">Hackspace</h1>');

c = c.replace(/<span style=\{\{ fontFamily: 'Syne', fontWeight: 700, fontSize: 20, background: 'linear-gradient\(135deg,#A88C3D,#BFA14A\)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1\.1 \}\}>Continuum<\/span>/,
    "<span style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: 20, background: 'linear-gradient(135deg,#A88C3D,#BFA14A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.1 }}>Hackspace</span>");

// 2. SDG Badges & Texts
c = c.replace(/<div style=\{\{ display: 'inline-flex', alignItems: 'center', gap: 5, background: 'rgba\(197,25,45,0\.1\)', border: '1px solid rgba\(197,25,45,0\.3\)', borderRadius: 20, padding: '3px 10px', marginLeft: 12 \}\}>\s*<span style=\{\{ width: 6, height: 6, borderRadius: 3, background: '#C5192D', display: 'inline-block' \}\}><\/span>\s*<span style=\{\{ fontSize: 10, color: '#C5192D', fontFamily: 'DM Sans', fontWeight: 500, letterSpacing: '0\.3px' \}\}>SDG 4 – Quality Education<\/span>\s*<\/div>/, '');

c = c.replace(/SDG 4 Education Impact Metrics/g, 'Education Impact Metrics');
c = c.replace(/SDG 4 Target Progress — Institution Level/g, 'Hackspace Target Progress — Institution Level');

c = c.replace(/<div style=\{\{ borderTop: '1px solid rgba\(255,255,255,0\.04\)', paddingTop: 12, marginTop: 24, display: 'flex', alignItems: 'center', gap: 8 \}\}>\s*<div style=\{\{ width: 24, height: 24, borderRadius: 12, background: '#C5192D', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: 'white', fontFamily: 'Syne' \}\}>4<\/div>\s*<div style=\{\{ fontSize: 10, color: 'rgba\(255,255,255,0\.2\)' \}\}>Data aligned with UNESCO SDG 4 monitoring framework<\/div>\s*<\/div>/, '');

// 3. Remove "Economic Impact Prevented" Card
c = c.replace(/<Card tier=\{1\} className="flex-1 min-w-\[200px\]" style=\{\{ borderLeft: '3px solid #F2B84B' \}\} title="Based on avg lifetime earning loss per dropout × students stabilized">\s*<div style=\{\{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, color: 'rgba\(255,255,255,0\.4\)', marginBottom: 8 \}\}>\s*<IndianRupee size=\{20\} color="#F2B84B" \/> Economic Impact Prevented\s*<\/div>\s*<div style=\{\{ fontFamily: 'Syne', fontSize: 28, color: '#F2B84B', marginBottom: 4 \}\}>₹14\.2L<\/div>\s*<div style=\{\{ fontSize: 10, color: 'rgba\(255,255,255,0\.25\)' \}\}>Estimated lost productivity avoided<\/div>\s*<\/Card>/, '');

// 4. Remove Equitable Quality Education Access Progress Row
const progressRowRegex = /<div style=\{\{ marginBottom: 16 \}\}>\s*<div style=\{\{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'rgba\(255,255,255,0\.5\)', marginBottom: 4 \}\}>\s*<span>Equitable Quality Education Access<\/span>\s*<span>68%<\/span>\s*<\/div>\s*<div style=\{\{ height: 8, borderRadius: 4, background: 'rgba\(255,255,255,0\.06\)', width: '100%' \}\}>\s*<div style=\{\{ height: 8, borderRadius: 4, background: '#C5192D', width: '68%', transition: 'width 1s ease 0\.3s' \}\}><\/div>\s*<\/div>\s*<\/div>/;
c = c.replace(progressRowRegex, '');

// Change Dropout Prevention color to #BFA14A instead of SDG Red
c = c.replace(/<div style=\{\{ height: 8, borderRadius: 4, background: '#C5192D', width: '74%', transition: 'width 1s ease 0\.3s' \}\}><\/div>/, "<div style={{ height: 8, borderRadius: 4, background: '#BFA14A', width: '74%', transition: 'width 1s ease 0.3s' }}></div>");


// 5. Profiler -> Remove Behavioral Factor from SHAP array
c = c.replace(/\{\s*factor:\s*'Behavior',\s*value:\s*risk\.breakdown\.behavior,\s*type:\s*'risk'\s*\},/g, '');

// 6. Profiler -> Remove Panel D (Mental Health & Wellbeing)
c = c.replace(/\{\/\*\s*Panel D: Mental Health & Wellbeing\s*\*\/\}.*?(?=\{\/\*\s*NEW WAVE 1 PANELS\s*\*\/\}|<div className="mt-8 relative">)/s, '');


fs.writeFileSync('src/App.jsx', c, 'utf8');
console.log('App.jsx refactored successfully.');
