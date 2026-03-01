const fs = require('fs');
const FILE_PATH = './src/App.jsx';
let content = fs.readFileSync(FILE_PATH, 'utf8');

function replace(target, replacement) {
    if (content.indexOf(target) !== -1) {
        content = content.replace(target, replacement);
    } else {
        console.warn('Could not find target:', target.substring(0, 50) + '...');
    }
}

// A1: Add State Block
replace(
    `const [toastMessage, setToastMessage] = useState('');\\n    const scoreIntervalRef = useRef(null);`,
    `const [toastMessage, setToastMessage] = useState('');\\n    const scoreIntervalRef = useRef(null);\\n    const [role, setRole] = useState("ADMIN");\\n    const [currentStudentId, setCurrentStudentId] = useState("S001");\\n    const [animatedStats, setAnimatedStats] = useState({\\n        total: 0, highRisk: 0,\\n        interventions: 0, avgScore: 0\\n    });\\n    const statsAnimatedRef = useRef(false);\\n    const [adminLoading, setAdminLoading] = useState(false);`
);

// A2: Permissions Map
replace(
    `const LoginPage = ({ onLogin }) => {`,
    `const PERMISSIONS = {\\n  ADMIN: {\\n    canViewAllStudents: true,\\n    canAccessStudentsPage: true,\\n    canAccessInterventions: true,\\n    canViewFullAnalytics: true,\\n    canOpenAnyStudent: true,\\n  },\\n  STUDENT: {\\n    canViewAllStudents: false,\\n    canAccessStudentsPage: false,\\n    canAccessInterventions: false,\\n    canViewFullAnalytics: false,\\n    canOpenAnyStudent: false,\\n  }\\n};\\n\\nconst LoginPage = ({ onLogin }) => {`
);

replace(
    `const [students] = useState(() => generateStudents());`,
    `const [students] = useState(() => generateStudents());\\n    const can = (permission) => PERMISSIONS[role][permission];`
);

// A3: UPDATE navigateTo FUNCTION
replace(
    `const navigateTo = (targetPage, studentObj = null) => {`,
    `const navigateTo = (targetPage, studentObj = null) => {\\n        if (targetPage === 'faculty' && !can('canAccessStudentsPage')) return;\\n        if (targetPage === 'interventions' && !can('canAccessInterventions')) return;`
);

// A4: UPDATE NAVBAR TABS
replace(
    `<div className="flex gap-8 px-4 w-full">\\n                                <button\\n                                    onClick={() => handleNavigate("admin")}\\n                                    className={\`py-5 font-semibold text-sm transition-colors nav-tab \${currentPage === "admin" ? "text-white active" : "text-gray-400 hover:text-white"}\`}\\n                                >\\n                                    <LayoutDashboard className="w-4 h-4 inline-block mr-1.5 -mt-0.5" /> Dashboard\\n                                </button>\\n                                <button\\n                                    onClick={() => handleNavigate("faculty")}\\n                                    className={\`py-5 font-semibold text-sm transition-colors nav-tab \${currentPage === "faculty" || currentPage === "student" ? "text-white active" : "text-gray-400 hover:text-white"}\`}\\n                                >\\n                                    <Users className="w-4 h-4 inline-block mr-1.5 -mt-0.5" /> Students\\n                                </button>\\n                                <button\\n                                    onClick={() => handleNavigate("interventions")}\\n                                    className={\`py-5 font-semibold text-sm transition-colors nav-tab \${currentPage === "interventions" ? "text-white active" : "text-gray-400 hover:text-white"}\`}\\n                                >\\n                                    <ShieldAlert className="w-4 h-4 inline-block mr-1.5 -mt-0.5" /> Interventions\\n                                </button>\\n                            </div>`,
    `<div className="flex gap-8 px-4 w-full">\\n{[\\n  { label: 'Dashboard', page: 'admin', always: true },\\n  { label: 'Students', page: 'faculty',\\n    show: can('canAccessStudentsPage') },\\n  { label: 'Interventions', page: 'interventions',\\n    show: can('canAccessInterventions') }\\n].filter(tab => tab.always || tab.show)\\n .map(tab => (\\n  <button\\n    key={tab.page}\\n    onClick={() => navigateTo(tab.page)}\\n    style={{\\n      background: 'none',\\n      border: 'none',\\n      cursor: 'pointer',\\n      padding: '8px 16px',\\n      fontSize: 13,\\n      fontFamily: 'DM Sans',\\n      color: currentPage === tab.page\\n        ? '#BFA14A'\\n        : 'rgba(255,255,255,0.5)',\\n      borderBottom: currentPage === tab.page\\n        ? '2px solid #BFA14A'\\n        : '2px solid transparent',\\n      transition: 'color 0.2s ease, border-color 0.2s ease',\\n      letterSpacing: '0.3px'\\n    }}\\n    onMouseEnter={e => {\\n      if (currentPage !== tab.page)\\n        e.currentTarget.style.color = \\n          'rgba(255,255,255,0.8)';\\n    }}\\n    onMouseLeave={e => {\\n      if (currentPage !== tab.page)\\n        e.currentTarget.style.color = \\n          'rgba(255,255,255,0.5)';\\n    }}\\n  >\\n    {tab.label}\\n  </button>\\n))}\\n                            </div>`
);

