document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");
    const togglePassword = document.getElementById("togglePassword");

    // Exibir ou ocultar senha
    togglePassword.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePassword.classList.remove("fa-eye");
            togglePassword.classList.add("fa-eye-slash");
        } else {
            passwordInput.type = "password";
            togglePassword.classList.remove("fa-eye-slash");
            togglePassword.classList.add("fa-eye");
        }
    });

    // Validação do formulário
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita recarregar a página

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === "" || password === "") {
            errorMessage.textContent = "Preencha todos os campos!";
            return;
        }

        if (username !== "admin" || password !== "1234") {
            errorMessage.textContent = "Usuário ou senha incorretos!";
        } else {
            errorMessage.style.color = "green";
            errorMessage.textContent = "Login bem-sucedido!";
            setTimeout(() => {
                window.location.href = "dashboard.html"; // Simulação de redirecionamento
            }, 1500);
        }
    });
});
