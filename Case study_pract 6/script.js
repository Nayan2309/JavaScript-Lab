function reverseString(){

    let text = document.getElementById("stringInput").value;

    let result = document.getElementById("reverseResult");


    if(text.trim() === ""){

        result.innerHTML = "⚠️ Please enter a string.";

        return;
    }


    let reverse = text.split("").reverse().join("");


    result.innerHTML =
        "Original String: " + text +
        "<br>" +
        "Reversed String: " + reverse;
}



function countVowels(){

    let paragraph =
        document.getElementById("paragraphInput").value;

    let result =
        document.getElementById("vowelResult");


    if(paragraph.trim() === ""){

        result.innerHTML = "⚠️ Please enter a paragraph.";

        return;
    }


    let vowels = "aeiouAEIOU";

    let count = 0;


    for(let char of paragraph){

        if(vowels.includes(char)){

            count++;

        }

    }


    result.innerHTML =
        "Total Number of Vowels: " + count;
}