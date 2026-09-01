function analyzeText(){

    let text = document.getElementById("textInput").value.trim();

    let result = document.getElementById("result");


    if(text === ""){

        result.innerHTML = `
            <div class="result-box">

                <span class="invalid">
                    ⚠️ Please enter some text.
                </span>

            </div>
        `;

        return;
    }


    // =========================
    // STRING METHODS
    // =========================

    let length = text.length;

    let upper = text.toUpperCase();

    let lower = text.toLowerCase();

    let words = text.split(/\s+/);

    let wordCount = words.length;


    // =========================
    // EMAIL REGULAR EXPRESSION
    // =========================

    let emailRegex =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    // =========================
    // EXTRACT EMAILS
    // =========================

    let emails = text.match(
        /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g
    );


    // =========================
    // EXTRACT NUMBERS
    // =========================

    let numbers = text.match(/\d+/g);


    // =========================
    // EMAIL VALIDATION
    // =========================

    let emailValid = false;

    if(emails !== null){

        for(let email of emails){

            if(emailRegex.test(email)){

                emailValid = true;

                break;

            }

        }

    }


    // =========================
    // NO EMAIL FOUND
    // =========================

    if(emails === null){

        emails = ["No email found"];

    }


    // =========================
    // NO NUMBERS FOUND
    // =========================

    if(numbers === null){

        numbers = ["No numbers found"];

    }


    // =========================
    // DISPLAY RESULT
    // =========================

    result.innerHTML = `

        <div class="result-box">

            <h3>📊 Text Analysis Result</h3>

            <b>Text Length:</b>
            ${length}

            <br>

            <b>Word Count:</b>
            ${wordCount}

            <br>

            <b>Uppercase:</b>
            ${upper}

            <br>

            <b>Lowercase:</b>
            ${lower}

            <br>

            <b>Extracted Email:</b>
            ${emails.join(", ")}

            <br>

            <b>Extracted Numbers:</b>
            ${numbers.join(", ")}

            <br>

            <b>Email Validation:</b>

            <span class="${emailValid ? 'valid' : 'invalid'}">

                ${emailValid
                    ? "✅ Valid Email"
                    : "❌ Invalid Email"}

            </span>

        </div>

    `;

}