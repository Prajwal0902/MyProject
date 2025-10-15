document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    
    // Simple validation
    if(username === '' || password === '') {
        message.textContent = 'Please fill in all fields';
        message.style.color = 'red';
        return;
    }
    
    // Simple authentication (for demo purposes only)
    if(username === 'admin' && password === 'password') {
        message.textContent = 'Login successful!';
        message.style.color = 'green';
        
        // In a real application, you would redirect to another page
        // window.location.href = 'dashboard.html';
    } else {
        message.textContent = 'Invalid username or password';
        message.style.color = 'red';
    }
});
