     const loginForm = document.querySelector(".login-form");
     loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // email and password
        const email = loginForm.querySelector("input[placeholder='Email']").value.trim();
        const password = loginForm.querySelector("input[placeholder='Password']").value;
     });

