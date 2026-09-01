// Access form
let form = document.getElementById("registrationForm");


// Access form elements
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let birthday = document.getElementById("birthday");
let username = document.getElementById("username");
let emailid = document.getElementById("emailid");
let website = document.getElementById("website");
let password = document.getElementById("password");
let repassword = document.getElementById("repassword");
let agree = document.getElementById("agree");


// =============================
// FOCUS EVENT
// =============================

firstname.addEventListener("focus", function () {

    firstname.style.backgroundColor = "#eef2ff";

});


// =============================
// BLUR EVENT
// =============================

firstname.addEventListener("blur", function () {

    firstname.style.backgroundColor = "#f9fafb";

});


// =============================
// CHANGE EVENT
// =============================

// Username automatically changes to lowercase

username.addEventListener("change", function () {

    username.value = username.value.toLowerCase();

});


// Birthday change event

birthday.addEventListener("change", function () {

    console.log("Birthday changed:", birthday.value);

});


// =============================
// SUBMIT EVENT
// =============================

form.addEventListener("submit", function (event) {

    // Stop form from submitting
    event.preventDefault();


    let valid = true;


    // Clear previous error messages

    document.querySelectorAll(".error").forEach(function (error) {

        error.innerHTML = "";

    });


    document.getElementById("message").innerHTML = "";


    // =============================
    // FIRST NAME VALIDATION
    // =============================

    if (firstname.value.trim() === "") {

        document.getElementById("firstnameError").innerHTML =
            "First name is required";

        valid = false;
    }


    // =============================
    // LAST NAME VALIDATION
    // =============================

    if (lastname.value.trim() === "") {

        document.getElementById("lastnameError").innerHTML =
            "Last name is required";

        valid = false;
    }


    // =============================
    // BIRTHDAY VALIDATION
    // =============================

    if (birthday.value === "") {

        document.getElementById("birthdayError").innerHTML =
            "Birthday is required";

        valid = false;
    }


    // =============================
    // USERNAME VALIDATION
    // =============================

    if (username.value.trim() === "") {

        document.getElementById("usernameError").innerHTML =
            "Username is required";

        valid = false;
    }


    // =============================
    // EMAIL VALIDATION
    // =============================

    let emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (emailid.value.trim() === "") {

        document.getElementById("emailError").innerHTML =
            "Email is required";

        valid = false;

    }

    else if (!emailPattern.test(emailid.value.trim())) {

        document.getElementById("emailError").innerHTML =
            "Enter a valid email address";

        valid = false;
    }


    // =============================
    // WEBSITE VALIDATION
    // =============================

    let websitePattern =
        /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/;


    if (website.value.trim() === "") {

        document.getElementById("websiteError").innerHTML =
            "Website is required";

        valid = false;

    }

    else if (!websitePattern.test(website.value.trim())) {

        document.getElementById("websiteError").innerHTML =
            "Enter a valid website";

        valid = false;
    }


    // =============================
    // PASSWORD VALIDATION
    // =============================

    if (password.value === "") {

        document.getElementById("passwordError").innerHTML =
            "Password is required";

        valid = false;

    }

    else if (password.value.length < 6) {

        document.getElementById("passwordError").innerHTML =
            "Password must contain at least 6 characters";

        valid = false;
    }


    // =============================
    // RE-PASSWORD VALIDATION
    // =============================

    if (repassword.value === "") {

        document.getElementById("repasswordError").innerHTML =
            "Please re-enter password";

        valid = false;

    }

    else if (password.value !== repassword.value) {

        document.getElementById("repasswordError").innerHTML =
            "Passwords do not match";

        valid = false;
    }


    // =============================
    // TERMS & CONDITIONS
    // =============================

    if (!agree.checked) {

        document.getElementById("agreeError").innerHTML =
            "Please agree to the terms and conditions";

        valid = false;
    }


    // =============================
    // FINAL RESULT
    // =============================

    if (valid) {

        document.getElementById("message").innerHTML =
            "Registration Successful!";

        document.getElementById("message").style.color = "green";


        // Reset form
        form.reset();

    }

});