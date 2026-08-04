function checkPalindrome(){

    let text=document.getElementById("text").value.trim();

    let result=document.getElementById("result");

    if(text==""){

        result.style.display="block";
        result.className="fail";
        result.innerHTML="⚠ Please enter a word or number.";

        return;
    }

    let original=text.toLowerCase().replace(/\s+/g,'');

    let reverse=original.split('').reverse().join('');

    result.style.display="block";

    if(original===reverse){

        result.className="success";
        result.innerHTML="✅ It is a Palindrome.";

    }

    else{

        result.className="fail";
        result.innerHTML="❌ It is NOT a Palindrome.";

    }

}