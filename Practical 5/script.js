function findMinMax(){

    let input =
        document.getElementById("numbers").value.trim();

    let result =
        document.getElementById("result");


    if(input === ""){

        result.innerHTML = `
            <div class="error">
                ⚠️ Please enter some numbers.
            </div>
        `;

        return;
    }


    // Convert input into an array

    let numbers = input.split(",");


    // Convert each value into Number

    numbers = numbers.map(function(value){

        return Number(value.trim());

    });


    // Check for invalid values

    if(numbers.some(function(value){

        return isNaN(value);

    })){

        result.innerHTML = `
            <div class="error">
                ❌ Please enter only valid numbers.
            </div>
        `;

        return;
    }


    if(numbers.length === 0){

        return;
    }


    // Find Maximum

    let maximum = Math.max(...numbers);


    // Find Minimum

    let minimum = Math.min(...numbers);


    // Display Output

    result.innerHTML = `

        <div class="result-box">

            <div class="value-box">

                <h3>MINIMUM VALUE</h3>

                <p>${minimum}</p>

            </div>


            <div class="value-box">

                <h3>MAXIMUM VALUE</h3>

                <p>${maximum}</p>

            </div>

        </div>

    `;

}
