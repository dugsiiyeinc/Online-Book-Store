     const loginForm = document.querySelector(".login-form");
     loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // email and password
        const email = loginForm.querySelector("input[placeholder='Email']").value.trim();
        const password = loginForm.querySelector("input[placeholder='Password']").value;
        const users = JSON.parse(localStorage.getItem('users')) || [];

        const user = users.find((usr) => usr.email === email && usr.password === password);
        if (!user) {
             
             Swal.fire({
                title: "Error!",
                text: "Invalid credentials!",
                icon: "error",
                confirmButtonText: "Try again"
              });
                return;
        }
          localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = '/index.html';



     });

