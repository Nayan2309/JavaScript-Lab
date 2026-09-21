// Load saved theme when page opens

window.onload = function () {

    let savedTheme = localStorage.getItem("theme");

    let sessionTheme = sessionStorage.getItem("theme");


    // Load theme from localStorage

    if (savedTheme) {

        applyTheme(savedTheme);

        document.getElementById("localStatus").innerHTML =
            "Saved: " + savedTheme;
    }


    // Load theme from sessionStorage

    if (sessionTheme) {

        document.getElementById("sessionStatus").innerHTML =
            "Saved: " + sessionTheme;
    }

};


// Light Theme

function setLightTheme() {

    applyTheme("light");

    localStorage.setItem("theme", "light");

    sessionStorage.setItem("theme", "light");


    document.getElementById("localStatus").innerHTML =
        "Saved: light";

    document.getElementById("sessionStatus").innerHTML =
        "Saved: light";
}


// Dark Theme

function setDarkTheme() {

    applyTheme("dark");

    localStorage.setItem("theme", "dark");

    sessionStorage.setItem("theme", "dark");


    document.getElementById("localStatus").innerHTML =
        "Saved: dark";

    document.getElementById("sessionStatus").innerHTML =
        "Saved: dark";
}


// Apply selected theme

function applyTheme(theme) {

    if (theme === "dark") {

        document.body.classList.add("dark");

        document.getElementById("currentTheme").innerHTML =
            "Dark";

    } else {

        document.body.classList.remove("dark");

        document.getElementById("currentTheme").innerHTML =
            "Light";
    }
}


// Clear Preferences

function clearPreferences() {

    localStorage.removeItem("theme");

    sessionStorage.removeItem("theme");


    applyTheme("light");


    document.getElementById("localStatus").innerHTML =
        "Not Saved";

    document.getElementById("sessionStatus").innerHTML =
        "Not Saved";


    alert("Preferences cleared successfully!");
}