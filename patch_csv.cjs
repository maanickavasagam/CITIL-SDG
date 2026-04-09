const fs = require('fs');
const path = require('path');

// 1. Generate students_dataset.csv in public/ directory
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
}

let csvContent = "name,studentId,department,year,attendance,riskScore\\n";

const firstNames = ["Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun", "Sai", "Reyansh", "Ayaan", "Krishna", "Ishaan", "Shaurya", "Atharva", "Kabir", "Rishi", "Darsh", "Ira", "Saanvi", "Myra", "Aadhya", "Navya", "Diya", "Pihu", "Avni", "Kavya", "Ananya", "Riya", "Aria", "Sara", "Neha", "Rohan", "Rahul", "Aman"];
const lastNames = ["Sharma", "Verma", "Gupta", "Malhotra", "Singh", "Patel", "Kumar", "Garg", "Mehta", "Rao", "Nair", "Reddy", "Iyer", "Joshi", "Desai", "Rao"];
const depts = ["CSE", "IT", "ECE", "EEE", "MECH", "CIVIL"];

function randomChoice(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

for (let i = 1; i <= 200; i++) {
    const name = randomChoice(firstNames) + " " + randomChoice(lastNames);
    const sId = "CSV" + i.toString().padStart(3, '0');
    const dept = randomChoice(depts);
    const yr = randInt(1, 4);

    let riskScore, attendance;
    
    if (i <= 60) {
        riskScore = randInt(70, 95);
        attendance = randInt(50, 70);
    } else if (i <= 140) {
        riskScore = randInt(40, 69);
        attendance = randInt(71, 85);
    } else {
        riskScore = randInt(10, 39);
        attendance = randInt(86, 100);
    }

    csvContent += name + "," + sId + "," + dept + "," + yr + "," + attendance + "," + riskScore + "\\n";
}

fs.writeFileSync(path.join(publicDir, 'students_dataset.csv'), csvContent);
console.log("students_dataset.csv successfully written to public payload.");

// 2. Patch App.jsx
const appPath = path.join(__dirname, 'src', 'App.jsx');
let appCode = fs.readFileSync(appPath, 'utf8');

const oldParsingStart = "                if (type === 'dataset') {";
const oldParsingEnd = "                    setStudents(prev => [...prev, ...newStudents]);\\n                } else";

if (appCode.includes(oldParsingStart) && appCode.includes(oldParsingEnd)) {
    const startIdx = appCode.indexOf(oldParsingStart);
    const endIdx = appCode.indexOf(oldParsingEnd, startIdx) + 81;
    
    const newParsingLogic = [
        "                if (type === 'dataset') {",
        "                    const reqCols = ['name', 'studentid', 'department', 'year', 'attendance', 'riskscore'];",
        "                    const isValid = reqCols.every(c => headers.includes(c));",
        "                    if (!isValid) {",
        "                        if (showToast) showToast('Invalid CSV format. Please use the Sample CSV headers: name,studentId,department,year,attendance,riskScore');",
        "                        return;",
        "                    }",
        "                    const newStudents = lines.slice(1).map((line, idx) => {",
        "                        const values = line.split(',');",
        "                        const record = {};",
        "                        headers.forEach((h, i) => {",
        "                            record[h] = values[i]?.trim();",
        "                        });",
        "                        const score = parseInt(record.riskscore) || parseInt(record.riskScore) || 0;",
        "                        const level = score <= 39 ? 'SAFE' : score <= 69 ? 'MODERATE' : 'HIGH';",
        "                        return {",
        "                            id: record.studentid || ('CSV' + idx),",
        "                            name: record.name || 'Unknown',",
        "                            dept: record.department || 'CSE',",
        "                            sem: parseInt(record.year) * 2 || parseInt(record.year) || 1,",
        "                            attendance: [80, 80, 80, 80, parseInt(record.attendance) || 80],",
        "                            marks: [70, 70, 70, 70, 70],",
        "                            riskScore: score,",
        "                            riskLevel: level,",
        "                            risk: {",
        "                                score: score,",
        "                                level: level,",
        "                                trend: 'stable',",
        "                                breakdown: { attendance: 0, marks: 0, lms: 0, assignments: 0, behavior: 0, competitions: 0 }",
        "                            },",
        "                            financialRisk: 50,",
        "                            socioEconomic: 50,",
        "                            mentalHealth: 50",
        "                        };",
        "                    });",
        "                    setStudents(prev => [...prev, ...newStudents]);"
    ].join("\\n") + "\\n";

    appCode = appCode.substring(0, startIdx) + newParsingLogic + appCode.substring(endIdx);
    console.log("Successfully overhauled Parser payload logic.");
}

const oldHeader = '<h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Upload CSV</h3>\\n                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">\\n                            Upload a bulk dataset of student records. Required columns: id, name, dept, semester, riskScore, riskLevel.\\n                        </p>';

const newHeader = '<div className="flex items-center justify-between mb-2">\\n                            <h3 className="text-xl font-bold text-gray-900 dark:text-white transform translate-y-1">Upload CSV</h3>\\n                            <a href="/students_dataset.csv" download className="bg-[#4DA3FF] hover:bg-[#3B82F6] text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg transition-colors cursor-pointer block text-center">Download Sample CSV</a>\\n                        </div>\\n                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 mt-3">\\n                            Upload a bulk dataset of student records. Required columns: name, studentId, department, year, attendance, riskScore.\\n                        </p>';

appCode = appCode.replace(oldHeader, newHeader);

const backupTargetRegex = /<h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Upload CSV<\/h3>[\\s\\S]*?riskLevel\\.[\\s\\S]*?<\/p>/;
if(appCode.match(backupTargetRegex)) {
    appCode = appCode.replace(backupTargetRegex, newHeader);
}

fs.writeFileSync(appPath, appCode, 'utf8');
console.log("App.jsx payload patched!");
