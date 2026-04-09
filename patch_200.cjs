const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.jsx');
let appCode = fs.readFileSync(appPath, 'utf8');

// 1. Update risk score boundaries
appCode = appCode.replace(
    /let level = total <= 30 \? "SAFE" : total <= 60 \? "MODERATE" : "HIGH";/g,
    'let level = total <= 39 ? "SAFE" : total <= 69 ? "MODERATE" : "HIGH";'
);

// 2. Remove hardcoded TOTAL_STUDENTS declaration if it exists
appCode = appCode.replace(/const TOTAL_STUDENTS = \d+;/g, '');

// 3. Replace {TOTAL_STUDENTS} with {students.length} everywhere it appears in the UI
appCode = appCode.replace(/\{TOTAL_STUDENTS\}/g, '{students.length}');

// 4. Generate 200 Students Database correctly balanced
const firstNames = ["Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun", "Sai", "Reyansh", "Ayaan", "Krishna", "Ishaan", "Shaurya", "Atharva", "Kabir", "Rishi", "Darsh", "Ira", "Saanvi", "Myra", "Aadhya", "Navya", "Diya", "Pihu", "Avni", "Kavya", "Ananya", "Riya", "Aria", "Sara", "Neha", "Rohan", "Rahul", "Aman", "Priya", "Sneha", "Karan", "Kirti", "Abhinav", "Aditi", "Anuj", "Shruti", "Siddharth", "Simran", "Varun", "Ritik", "Shivani", "Ritika", "Gaurav", "Nisha", "Manoj", "Megha", "Tarun", "Tanvi", "Vikas", "Tanya", "Adil", "Suresh", "Ramesh", "Deepak", "Aarti", "Pooja"];
const lastNames = ["Sharma", "Verma", "Gupta", "Malhotra", "Singh", "Patel", "Kumar", "Garg", "Mehta", "Rao", "Nair", "Reddy", "Iyer", "Joshi", "Desai", "Rao", "Das", "Bose", "Chauhan", "Yadav", "Kapoor", "Chawla", "Bansal", "Mishra", "Pandey", "Shukla", "Dixit", "Awasti", "Mukherjee", "Chatterjee", "Bhattacharya", "Sinha", "Menon", "Pillai", "Nambiar", "Ahuja", "Arora", "Bhatia", "Sethi", "Kohli", "Narang", "Grover"];

function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const depts = ["CSE", "IT", "ECE", "EEE", "MECH", "CIVIL"];

