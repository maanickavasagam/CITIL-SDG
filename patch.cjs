const fs = require('fs');

// First run the array generator
require('./gen_array.cjs');

const appPath = 'src/App.jsx';
let appCode = fs.readFileSync(appPath, 'utf8');

// 1. Replace generateStudents
const generatedArrayCode = fs.readFileSync('generated_array.js', 'utf8');
const generateStudentsRegex = /const generateStudents = \(\) => \{[\s\S]*?return students\.map\(s => \{[\s\S]*?return s;\n    \}\);\n\};/;
appCode = appCode.replace(generateStudentsRegex, generatedArrayCode);

// 2. Add state & update filter logic
const oldFilterLogic = `    const [filterDept, setFilterDept] = useState("All");
    const [filterRisk, setFilterRisk] = useState("All");
    const [search, setSearch] = useState("");

    const processed = useMemo(() => {
        return students
            .map(s => ({ ...s, risk: calculateRiskScore(s) }))
            .filter(s => filterDept === "All" || s.dept === filterDept)
            .filter(s => filterRisk === "All" || s.risk.level === filterRisk)
            .filter(s => s.name.toLowerCase().includes(search.toLowerCase()) || s.id.toLowerCase().includes(search.toLowerCase()))
            .sort((a, b) => b.risk.score - a.risk.score);
    }, [students, filterDept, filterRisk, search]);`;

const newFilterLogic = `    const [filterRisk, setFilterRisk] = useState("All");
    const [search, setSearch] = useState("");
    const [selectedDepartment, setSelectedDepartment] = useState("All");
    const [selectedYear, setSelectedYear] = useState("All");

    const filteredStudents = useMemo(() => {
        return students
            .map(s => ({ ...s, risk: calculateRiskScore(s) }))
            .filter(s => filterRisk === "All" || s.risk.level === filterRisk)
            .filter(s => selectedDepartment === "All" || s.dept === selectedDepartment)
            .filter(s => selectedYear === "All" || Math.ceil(s.sem / 2) === parseInt(selectedYear))
            .filter(s => s.name.toLowerCase().includes(search.toLowerCase()) || s.id.toLowerCase().includes(search.toLowerCase()))
            .sort((a, b) => b.risk.score - a.risk.score);
    }, [students, filterRisk, search, selectedDepartment, selectedYear]);`;

appCode = appCode.replace(oldFilterLogic, newFilterLogic);

// 3. Add dropdown UI above the table
const oldTableStart = `                    </div>

                    <Card tier={2} className="p-0 overflow-hidden ml-4">`;

const newTableStart = `                    </div>

                    <div className="flex flex-wrap gap-3 mb-4 ml-4">
                        <select
                            value={selectedDepartment}
                            onChange={(e) => setSelectedDepartment(e.target.value)}
                            className="bg-slate-800 dark:bg-slate-800 bg-white border border-gray-700 dark:border-gray-700 border-gray-300 text-gray-100 dark:text-gray-100 text-gray-900 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="All">All Departments</option>
                            <option value="CSE">CSE</option>
                            <option value="IT">IT</option>
                            <option value="ECE">ECE</option>
                            <option value="EEE">EEE</option>
                            <option value="MECH">MECH</option>
                            <option value="CIVIL">CIVIL</option>
                        </select>
                        <select
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                            className="bg-slate-800 dark:bg-slate-800 bg-white border border-gray-700 dark:border-gray-700 border-gray-300 text-gray-100 dark:text-gray-100 text-gray-900 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="All">All Years</option>
                            <option value="1">Year 1</option>
                            <option value="2">Year 2</option>
                            <option value="3">Year 3</option>
                            <option value="4">Year 4</option>
                        </select>
                    </div>

                    <Card tier={2} className="p-0 overflow-hidden ml-4">`;

appCode = appCode.replace(oldTableStart, newTableStart);

// 4. Update the map call
appCode = appCode.replace(/\{processed\.map\(\(s, idx\) => \{/g, "{filteredStudents.map((s, idx) => {");

fs.writeFileSync(appPath, appCode);
console.log("App.jsx patched successfully!");
