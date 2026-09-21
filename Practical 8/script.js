// Name Validation (input event)
document.getElementById("name").addEventListener("input", function(){
    let name=this.value;

    if(/^[A-Za-z ]+$/.test(name)){
        document.getElementById("nameError").innerHTML="";
    }else{
        document.getElementById("nameError").innerHTML="Only letters allowed.";
    }
});

// Age Validation (blur event)
document.getElementById("age").addEventListener("blur", function(){
    let age=this.value;

    if(age>=16 && age<=60){
        document.getElementById("ageError").innerHTML="";
    }else{
        document.getElementById("ageError").innerHTML="Age must be between 16 and 60.";
    }
});

// Email Validation (input event)
document.getElementById("email").addEventListener("input", function(){
    let email=this.value;
    let pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(pattern.test(email)){
        document.getElementById("emailError").innerHTML="";
    }else{
        document.getElementById("emailError").innerHTML="Invalid email.";
    }
});

// Mobile Validation (input event)
document.getElementById("mobile").addEventListener("input", function(){
    let mobile=this.value;

    if(/^\d{10}$/.test(mobile)){
        document.getElementById("mobileError").innerHTML="";
    }else{
        document.getElementById("mobileError").innerHTML="Enter 10-digit mobile number.";
    }
});

// Membership Validation (change event)
document.getElementById("plan").addEventListener("change", function(){
    if(this.value==""){
        document.getElementById("planError").innerHTML="Please select a plan.";
    }else{
        document.getElementById("planError").innerHTML="";
    }
});

// Form Submission (submit event)
document.getElementById("gymForm").addEventListener("submit", function(e){

    e.preventDefault();

    if(
        document.getElementById("nameError").innerHTML=="" &&
        document.getElementById("ageError").innerHTML=="" &&
        document.getElementById("emailError").innerHTML=="" &&
        document.getElementById("mobileError").innerHTML=="" &&
        document.getElementById("plan").value!=""
    ){

        document.getElementById("result").innerHTML="Gym Admission Successful!🥳";

    }else{
        document.getElementById("result").innerHTML="";
        alert("Please correct the errors before submitting.");
    }

});