// Loading Animation

document.addEventListener("DOMContentLoaded", function () {
    // Your animation and authorization key processing logic goes here

    // For example, let's add a delay and then fade out the animation container
    setTimeout(function () {
        var animationContainer = document.getElementById("animation-container");
        var mainContent = document.getElementById("main-content");

        // Fade out the animation container
        animationContainer.style.opacity = 0;

        // Disable the animation container
        animationContainer.style.pointerEvents = "none";

        // Fade in the main content
        mainContent.style.opacity = 1;
    }, 5000); // Adjust the delay (in milliseconds) as needed
});

document.addEventListener("DOMContentLoaded", function () {
    // Animation and authorization key processing logic

    // For example, let's add a delay and then fade out the animation container
    setTimeout(function () {
        var animationContainer = document.getElementById("animation-container");
        var mainContent = document.getElementById("main-content");

        // Fade out the animation container
        animationContainer.style.opacity = 0;

        // Disable the animation container
        animationContainer.style.pointerEvents = "none";

        // Fade in the main content
        mainContent.style.opacity = 1;
    }, 5000); // Adjust the delay (in milliseconds) as needed

    // Update the placeholder while typing in the input
    var authInput = document.getElementById("auth-input");
    var password = "                                ";

    function revealPassword(index) {
        authInput.placeholder = "•".repeat(index) + password.substring(index);

        if (index < password.length) {
            setTimeout(function () {
                revealPassword(index + 1);
            }, 100); // Adjust the delay (in milliseconds) as needed
        }
    }

    revealPassword(0);
});

// Function to open an info box
function openInfoBox(infoBoxId) {
    var infoBox = document.getElementById(infoBoxId);
    if (infoBox) {
        infoBox.style.display = "block";
    }
}

// Function to close an info box
function closeInfoBox(infoBoxId) {
    var infoBox = document.getElementById(infoBoxId);
    if (infoBox) {
        infoBox.style.display = "none";
    }
}
