const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'App.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const targetStr = `    const handleLogin = (loginRole) => {
        const uRole = loginRole.toUpperCase();
        setRole(uRole);
        if (uRole === "ADMIN") setCurrentPage("admin");
        else if (uRole === "FACULTY") setCurrentPage("faculty");
        else if (uRole === "PARENT") setCurrentPage("parent");
        else setCurrentPage("student");
    };`;

const replaceStr = `    const handleLogin = (loginRole) => {
        const uRole = loginRole.toUpperCase();
        setRole(uRole);
        if (uRole === "ADMIN") setCurrentPage("admin");
        else if (uRole === "FACULTY") setCurrentPage("faculty");
        else if (uRole === "PARENT") setCurrentPage("parent");
        else {
            setCurrentPage("student");
            // Find current student or fallback for demo
            const st = students.find(s => s.id === currentStudentId) || students[0];
            setSelectedStudent(st);
        }
    };`;

// Try an exact match or normalized regex
const escapedTarget = targetStr.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\$&').replace(/\\n/g, '\\\\r?\\\\n\\\\s*');
const regex = new RegExp(escapedTarget, 'g');

if (regex.test(content)) {
    content = content.replace(regex, replaceStr);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log("Successfully patched handleLogin!");
} else {
    // Try a simpler match just in case
    const simpleTarget = 'else setCurrentPage("student");\\r?\\n    };';
    const simpleRegex = new RegExp(simpleTarget, 'g');
    if (simpleRegex.test(content)) {
        content = content.replace(simpleRegex, 'else { setCurrentPage("student"); setSelectedStudent(students.find(s => s.id === currentStudentId) || students[0]); }\\n    };');
        fs.writeFileSync(filePath, content, 'utf8');
        console.log("Successfully patched handleLogin (simple match)!");
    } else {
        console.log("Target string not found.");
    }
}
