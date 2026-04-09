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

    // Make sure we distribute evenly across year 1-4 (sem 1-8).
    const sem = (i % 8) + 1;
    const dept = depts[i % depts.length];

    // Vary attendance: 20% high risk (low att), 30% moderate, 50% safe
    const r = Math.random();
    let attBase;
    if (r < 0.2) attBase = 55 + Math.random() * 15; // 55-70
    else if (r < 0.5) attBase = 70 + Math.random() * 14; // 70-84
    else attBase = 85 + Math.random() * 14; // 85-99

    const attendance = [
        Math.round(attBase + (Math.random() * 10 - 5)),
        Math.round(attBase + (Math.random() * 10 - 5)),
        Math.round(attBase + (Math.random() * 10 - 5)),
        Math.round(attBase + (Math.random() * 10 - 5)),
        Math.round(attBase)
    ].map(a => Math.min(100, Math.max(0, a)));

    const marksBase = Math.max(30, attBase - (5 + Math.random() * 10));
    const marks = [
        Math.round(marksBase + (Math.random() * 10 - 5)),
        Math.round(marksBase + (Math.random() * 10 - 5)),
        Math.round(marksBase + (Math.random() * 10 - 5)),
        Math.round(marksBase + (Math.random() * 10 - 5)),
        Math.round(marksBase)
    ].map(m => Math.min(100, Math.max(0, m)));

    const lmsBase = Math.floor(attBase / 4.5);
    const lmsLogins = [
        Math.max(0, lmsBase + Math.floor(Math.random() * 4 - 2)),
        Math.max(0, lmsBase + Math.floor(Math.random() * 4 - 2)),
        Math.max(0, lmsBase + Math.floor(Math.random() * 4 - 2)),
        Math.max(0, lmsBase + Math.floor(Math.random() * 4 - 2)),
        Math.max(0, lmsBase)
    ];

    const assignmentDelays = attBase < 75 ? Math.floor(Math.random() * 8) : Math.floor(Math.random() * 3);
    const behaviorIncidents = attBase < 65 ? Math.floor(Math.random() * 4) : 0;
    const competitions = attBase > 85 ? Math.floor(Math.random() * 4) : 0;

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
            vulnerabilityScore: Math.floor(Math.random() * 100),
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
            behavioralStressIndex: attBase < 70 ? 70 + Math.floor(Math.random() * 30) : 20 + Math.floor(Math.random() * 30),
            counselingRecommended: attBase < 70,
            stressCategory: attBase < 70 ? "High" : "Low"
        }
    });
}

const content = `const generateStudents = () => {
    const students = ${JSON.stringify(students, null, 8).replace(/"([^"]+)":/g, '$1:')};

    return students.map(s => {
        let risk = calculateRiskScore(s);
        s.dropoutRiskWindow = calculateDropoutWindow(risk.score);
        s.riskScore = risk.score;
        return s;
    });
};`;

fs.writeFileSync('generated_array.js', content);
