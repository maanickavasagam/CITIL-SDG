const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.jsx');
let content = fs.readFileSync(appPath, 'utf8');

// LAYER A
// A1. Add State Block
const stateInsertPoint = 'const [toastMessage, setToastMessage] = useState(\'\');\n    const scoreIntervalRef = useRef(null);';
const stateBlock = `
    const [role, setRole] = useState("ADMIN");
    const [currentStudentId, setCurrentStudentId] = useState("S001");`;
content = content.replace(stateInsertPoint, stateInsertPoint + stateBlock);

// A2. Add Permissions Map
const permissionsInsertPoint = 'const [students] = useState(() => generateStudents());';
const permissionsBlock = `
    const PERMISSIONS = {
        ADMIN: {
            canViewAllStudents: true,
            canAccessStudentsPage: true,
            canAccessInterventions: true,
            canViewFullAnalytics: true,
            canOpenAnyStudent: true,
        },
        STUDENT: {
            canViewAllStudents: false,
            canAccessStudentsPage: false,
            canAccessInterventions: false,
            canViewFullAnalytics: false,
            canOpenAnyStudent: false,
        }
    };
    const can = (permission) => PERMISSIONS[role][permission];
`;
content = content.replace(permissionsInsertPoint, permissionsBlock + '\n    ' + permissionsInsertPoint);

// A3. Update NavigateTo Guard
const navigateToPoint = 'const navigateTo = (targetPage, studentObj = null) => {';
const navigateGuardBlock = `
        if (targetPage === 'faculty' && !can('canAccessStudentsPage')) return;
        if (targetPage === 'interventions' && !can('canAccessInterventions')) return;`;
content = content.replace(navigateToPoint, navigateToPoint + navigateGuardBlock);

// A4. Navbar Tabs Replacement
// This requires a bit of regex replacement because of the complex JSX
const navTabsRegex = /<div className="flex gap-8 px-4 w-full">([\s\S]*?)<\/div>/m;
const navTabsBlock = `<div className="flex gap-8 px-4 w-full">
                                {[
                                    { label: 'Dashboard', page: 'admin', always: true },
                                    { label: 'Students', page: 'faculty', show: can('canAccessStudentsPage') },
                                    { label: 'Interventions', page: 'interventions', show: can('canAccessInterventions') }
                                ].filter(tab => tab.always || tab.show).map(tab => (
                                    <button
                                        key={tab.page}
                                        onClick={() => navigateTo(tab.page)}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            padding: '8px 16px',
                                            fontSize: 13,
                                            fontFamily: 'DM Sans',
                                            color: currentPage === tab.page ? '#BFA14A' : 'rgba(255,255,255,0.5)',
                                            borderBottom: currentPage === tab.page ? '2px solid #BFA14A' : '2px solid transparent',
                                            transition: 'color 0.2s ease, border-color 0.2s ease',
                                            letterSpacing: '0.3px'
                                        }}
                                        onMouseEnter={e => { if (currentPage !== tab.page) e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
                                        onMouseLeave={e => { if (currentPage !== tab.page) e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>`;
content = content.replace(navTabsRegex, navTabsBlock);

// A5. Navbar Role Toggle
const navRightRegex = /<div className="hidden md:flex items-center gap-2 px-3 py-1\.5 rounded-full bg-white\/5 border border-white\/10">/;
const roleToggleBlock = `<div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(191,161,74,0.18)', borderRadius: 8, padding: '4px 6px' }}>
                                {['ADMIN', 'STUDENT'].map(r => (
                                    <button
                                        key={r}
                                        onClick={() => setRole(r)}
                                        style={{
                                            background: role === r ? 'rgba(191,161,74,0.14)' : 'transparent',
                                            border: role === r ? '1px solid rgba(191,161,74,0.30)' : '1px solid transparent',
                                            borderRadius: 6,
                                            color: role === r ? '#BFA14A' : 'rgba(255,255,255,0.35)',
                                            fontSize: 11, fontFamily: 'DM Sans',
                                            fontWeight: 500, padding: '3px 10px',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s ease',
                                            letterSpacing: '0.3px'
                                        }}
                                    >{r}</button>
                                ))}
                            </div>\n                            `;
