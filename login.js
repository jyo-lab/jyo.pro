document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".login-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    form.addEventListener("submit", function (event) {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
            alert("Please fill in all fields.");
            event.preventDefault();
            return;
        }

        const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
            return;
        }
    });

    // Add a visual effect to the button on click
    const button = document.querySelector(".cta-button");
    button.addEventListener("mousedown", () => {
        button.style.transform = "scale(0.98)";
    });
    button.addEventListener("mouseup", () => {
        button.style.transform = "scale(1)";
    });
});