// Helper to generate a student based on risk preference
function genStudent(idNum, targetRisk) {
    let name = randomChoice(firstNames) + " " + randomChoice(lastNames);
    let dept = randomChoice(depts);
    let sem = Math.floor(Math.random() * 8) + 1; // 1 to 8 sem

    let s = {
        id: "S" + idNum.toString().padStart(3, '0'),
        name: name,
        dept: dept,
        sem: sem,
        attendance: [],
        marks: [],
        lmsLogins: [],
        assignmentDelays: 0,
        behaviorIncidents: 0,
        competitions: 0,
        prevGPA: 0.0,
        facultyAdvisor: "Assigned Faculty",
        financial: { feeStatus: "Paid", vulnerabilityScore: 10, scholarshipEligible: false, scholarshipType: "None" },
        socioEconomic: { parentIncomeBracket: ">6L", location: "Urban", firstGenerationLearner: false, genderRiskFlag: false },
        mentalHealth: { behavioralStressIndex: 20, counselingRecommended: false, stressCategory: "Low" }
    };

    if (targetRisk === "HIGH") {
        // High Risk: Att < 75 (25), Marks < 50 (25), LMS < 3 (20) = 70+
        s.attendance = [65, 62, 59, 58, 55]; // Declining attendance adds +5
        s.marks = [45, 42, 40, 35, 30];     // Declining marks adds +5
        s.lmsLogins = [2, 1, 1, 0, 1];
        s.assignmentDelays = Math.floor(Math.random() * 3) + 3; // >2 delays
        s.behaviorIncidents = Math.floor(Math.random() * 2) + 1; // 1 or 2
        s.competitions = 0;
        s.prevGPA = (Math.random() * 2) + 4; // 4.0 - 6.0
        
        s.financial.feeStatus = Math.random() > 0.5 ? "Pending" : "Paid";
        s.mentalHealth.behavioralStressIndex = 80 + Math.floor(Math.random() * 20);
        s.mentalHealth.stressCategory = "High";

    } else if (targetRisk === "MODERATE") {
        // Moderate: Att ~75-84 (15), Marks ~50-64 (15), LMS ~5-6 (12), some delay (10)
        s.attendance = [85, 82, 80, 78, 76];
        s.marks = [68, 65, 60, 58, 55];
        s.lmsLogins = [5, 4, 6, 5, 4];
        s.assignmentDelays = Math.floor(Math.random() * 2) + 1;
        s.behaviorIncidents = Math.random() > 0.8 ? 1 : 0;
        s.competitions = Math.random() > 0.7 ? 1 : 0;
        s.prevGPA = (Math.random() * 1.5) + 6.5; // 6.5 - 8.0

        s.mentalHealth.behavioralStressIndex = 50 + Math.floor(Math.random() * 20);
        s.mentalHealth.stressCategory = "Moderate";

    } else {
        // SAFE: Att >= 85 (5), Marks >= 75 (3), LMS >= 14 (2)
        s.attendance = [90, 92, 95, 96, 98];
        s.marks = [80, 82, 85, 88, 92];
        s.lmsLogins = [12, 14, 15, 18, 20];
        s.assignmentDelays = 0;
        s.behaviorIncidents = 0;
        s.competitions = Math.floor(Math.random() * 3);
        s.prevGPA = (Math.random() * 1.5) + 8.5; // 8.5 - 10.0
        
        s.mentalHealth.behavioralStressIndex = 20 + Math.floor(Math.random() * 10);
    }

    return s;
}

let students = [];
// Generate exactly 60 Safe (30%), 80 Moderate (40%), 60 High (30%)
for(let i = 1; i <= 60; i++) students.push(genStudent(i, "SAFE"));
for(let i = 61; i <= 140; i++) students.push(genStudent(i, "MODERATE"));
for(let i = 141; i <= 200; i++) students.push(genStudent(i, "HIGH"));

// Shuffle the array so IDs and risks are mixed
for (let i = students.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [students[i], students[j]] = [students[j], students[i]];
}

const arrString = JSON.stringify(students, null, 4);
const generateCode = `const generateStudents = () => {\n    const students = ${arrString};\n\n    return students.map(s => {\n        let risk = calculateRiskScore(s);\n        s.dropoutRiskWindow = calculateDropoutWindow(risk.score);\n        s.riskScore = risk.score;\n        return s;\n    });\n};`;

// Replace the generateStudents function completely
const regex = /const generateStudents = \(\) => \{[\s\S]*?return s;\n    \}\);\n\};/m;
if (appCode.match(regex)) {
    appCode = appCode.replace(regex, generateCode);
    fs.writeFileSync(appPath, appCode, 'utf8');
    console.log("Successfully scaled dataset to 200 students with adjusted risk brackets.");
} else {
    // If exact regex fails, try a substring replacement
    const startIdx = appCode.indexOf("const generateStudents = () => {");
    if (startIdx !== -1) {
        const endStr = "return s;\\n    });\\n};";
        let endIdx = appCode.indexOf("    });\\n};", startIdx);
        if (endIdx !== -1) {
            endIdx += 11;
            appCode = appCode.substring(0, startIdx) + generateCode + appCode.substring(endIdx);
            fs.writeFileSync(appPath, appCode, 'utf8');
            console.log("Successfully scaled dataset using substring slicing!");
        } else {
            console.error("Could not find end of generateStudents.");
        }
    } else {
        console.error("Could not find start of generateStudents.");
    }
}