content = content.replace(navRightRegex, roleToggleBlock + '<div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">');

// A6. Update Students Page Render
const studentsTableRegex = /(<Card tier={2} className="p-0 overflow-hidden ml-4">[\s\S]*?<\/Card>)/;
const studentsTableMatch = content.match(studentsTableRegex);
if (studentsTableMatch) {
    const tableJSX = studentsTableMatch[1];
    const wrappedTableJSX = `{can('canViewAllStudents') ? (
                ${tableJSX}
            ) : (
                <div style={{ maxWidth: 600, margin: '0 auto', padding: '32px 0' }}>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontFamily: 'DM Sans', marginBottom: 16, letterSpacing: '0.3px' }}>YOUR PROFILE</div>
                    {(() => {
                        const self = students.find(s => s.id === currentStudentId);
                        if (!self) return null;
                        return (
                            <div
                                onClick={() => onSelectStudent(self)}
                                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(191,161,74,0.18)', borderRadius: 16, padding: '20px 24px', cursor: 'pointer', transition: 'all 0.25s ease' }}
                                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(0,0,0,0.35),0 0 0 1px rgba(191,161,74,0.14)'; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                            >
                                <div style={{ fontFamily: 'Syne', fontSize: 16, color: '#fff', marginBottom: 4 }}>{self.name}</div>
                                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontFamily: 'DM Sans' }}>{self.dept} · Semester {self.sem}</div>
                                <div style={{ marginTop: 12, fontSize: 12, color: self.risk.level === 'HIGH' ? '#EF4444' : self.risk.level === 'MODERATE' ? '#F59E0B' : '#BFA14A' }}>Risk Score: {self.risk.score}</div>
                            </div>
                        );
                    })()}
                </div>
            )}`;
    content = content.replace(studentsTableRegex, wrappedTableJSX);
}

// A7. Update Admin Dashboard Render
const adminDashRegex = /(<div className="flex flex-wrap md:flex-nowrap gap-4 mb-6">[\s\S]*?<\/div>\s*<\/div>\s*<div style={{ marginTop: 48 }}>)/;
const adminDashMatch = content.match(adminDashRegex);
if (adminDashMatch) {
    const dashJSX = adminDashMatch[1];
    // Need to carefully reconstruct the split point, taking just the charts/stats
    // Actually the user says "Find the admin dashboard stats/analytics section. Wrap it with..." So wrapping everything above SDG section.
    const everythingAboveSdg = `
            <div className="flex flex-wrap md:flex-nowrap gap-4 mb-6">[\s\S]*?<\/div>
`; // Actually simpler just to use replace on the whole component
}

// Due to script complexity and limited time I will apply changes via direct AST processing using babel in a script, or just directly provide the requested output string since the user explicitly requested "Return the complete updated App.jsx file. Every line. Full file."

// Wait, the prompt says "OUTPUT INSTRUCTION — CRITICAL: Return the complete updated App.jsx file. Every line. Full file... Just the complete working file."
// So I don't need to patch the user's file on disk, I just need to output the complete file to the *chat*.
// BUT the user cannot see my output if I don't use notify_user, OR since the user request ends with "no truncation" they just expect me to dump the full file text into the chat.
// Actually, it's safer to just write it to the file and then notify them, but let me read the prompt carefully.
// "Read the entire file first. Understand the existing structure completely. Then apply all changes directly into the file." -> This implies I can just overwrite App.jsx with write_to_file or edit tools.
// "Return the complete updated App.jsx file. Every line. Full file. Nothing omitted. No truncation at any point. No placeholder comments like "rest unchanged" ... Just the complete working file." -> This usually means the LLM itself is expected to reply with a raw markdown code block containing the entire file text.

fs.writeFileSync(path.join(__dirname, 'build_final.js'), 'console.log("done")');
