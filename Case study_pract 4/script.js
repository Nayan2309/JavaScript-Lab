function validateRegistration() {

    let regNo = document.getElementById("regNo").value.trim().toUpperCase();
    let result = document.getElementById("result");

    let rule1 = document.getElementById("rule1");
    let rule2 = document.getElementById("rule2");
    let rule3 = document.getElementById("rule3");
    let rule4 = document.getElementById("rule4");
    let rule5 = document.getElementById("rule5");

    try {

        if (regNo === "") {
            throw "Registration number should not be empty.";
        }

        // Rule 1
        let check1 = regNo.length === 10;

        // Rule 2
        let check2 = /^[A-Z]{2}/.test(regNo);

        // Rule 3
        let check3 = /^[A-Z]{2}[0-9]{2}/.test(regNo);

        // Rule 4
        let check4 = /^[A-Z]{2}[0-9]{2}[A-Z]{2}/.test(regNo);

        // Rule 5
        let check5 = /^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/.test(regNo);


        // Update rules on screen

        updateRule(rule1, check1, "Exactly 10 characters");

        updateRule(rule2, check2, "First 2 characters must be uppercase letters");

        updateRule(rule3, check3, "Next 2 characters must be digits");

        updateRule(rule4, check4, "Next 2 characters must be uppercase letters");

        updateRule(rule5, check5, "Last 4 characters must be digits");


        // Final validation

        if (check1 && check2 && check3 && check4 && check5) {

            result.className = "valid";

            result.innerHTML =
                "✅ Vehicle Registration Number is VALID";

        } else {

            result.className = "invalid";

            result.innerHTML =
                "❌ Vehicle Registration Number is INVALID";

        }

    }

    catch (error) {

        result.className = "invalid";

        result.innerHTML = "❌ " + error;

    }

}


function updateRule(element, condition, text) {

    element.classList.remove("rule-pass");
    element.classList.remove("rule-fail");

    if (condition) {

        element.classList.add("rule-pass");

        element.innerHTML = "✔ " + text;

    } else {

        element.classList.add("rule-fail");

        element.innerHTML = "✖ " + text;

    }

}