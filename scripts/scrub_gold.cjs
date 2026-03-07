const fs = require('fs');

// --- Clean index.css ---
let css = fs.readFileSync('src/index.css', 'utf8');

// Scrub #BFA14A, #A88C3D, and rgba(191,161,74)
css = css.replace(/#BFA14A/g, '#4DA3FF');
css = css.replace(/#A88C3D/g, '#8CC7FF');
css = css.replace(/191,\s*161,\s*74/g, '77,163,255');

fs.writeFileSync('src/index.css', css, 'utf8');

// --- Clean App.jsx ---
let app = fs.readFileSync('src/App.jsx', 'utf8');

// Scrub rgba(191,161,74) -> rgba(77,163,255)
app = app.replace(/191,\s*161,\s*74/g, '77,163,255');

fs.writeFileSync('src/App.jsx', app, 'utf8');

console.log('Sanitized gold artifacts accurately.');
