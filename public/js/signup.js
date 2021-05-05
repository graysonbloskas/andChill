submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener('click', function(){document.location.replace('/dashboard')});

const signupFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#emailInput').value.trim();
    const password = document.querySelector('#passwordInput').value.trim();
    const name = document.querySelector('#nameInput').value.trim();
    
    if (email && password && name) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ email, password, name }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/dashboard')
        }else {
            alert('Failed to sign up');
        }
    }
};

document
    .querySelector('#signupform')
    .addEventListener('submit', signupFormHandler);