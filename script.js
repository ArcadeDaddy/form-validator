function validateForm(event) {
    event.preventDefault(); // Prevents the default form submission

    // Get form elements
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Reset error message
    document.getElementById('errorText').innerText = '';

    // Validation criteria
    if (fullName.length < 5) {
        showError('Full name must be at least 5 characters.');
        return;
    }

    if (!email.includes('@')) {
        showError('Enter a valid email address.');
        return;
    }

    if (phoneNumber.length !== 10 || phoneNumber === '123456789') {
        showError('Enter a valid 10-digit phone number.');
        return;
    }

    if (password.length < 8 || password === 'password' || password === fullName) {
        showError('Password must be at least 8 characters and not be a common choice.');
        return;
    }

    if (password !== confirmPassword) {
        showError('Passwords do not match.');
        return;
    }

    // If all validations pass, you can submit the form or perform further actions
    alert('Registration successful!');
}

function showError(message) {
    document.getElementById('errorText').innerText = message;
}
