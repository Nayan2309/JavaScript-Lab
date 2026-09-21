document.getElementById("gymForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let eyeColor = document.getElementById("eyeColor").value;
    let ability = document.getElementById("ability").value.trim();

    let sex = document.querySelector('input[name="sex"]:checked');

    let valid = true;

    // Clear previous errors
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("sexError").innerHTML = "";
    document.getElementById("eyeError").innerHTML = "";
    document.getElementById("abilityError").innerHTML = "";

    // Name validation
    if (name === "") {
        document.getElementById("nameError").innerHTML =
            "Name is required";
        valid = false;
    }

    // Sex validation
    if (!sex) {
        document.getElementById("sexError").innerHTML =
            "Please select gender";
        valid = false;
    }

    // Eye color validation
    if (eyeColor === "") {
        document.getElementById("eyeError").innerHTML =
            "Please select eye color";
        valid = false;
    }

    // Athletic ability validation
    if (ability === "") {
        document.getElementById("abilityError").innerHTML =
            "Please describe your athletic ability";
        valid = false;
    }

    if (valid) {

        alert("Gym Registration Successful!");

        document.getElementById("result").innerHTML =
            "Registration completed successfully for " + name;

        document.getElementById("gymForm").reset();
    }

});