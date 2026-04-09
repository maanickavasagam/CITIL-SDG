const fs = require('fs');

const depts = ["CSE", "IT", "ECE", "EEE", "MECH", "CIVIL"];
const firstNamesM = ["Aryan", "Rohit", "Aditya", "Vikram", "Rahul", "Suresh", "Ramesh", "Kiran", "Saurabh", "Farhan", "Ishaan", "Arjun", "Karan", "Ravi", "Amit"];
const firstNamesF = ["Sneha", "Kavya", "Divya", "Priya", "Neha", "Anjali", "Meera", "Ananya", "Tanvi", "Pooja", "Aarti", "Ritu", "Swati", "Nisha", "Kriti"];
const lastNames = ["Mehta", "Patil", "Nair", "Sharma", "Verma", "Krishnan", "Joshi", "Nambiar", "Tiwari", "Singh", "Qureshi", "Malhotra", "Kulkarni", "Reddy", "Iyer", "Desai", "Rao", "Kumar", "Das", "Bose"];

const students = [];

for (let i = 0; i < 50; i++) {
    const isMale = Math.random() > 0.4;
    const fn = isMale ? firstNamesM[Math.floor(Math.random() * firstNamesM.length)] : firstNamesF[Math.floor(Math.random() * firstNamesF.length)];
    const ln = lastNames[Math.floor(Math.random() * lastNames.length)];
    
    const sem = (i % 8) + 1;
    const dept = depts[i % depts.length];
    
    const r = Math.random();
    let attBase;
    if (r < 0.2) attBase = 55 + Math.random() * 15;
    else if (r < 0.5) attBase = 70 + Math.random() * 14;
    else attBase = 85 + Math.random() * 14;
    
    const attendance = [
        Math.round(attBase + (Math.random()*10 - 5)),
        Math.round(attBase + (Math.random()*10 - 5)),
        Math.round(attBase + (Math.random()*10 - 5)),
        Math.round(attBase + (Math.random()*10 - 5)),
        Math.round(attBase)
    ].map(a => Math.min(100, Math.max(0, a)));
    
    const marksBase = Math.max(30, attBase - (5 + Math.random()*10));
    const marks = [
        Math.round(marksBase + (Math.random()*10 - 5)),
        Math.round(marksBase + (Math.random()*10 - 5)),
        Math.round(marksBase + (Math.random()*10 - 5)),
        Math.round(marksBase + (Math.random()*10 - 5)),
        Math.round(marksBase)
    ].map(m => Math.min(100, Math.max(0, m)));
    
    const lmsBase = Math.floor(attBase / 4.5);
    const lmsLogins = [
        Math.max(0, lmsBase + Math.floor(Math.random()*4 - 2)),
        Math.max(0, lmsBase + Math.floor(Math.random()*4 - 2)),
        Math.max(0, lmsBase + Math.floor(Math.random()*4 - 2)),
        Math.max(0, lmsBase + Math.floor(Math.random()*4 - 2)),
        Math.max(0, lmsBase)
    ];
    
    const assignmentDelays = attBase < 75 ? Math.floor(Math.random()*8) : Math.floor(Math.random()*3);
    const behaviorIncidents = attBase < 65 ? Math.floor(Math.random()*4) : 0;
    const competitions = attBase > 85 ? Math.floor(Math.random()*4) : 0;
    
    students.push({
        id: "S" + String(i + 1).padStart(3, '0'),
        name: fn + " " + ln,
        dept,
        sem,
        attendance,
        marks,
        lmsLogins,
        assignmentDelays,
        behaviorIncidents,
        competitions,
        prevGPA: Number((marksBase / 10).toFixed(1)),
        facultyAdvisor: "Assigned Faculty",
        financial: { 
            feeStatus: Math.random() > 0.8 ? "Pending" : "Paid", 
            vulnerabilityScore: Math.floor(Math.random()*100), 
            scholarshipEligible: Math.random() > 0.7, 
            scholarshipType: Math.random() > 0.5 ? "Need-based" : "Merit" 
        },
        socioEconomic: { 
            parentIncomeBracket: "3L-6L", 
            location: Math.random() > 0.5 ? "Urban" : "Rural", 
            firstGenerationLearner: Math.random() > 0.7, 
            genderRiskFlag: !isMale 
        },
        mentalHealth: { 
            behavioralStressIndex: attBase < 70 ? 70 + Math.floor(Math.random()*30) : 20 + Math.floor(Math.random()*30), 
            counselingRecommended: attBase < 70, 
            stressCategory: attBase < 70 ? "High" : "Low" 
        }
    });
}

const replacementCode = `const generateStudents = () => {
    const students = ${JSON.stringify(students, null, 8).replace(/"([^"]+)":/g, '$1:')};

    return students.map(s => {
        let risk = calculateRiskScore(s);
        s.dropoutRiskWindow = calculateDropoutWindow(risk.score);
        s.riskScore = risk.score;
        return s;
    });
};`;

const appPath = 'src/App.jsx';
let appCode = fs.readFileSync(appPath, 'utf8');

// Replace everything from `const generateStudents = () => {` to the matching `};` 
const startPhrase = "const generateStudents = () => {";
const endPhrase = "};";

const startIndex = appCode.indexOf(startPhrase);
if (startIndex !== -1) {
    // Find the end phrase that corresponds to the end of generateStudents.
    // We can just find the NEXT `const calculateRiskScore` since it's immediately after.
    const calculateRiskScoreIndex = appCode.indexOf('const calculateRiskScore = (');
    if (calculateRiskScoreIndex !== -1) {
        // The space between them is where generateStudents is.
        appCode = appCode.substring(0, startIndex) + replacementCode + '\\n\\n' + appCode.substring(calculateRiskScoreIndex);
        fs.writeFileSync(appPath, appCode);
        console.log("Successfully replaced generateStudents!");
    } else {
        console.log("Could not find calculateRiskScore");
    }
} else {
    console.log("Could not find generateStudents");
}
