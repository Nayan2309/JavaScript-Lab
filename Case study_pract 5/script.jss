document.getElementById("findBtn").addEventListener("click", function(){

    let input = document.getElementById("numbers").value.trim();

    let result = document.getElementById("result");

    let arrayDisplay = document.getElementById("arrayDisplay");


    // Empty input

    if(input === ""){

        result.style.display = "grid";

        result.innerHTML = `
            <div class="result-card error">
                ⚠️ Please enter some numbers first.
            </div>
        `;

        arrayDisplay.innerHTML = "";

        return;
    }


    // Convert input into array

    let numbers = input.split(",").map(function(value){

        return Number(value.trim());

    });


    // Check invalid input

    if(numbers.some(function(value){

        return isNaN(value);

    })){

        result.style.display = "grid";

        result.innerHTML = `
            <div class="result-card error">
                ❌ Please enter valid numbers separated by commas.
            </div>
        `;

        arrayDisplay.innerHTML = "";

        return;
    }


    // Find maximum and minimum

    let maximum = Math.max(...numbers);

    let minimum = Math.min(...numbers);


    // Display result

    result.style.display = "grid";

    result.innerHTML = `

        <div class="result-card">

            <span>⬆️ Maximum Value</span>

            <strong>${maximum}</strong>

        </div>


        <div class="result-card">

            <span>⬇️ Minimum Value</span>

            <strong>${minimum}</strong>

        </div>

    `;


    // Display entered array

    arrayDisplay.innerHTML = `

        <span class="array-title">Your Array:</span>

        [${numbers.join(", ")}]

    `;

});