// A5: ADD ROLE TOGGLE TO NAVBAR
replace(
    `<div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">`,
    `<div style={{\\n  display: 'flex', alignItems: 'center', gap: 6,\\n  background: 'rgba(255,255,255,0.04)',\\n  border: '1px solid rgba(191,161,74,0.18)',\\n  borderRadius: 8, padding: '4px 6px'\\n}}>\\n  {['ADMIN','STUDENT'].map(r => (\\n    <button\\n      key={r}\\n      onClick={() => setRole(r)}\\n      style={{\\n        background: role === r\\n          ? 'rgba(191,161,74,0.14)' : 'transparent',\\n        border: role === r\\n          ? '1px solid rgba(191,161,74,0.30)'\\n          : '1px solid transparent',\\n        borderRadius: 6,\\n        color: role === r\\n          ? '#BFA14A' : 'rgba(255,255,255,0.35)',\\n        fontSize: 11, fontFamily: 'DM Sans',\\n        fontWeight: 500, padding: '3px 10px',\\n        cursor: 'pointer',\\n        transition: 'all 0.2s ease',\\n        letterSpacing: '0.3px'\\n      }}\\n    >{r}</button>\\n  ))}\\n</div>\\n<div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">`
);

// C2: ADD COUNT-UP useEffect
replace(
    `return () => clearInterval(scoreIntervalRef.current);\\n    }, [selectedStudent, skeletonLoading]);`,
    `return () => clearInterval(scoreIntervalRef.current);\\n    }, [selectedStudent, skeletonLoading]);\\n\\n    useEffect(() => {\\n  if (currentPage !== 'admin') return;\\n  setAdminLoading(true);\\n  const loadTimer = setTimeout(() => \\n    setAdminLoading(false), 500);\\n\\n  if (statsAnimatedRef.current) return;\\n  statsAnimatedRef.current = true;\\n\\n  const targets = {\\n    total: students.length,\\n    highRisk: students.filter(\\n      s => s.riskScore >= 60).length,\\n    interventions: students.filter(\\n      s => s.riskScore >= 30).length,\\n    avgScore: Math.round(\\n      students.reduce((a,b) => a + b.riskScore, 0)\\n      / students.length)\\n  };\\n\\n  const steps = 36;\\n  const interval = 900 / steps;\\n  let step = 0;\\n  const timer = setInterval(() => {\\n    step++;\\n    const ease = 1 - Math.pow(1 - step/steps, 3);\\n    setAnimatedStats({\\n      total: Math.round(targets.total * ease),\\n      highRisk: Math.round(targets.highRisk * ease),\\n      interventions: Math.round(\\n        targets.interventions * ease),\\n      avgScore: Math.round(targets.avgScore * ease)\\n    });\\n    if (step >= steps) clearInterval(timer);\\n  }, interval);\\n\\n  return () => {\\n    clearInterval(timer);\\n    clearTimeout(loadTimer);\\n  };\\n}, [currentPage]);`
);


