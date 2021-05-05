submitBtn = document.getElementById("submitBtn");




const signupFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#emailInput').value.trim();
    const password = document.querySelector('#passwordInput').value.trim();
    const name = document.querySelector('#nameInput').value.trim();
    const bday = document.getElementById('bday').value;
    var genderId = document.getElementById('genderId').value;
    var genderPref = document.getElementById('genderPref').value;
    const bio = document.querySelector('#bioInput').value;

    console.log(email);
    console.log(password);
    console.log(name);
    console.log(bday);
    console.log(genderId);
    console.log(genderPref);
    console.log(bio);
    
    // if (email && password && name) {
    //     const response = await fetch('/api/users', {
    //         method: 'POST',
    //         body: JSON.stringify({ email, password, name }),
    //         headers: { 'Content-Type': 'application/json' },
    //     });
    //     if (response.ok) {
    //         document.location.replace('/dashboard')
    //     }else {
    //         alert('Failed to sign up');
    //     }
    // }
};

submitBtn.addEventListener('click', function(){document.location.replace('/dashboard')});

document
    .querySelector('#signupform')
    .addEventListener('submit', signupFormHandler);