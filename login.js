document.addEventListener("DOMContentLoaded", () => {
    const emailId = document.getElementById("emailId");
    const password = document.getElementById("password");
    const errorMessage = document.getElementById("errorMessage");
    const loginButton = document.getElementById("logIn");

    loginButton.addEventListener("click", (event) => {
        event.preventDefault();
        errorMessage.textContent = "";

        const email = emailId.value.trim();
        const passwd = password.value.trim();

        if (!email || !passwd) {
            errorMessage.textContent = "Incomplete credentials.";
            return;
        }

        // Simulating a JWT token
        const fakeToken = btoa(JSON.stringify({ email, exp: Date.now() + 3600000 }));

        localStorage.setItem("jwt", fakeToken);
        window.location.href = "/dashboard.html"; 
    });
});
