function validateForm() {
    let isValid = true;

    // Get values from the input fields
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const address = document.getElementById('address').value;

    // Clear previous error messages
    clearErrors();

    // Validate First Name
    if (firstName === "") {
        showError('firstNameError', 'First name is required.');
        isValid = false;
    }

    // Validate Last Name
    if (lastName === "") {
        showError('lastNameError', 'Last name is required.');
        isValid = false;
    }

    // Validate Password
    if (password === "") {
        showError('passwordError', 'Password is required.');
        isValid = false;
    } else if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters long.');
        isValid = false;
    }

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "") {
        showError('emailError', 'Email is required.');
        isValid = false;
    } else if (!emailPattern.test(email)) {
        showError('emailError', 'Please enter a valid email address.');
        isValid = false;
    }

    // Validate Mobile Number
    const mobilePattern = /^[0-9]{10}$/;
    if (mobile === "") {
        showError('mobileError', 'Mobile number is required.');
        isValid = false;
    } else if (!mobilePattern.test(mobile)) {
        showError('mobileError', 'Please enter a valid 10-digit mobile number.');
        isValid = false;
    }

    // Validate Address
    if (address === "") {
        showError('addressError', 'Address is required.');
        isValid = false;
    }

    return isValid;
}

function showError(elementId, message) {
    document.getElementById(elementId).innerText = message;
}

function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.innerText = '');
}
