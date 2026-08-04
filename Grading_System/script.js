function calculateGrade(event) {
    event.preventDefault(); 
    
    const nameInput = document.getElementById('studentName').value.trim();
    const scoreInput = document.getElementById('score').value;
    const score = parseFloat(scoreInput);
    const resultElement = document.getElementById('result');
    
    // फॉर्म वैलिडेशन
    if (nameInput === "") {
        resultElement.innerHTML = "<strong>Error:</strong> Student Name cannot be empty.";
        resultElement.className = "error";
        return; 
    }

    if (scoreInput.trim() === "") {
        resultElement.innerHTML = "<strong>Error:</strong> Score field cannot be empty.";
        resultElement.className = "error";
        return; 
    }
    
    if (isNaN(score) || score < 0 || score > 100) {
        resultElement.innerHTML = "<strong>Error:</strong> Please enter valid marks between 0 and 100.";
        resultElement.className = "error";
        return;
    }
    
    // ग्रेडिंग लॉजिक
    let grade;
    let status = "Passed";
    
    if (score >= 90) { grade = 'A'; } 
    else if (score >= 80) { grade = 'B'; } 
    else if (score >= 70) { grade = 'C'; } 
    else if (score >= 60) { grade = 'D'; } 
    else { grade = 'F'; status = "Failed"; }
    
    // नाम, मार्क्स और बड़े हाइलाइटेड ग्रेड के साथ आउटपुट
    resultElement.innerHTML = `
        <div class="res-row"><strong>Student:</strong> ${nameInput}</div>
        <div class="res-row"><strong>Score:</strong> ${score}%</div>
        <div class="grade-badge">Grade: ${grade} (${status})</div>
    `;
    
    resultElement.className = status.toLowerCase(); 
}