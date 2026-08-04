const submitBtn = document.querySelector('.btn');
const passwordInput = document.getElementById('password');
const requirementsList = document.querySelector('.requirements');

const lengthReq = document.getElementById('length');
const capitalReq = document.getElementById('capital');
const smallReq = document.getElementById('small');
const numberReq = document.getElementById('number');
const specialReq = document.getElementById('special');

submitBtn.addEventListener('click', (e) => {
    // Form reload रोकने के लिए
    e.preventDefault(); 
    
    const value = passwordInput.value;

    // लिस्ट को स्क्रीन पर दिखाएं
    requirementsList.classList.add('show');

    // 1. Length Check
    if (value.length >= 8) {
        lengthReq.className = 'valid';
    } else {
        lengthReq.className = 'invalid';
    }

    // 2. Capital Letter Check
    if (/[A-Z]/.test(value)) {
        capitalReq.className = 'valid';
    } else {
        capitalReq.className = 'invalid';
    }

    // 3. Small Letter Check
    if (/[a-z]/.test(value)) {
        smallReq.className = 'valid';
    } else {
        smallReq.className = 'invalid';
    }

    // 4. Number Check
    if (/[0-9]/.test(value)) {
        numberReq.className = 'valid';
    } else {
        numberReq.className = 'invalid';
    }

    // 5. Special Character Check
    if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
        specialReq.className = 'valid';
    } else {
        specialReq.className = 'invalid';
    }
});