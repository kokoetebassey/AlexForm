document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('remember-me').checked;

    const response = await fetch('https://yourserver.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, rememberMe })
    });

    if (response.ok) {
        alert('Login successful');
        document.getElementById('login-form').reset();
    } else {
        alert('Login failed');
    }
});
