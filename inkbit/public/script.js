// ============================
// Login Form Handling
// ============================

// Grab the login form and error message container
const loginForm = document.getElementById('login-form'); // match your HTML id
let errorMessage = document.getElementById('errorMessage');

// If errorMessage container doesn't exist, create it dynamically
if (!errorMessage) {
    errorMessage = document.createElement('div');
    errorMessage.id = 'errorMessage';
    errorMessage.style.color = 'red';
    errorMessage.style.marginTop = '10px';
    loginForm.appendChild(errorMessage);
}

// Listen for form submission
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // prevent default form behavior

    // Get user input
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Basic validation
    if (!username || !password) {
        errorMessage.textContent = 'Please enter both username and password.';
        return;
    }

    try {
        // Make POST request to your backend (replace URL if needed)
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
            alert('Login successful!');
            errorMessage.textContent = '';
            // Redirect to another page (optional)
            // window.location.href = '/dashboard.html';
        } else {
            errorMessage.textContent = data.error || 'Login failed. Please try again.';
        }

    } catch (err) {
        console.error('Error:', err);
        errorMessage.textContent = 'An unexpected error occurred. Please try again later.';
    }
});
