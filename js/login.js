document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === 'Admin' && password === 'admin123') {
            window.location.href = 'menu.html';
        } else {
            alert('Nome de usuário ou senha incorretos.');
        }
    });
});
   