// Prop Drilling
replace(
    `<AdminDashboard students={students} onNavigate={handleNavigate} />`,
    `<AdminDashboard students={students} onNavigate={handleNavigate} currentStudentId={currentStudentId} animatedStats={animatedStats} adminLoading={adminLoading} />`
);
replace(
    `<FacultyDashboard students={students} onSelectStudent={(s) => openStudentDetail(s)} />`,
    `<FacultyDashboard students={students} onSelectStudent={(s) => openStudentDetail(s)} can={can} currentStudentId={currentStudentId} openStudentDetail={openStudentDetail} />`
);
replace(
    `const AdminDashboard = ({ students, onNavigate }) => {`,
    `const AdminDashboard = ({ students, onNavigate, currentStudentId, animatedStats, adminLoading }) => {`
);
replace(
    `const FacultyDashboard = ({ students, onSelectStudent }) => {`,
    `const FacultyDashboard = ({ students, onSelectStudent, can, currentStudentId, openStudentDetail }) => {`
);

// A6: UPDATE STUDENTS PAGE RENDER
const studentsTableStart = \`<Card tier={2} className="p-0 overflow-hidden ml-4">\`;
const studentsTableEnd = \`</Card>\\n            <Footer />\`;

const studentsTableTarget = content.substring(
    content.indexOf(studentsTableStart),
    content.indexOf(studentsTableEnd) + \`</Card>\`.length
);

if (studentsTableStart && content.indexOf(studentsTableStart) !== -1) {
    replace(
        studentsTableTarget,
        \`{can('canViewAllStudents') ? (\\n  \` + studentsTableTarget + \`\\n) : (\\n  <div style={{ maxWidth: 600, margin: '0 auto',\\n    padding: '32px 0' }}>\\n    <div style={{ fontSize: 12,\\n      color: 'rgba(255,255,255,0.35)',\\n      fontFamily: 'DM Sans', marginBottom: 16,\\n      letterSpacing: '0.3px' }}>\\n      YOUR PROFILE\\n    </div>\\n    {(() => {\\n      const self = students.find(\\n        s => s.id === currentStudentId);\\n      if (!self) return null;\\n      return (\\n        <div\\n          onClick={() => openStudentDetail(self)}\\n          style={{\\n            background: 'rgba(255,255,255,0.03)',\\n            border: '1px solid rgba(191,161,74,0.18)',\\n            borderRadius: 16, padding: '20px 24px',\\n            cursor: 'pointer', transition: 'all 0.25s ease'\\n          }}\\n          onMouseEnter={e => {\\n            e.currentTarget.style.transform =\\n              'translateY(-3px)';\\n            e.currentTarget.style.boxShadow =\\n              '0 12px 36px rgba(0,0,0,0.35),' +\\n              '0 0 0 1px rgba(191,161,74,0.14)';\\n          }}\\n          onMouseLeave={e => {\\n            e.currentTarget.style.transform =\\n              'translateY(0)';\\n            e.currentTarget.style.boxShadow = 'none';\\n          }}\\n        >\\n          <div style={{ fontFamily: 'Syne', fontSize: 16,\\n            color: '#fff', marginBottom: 4 }}>\\n            {self.name}\\n          </div>\\n          <div style={{ fontSize: 12,\\n            color: 'rgba(255,255,255,0.4)',\\n            fontFamily: 'DM Sans' }}>\\n            {self.dept} · Semester {self.sem}\\n          </div>\\n          <div style={{ marginTop: 12, fontSize: 12,\\n            color: self.riskScore > 60 ? '#EF4444' :\\n                   self.riskScore > 30 ? '#F59E0B'\\n                   : '#BFA14A' }}>\\n            Risk Score: {self.riskScore}\\n          </div>\\n        </div>\\n      );\\n    })()}\\n  </div>\\n)}\`
    );
}

// A7: UPDATE ADMIN DASHBOARD RENDER
const adminDashStart = \`<div className="flex flex-wrap md:flex-nowrap gap-4 mb-6">\`;
const adminDashEnd = \`<div style={{ marginTop: 48 }}>\`;

const adminDashTarget = content.substring(
    content.indexOf(adminDashStart),
    content.indexOf(adminDashEnd)
);

if (adminDashStart && content.indexOf(adminDashStart) !== -1) {
    replace(
        adminDashTarget,
        \`{can('canViewFullAnalytics') ? (\\n  <>\\n  \` + adminDashTarget + \`\\n  </>\\n) : (\\n  <div style={{ padding: '32px 0' }}>\\n    <div style={{ fontFamily: 'Syne', fontSize: 18,\\n      color: '#fff', marginBottom: 8 }}>\\n      My Academic Overview\\n    </div>\\n    <div style={{ fontSize: 12,\\n      color: 'rgba(255,255,255,0.35)',\\n      fontFamily: 'DM Sans', marginBottom: 28 }}>\\n      Showing your personal metrics only\\n    </div>\\n    {(() => {\\n      const self = students.find(\\n        s => s.id === currentStudentId);\\n      if (!self) return null;\\n      return (\\n        <div style={{ display:'flex', gap:16,\\n          flexWrap:'wrap' }}>\\n          {[\\n            { label: 'Risk Score',\\n              value: self.riskScore,\\n              color: self.riskScore > 60\\n                ? '#EF4444'\\n                : self.riskScore > 30\\n                ? '#F59E0B' : '#BFA14A' },\\n            { label: 'Attendance',\\n              value: self.attendance[4] + '%',\\n              color: '#BFA14A' },\\n            { label: 'Last Test Score',\\n              value: self.marks[4],\\n              color: 'rgba(255,255,255,0.8)' }\\n          ].map((stat, i) => (\\n            <div key={i} style={{\\n              flex: '1 1 140px',\\n              background: 'rgba(255,255,255,0.03)',\\n              border: '1px solid rgba(191,161,74,0.16)',\\n              borderRadius: 14, padding: '20px',\\n              animationName: 'staggerFadeUp',\\n              animationDuration: '260ms',\\n              animationTimingFunction: 'ease-out',\\n              animationFillMode: 'both',\\n              animationDelay: \\\`\${i * 0.08}s\\\`\\n            }}>\\n              <div style={{ fontSize: 11,\\n                color: 'rgba(255,255,255,0.35)',\\n                fontFamily: 'DM Sans',\\n                letterSpacing: '0.4px',\\n                marginBottom: 10 }}>\\n                {stat.label}\\n              </div>\\n              <div style={{ fontFamily: 'Syne',\\n                fontSize: 26, fontWeight: 700,\\n                color: stat.color }}>\\n                {stat.value}\\n              </div>\\n            </div>\\n          ))}\\n        </div>\\n      );\\n    })()}\\n  </div>\\n)}\`
    );
}

// C4: ADD SKELETON TO ADMIN STAT CARDS
replace(
    \`<div className="flex flex-wrap md:flex-nowrap gap-4 mb-6">\`,
    \`{adminLoading ? (\\n  <div style={{ display:'flex', gap:16 }}>\\n    {[1,2,3,4].map(i => (\\n      <div key={i} className="skeleton-block"\\n        style={{ flex:1, height:90, borderRadius:14 }}/>\\n    ))}\\n  </div>\\n) : (\\n<div className="flex flex-wrap md:flex-nowrap gap-4 mb-6">\`
);
replace(
    \`</Card>\\n            </div>\\n\\n            <div className="flex flex-col lg:flex-row gap-6">\`,
    \`</Card>\\n            </div>\\n)}\`
);


// Replace static AdminDashboard values
replace(
    \`<div className="text-3xl font-bold text-white">{TOTAL_STUDENTS}</div>\`,
    \`<div className="text-3xl font-bold text-white">{animatedStats.total}</div>\`
);
replace(
    \`<div className="text-4xl font-bold text-red-500">{data.high}</div>\`,
    \`<div className="text-4xl font-bold text-red-500">{animatedStats.highRisk}</div>\`
);
replace(
    \`<div className="text-4xl font-bold text-amber-500">8</div>\`,
    \`<div className="text-4xl font-bold text-amber-500">{animatedStats.interventions}</div>\`
);
replace(
    \`<div className="text-4xl font-bold text-purple-400">{data.avg}</div>\`,
    \`<div className="text-4xl font-bold text-purple-400">{animatedStats.avgScore}</div>\`
);

// C5: Stagger Animations Admin Sections
replace(
    \`<div className="flex flex-col lg:flex-row gap-6">\`,
    \`<div className="flex flex-col lg:flex-row gap-6" style={{\\nanimationName: 'staggerFadeUp',\\nanimationDuration: '300ms',\\nanimationTimingFunction: 'ease-out',\\nanimationFillMode: 'both',\\nanimationDelay: '0.10s'\\n}}>\`
);
replace(
    \`<div style={{ marginTop: 48 }}>\`,
    \`<div style={{ marginTop: 48,\\nanimationName: 'staggerFadeUp',\\nanimationDuration: '300ms',\\nanimationTimingFunction: 'ease-out',\\nanimationFillMode: 'both',\\nanimationDelay: '0.20s'\\n}}>\`
);

// B2 & B3: Sticky Table Header & Underline
replace(
    \`<tr className="border-b border-white/5 text-gray-400 text-sm">\\n                                <th className="p-4 font-semibold w-12 text-center">#</th>\\n                                <th className="p-4 font-semibold">Student</th>\\n                                <th className="p-4 font-semibold">Dept</th>\\n                                <th className="p-4 font-semibold text-center">Sem</th>\\n                                <th className="p-4 font-semibold text-center">Risk Score ⬇</th>\\n                                <th className="p-4 font-semibold">Risk Level</th>\\n                                <th className="p-4 font-semibold text-center">Trend</th>\\n                                <th className="p-4 font-semibold text-center">Action</th>\\n                            </tr>\`,
    \`<tr className="border-b border-white/5 text-gray-400 text-sm" style={{\\n  position: 'sticky',\\n  top: 0,\\n  zIndex: 10,\\n  background: '#111113',\\n  backdropFilter: 'blur(12px)'\\n}}>\\n                                <th className="p-4 font-semibold w-12 text-center">#</th>\\n                                <th className="p-4 font-semibold">Student</th>\\n                                <th className="p-4 font-semibold">Dept</th>\\n                                <th className="p-4 font-semibold text-center">Sem</th>\\n                                <th className="p-4 font-semibold text-center">Risk Score ⬇\\n<div style={{\\n  height: 2, width: '100%', marginTop: 4,\\n  background: 'linear-gradient(90deg,#BFA14A,transparent)',\\n  borderRadius: 1,\\n  animation: 'expandLine 0.8s ease forwards'\\n}}/>\\n                                </th>\\n                                <th className="p-4 font-semibold">Risk Level</th>\\n                                <th className="p-4 font-semibold text-center">Trend</th>\\n                                <th className="p-4 font-semibold text-center">Action</th>\\n                            </tr>\`
);

// B4: SEARCH INPUT GOLD FOCUS RING
replace(
    \`onChange={e => setSearch(e.target.value)}\`,
    \`onChange={e => setSearch(e.target.value)}\\n                        onFocus={e => {\\n  e.currentTarget.style.outline = 'none';\\n  e.currentTarget.style.boxShadow =\\n    '0 0 0 2px rgba(191,161,74,0.28)';\\n  e.currentTarget.style.borderColor =\\n    'rgba(191,161,74,0.40)';\\n}}\\nonBlur={e => {\\n  e.currentTarget.style.boxShadow = 'none';\\n  e.currentTarget.style.borderColor =\\n    'rgba(191,161,74,0.18)';\\n}}\`
);

// B5 & B8 Action Buttons and Button Elevate Focus
content = content.replace(/className="action-btn/g, \`onMouseDown={e => {\\n  e.currentTarget.style.transform = 'scale(0.98)';\\n  e.currentTarget.style.transition = 'transform 0.1s ease';\\n}}\\nonMouseUp={e => {\\n  e.currentTarget.style.transform = 'scale(1)';\\n}}\\nclassName="action-btn\`);

content = content.replace(/className="w-full btn-gradient/g, \`onMouseDown={e => {\\n  e.currentTarget.style.transform = 'scale(0.98)';\\n  e.currentTarget.style.transition = 'transform 0.1s ease';\\n}}\\nonMouseUp={e => {\\n  e.currentTarget.style.transform = 'scale(1)';\\n}}\\nonMouseEnter={e => {\\n  e.currentTarget.style.transform = 'translateY(-2px)';\\n  e.currentTarget.style.transition = 'all 0.25s ease';\\n  e.currentTarget.style.boxShadow =\\n    '0 6px 18px rgba(191,161,74,0.16)';\\n}}\\nonMouseLeave={e => {\\n  e.currentTarget.style.transform = 'translateY(0)';\\n  e.currentTarget.style.boxShadow = 'none';\\n}}\\nclassName="w-full btn-gradient\`);

content = content.replace(/className="mt-6 btn-gradient/g, \`onMouseDown={e => {\\n  e.currentTarget.style.transform = 'scale(0.98)';\\n  e.currentTarget.style.transition = 'transform 0.1s ease';\\n}}\\nonMouseUp={e => {\\n  e.currentTarget.style.transform = 'scale(1)';\\n}}\\nonMouseEnter={e => {\\n  e.currentTarget.style.transform = 'translateY(-2px)';\\n  e.currentTarget.style.transition = 'all 0.25s ease';\\n  e.currentTarget.style.boxShadow =\\n    '0 6px 18px rgba(191,161,74,0.16)';\\n}}\\nonMouseLeave={e => {\\n  e.currentTarget.style.transform = 'translateY(0)';\\n  e.currentTarget.style.boxShadow = 'none';\\n}}\\nclassName="mt-6 btn-gradient\`);


// B6: CARD HOVER LIFT (Interactive Cards)
replace(
    \`onMouseEnter={e => {\\n                                            e.currentTarget.style.transform = 'translateX(3px)';\\n                                            e.currentTarget.style.transition = 'all 0.2s ease';\\n                                            e.currentTarget.style.background = 'rgba(191,161,74,0.04)';\\n                                        }}\\n                                        onMouseLeave={e => {\\n                                            e.currentTarget.style.transform = 'translateX(0px)';\\n                                            e.currentTarget.style.background = 'transparent';\\n                                        }}\`,
    \`onMouseEnter={e => {\\n  e.currentTarget.style.transform = 'translateX(3px)';\\n  e.currentTarget.style.transition = 'all 0.2s ease';\\n  e.currentTarget.style.background =\\n    'rgba(191,161,74,0.04)';\\n}}\\nonMouseLeave={e => {\\n  e.currentTarget.style.transform = 'translateX(0)';\\n  e.currentTarget.style.background = 'transparent';\\n}}\`
);


// B1: RISK BADGE ANIMATION LAYER
replace(
    \`<div className={\\\`inline-block px-3 py-1 rounded-full text-xs font-bold border \${isHigh ? 'risk-pulse' : ''}\\\`}\\n                                                style={{ borderColor: isSafe ? 'rgba(191,161,74,0.24)' : getLevelColor(s.risk.level), color: getLevelColor(s.risk.level), backgroundColor: isSafe ? 'rgba(191,161,74,0.08)' : \\\`\${getLevelColor(s.risk.level)}10\\\` }}\`,
    \`<div className={\\\`inline-block px-3 py-1 rounded-full text-xs font-bold border \${isHigh ? 'risk-pulse' : ''}\\\`}\\n                                                style={{ borderColor: isSafe ? 'rgba(191,161,74,0.24)' : getLevelColor(s.risk.level), color: getLevelColor(s.risk.level), backgroundColor: isSafe ? 'rgba(191,161,74,0.08)' : \\\`\${getLevelColor(s.risk.level)}10\\\`,\\n  animationName: isHigh ? 'highRiskPulse' : isSafe ? 'safeGoldPulse' : 'none',\\n  animationDuration: isHigh ? '2.8s' : '3.2s',\\n  animationTimingFunction: 'ease-in-out',\\n  animationIterationCount: 'infinite'\\n}}\`
);


// C6: AMBIENT GOLD GLOW
replace(
    \`<div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavigate('admin')} style={{ display: 'flex', alignItems: 'center' }}>\`,
    \`<div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavigate('admin')} style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>\\n<div style={{\\n  position: 'absolute', top: -20, left: -20,\\n  width: 180, height: 180,\\n  background: 'radial-gradient(ellipse,' +\\n    'rgba(191,161,74,0.07),transparent 70%)',\\n  borderRadius: '50%',\\n  pointerEvents: 'none', zIndex: 0,\\n  animation: 'ambientPulse 5s ease-in-out infinite'\\n}}/>\`
);

// C7: ADD STAGGER TO STUDENT PANELS
replace(
    \`<div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(20px)', borderRadius: 20, padding: 24, marginBottom: 24 }}>\\n                        <div style={{ fontFamily: 'Syne', fontSize: '1.5rem', fontWeight: 700, marginBottom: 8 }}>💰 Financial Risk Index</div>\`,
    \`<div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(20px)', borderRadius: 20, padding: 24, marginBottom: 24,\\nanimationName: 'staggerFadeUp',\\nanimationDuration: '280ms',\\nanimationTimingFunction: 'ease-out',\\nanimationFillMode: 'both',\\nanimationDelay: \\\`\${0 * 0.06}s\\\`\\n}}>\\n                        <div style={{ fontFamily: 'Syne', fontSize: '1.5rem', fontWeight: 700, marginBottom: 8 }}>💰 Financial Risk Index</div>\`
);
replace(
    \`<div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(20px)', borderRadius: 20, padding: 24, marginBottom: 24 }}>\\n                        <div style={{ fontFamily: 'Syne', fontSize: '1.5rem', fontWeight: 700, marginBottom: 8 }}>🏘️ Socio-Economic Profile</div>\`,
    \`<div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(20px)', borderRadius: 20, padding: 24, marginBottom: 24,\\nanimationName: 'staggerFadeUp',\\nanimationDuration: '280ms',\\nanimationTimingFunction: 'ease-out',\\nanimationFillMode: 'both',\\nanimationDelay: \\\`\${1 * 0.06}s\\\`\\n}}>\\n                        <div style={{ fontFamily: 'Syne', fontSize: '1.5rem', fontWeight: 700, marginBottom: 8 }}>🏘️ Socio-Economic Profile</div>\`
);
replace(
    \`<div style={{\\n                        background: 'rgba(255,255,255,0.02)',\\n                        border: \\\`1px solid \${isHigh ? 'rgba(239,68,68,0.25)' : risk.level === "MODERATE" ? 'rgba(245,158,11,0.2)' : 'rgba(191,161,74,0.15)'}\\\`,\\n                        backdropFilter: 'blur(20px)', borderRadius: 20, padding: 24, marginBottom: 24\\n                    }}>\`,
    \`<div style={{\\n                        background: 'rgba(255,255,255,0.02)',\\n                        border: \\\`1px solid \${isHigh ? 'rgba(239,68,68,0.25)' : risk.level === "MODERATE" ? 'rgba(245,158,11,0.2)' : 'rgba(191,161,74,0.15)'}\\\`,\\n                        backdropFilter: 'blur(20px)', borderRadius: 20, padding: 24, marginBottom: 24,\\nanimationName: 'staggerFadeUp',\\nanimationDuration: '280ms',\\nanimationTimingFunction: 'ease-out',\\nanimationFillMode: 'both',\\nanimationDelay: \\\`\${2 * 0.06}s\\\`\\n                    }}>\`
);
replace(
    \`<div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(20px)', borderRadius: 20, padding: 24, marginBottom: 24 }}>\\n                        <div style={{ fontFamily: 'Syne', fontSize: '1.5rem', fontWeight: 700, marginBottom: 8 }}>🧠 Mental Health & Wellbeing</div>\`,
    \`<div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(20px)', borderRadius: 20, padding: 24, marginBottom: 24,\\nanimationName: 'staggerFadeUp',\\nanimationDuration: '280ms',\\nanimationTimingFunction: 'ease-out',\\nanimationFillMode: 'both',\\nanimationDelay: \\\`\${3 * 0.06}s\\\`\\n}}>\\n                        <div style={{ fontFamily: 'Syne', fontSize: '1.5rem', fontWeight: 700, marginBottom: 8 }}>🧠 Mental Health & Wellbeing</div>\`
);

// C8: ADD STAGGER TO INTERVENTION CARDS
replace(
    \`<tr key={inv.id} className={\\\`border-b border-white/5 transition-all duration-500 hover:bg-white/5 \${inv.status === "COMPLETE" ? "opacity-50" : ""}\\\`}>\`,
    \`<tr key={inv.id} className={\\\`border-b border-white/5 transition-all duration-500 hover:bg-white/5 \${inv.status === "COMPLETE" ? "opacity-50" : ""}\\\`}\\nstyle={{\\nanimationName: 'staggerFadeUp',\\nanimationDuration: '260ms',\\nanimationTimingFunction: 'ease-out',\\nanimationFillMode: 'both',\\nanimationDelay: \\\`\${Math.min(idx * 0.06, 0.36)}s\\\`\\n}}>\`
);


// Done, Write string back to the user or file
fs.writeFileSync(FILE_PATH, content, 'utf8');
console.log('App patched! Finished Layer A, Layer B, and Layer C successfully.');
