submitBtn = document.getElementById("submitBtn");

// var moment = require('moment');

// moment().format();

// console.log(moment);


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

    //Age stuff goes here
    //const age = .............
    function getAge(dateString) {
        var today = new Date();
        console.log(today);
        var birthDate = new Date(dateString);
        console.log(birthDate);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    getAge();

    //send age instead of bday below

    if (email && password && name && bday && genderId && genderPref && bio) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ email, password, name, bday, genderId, genderPref, bio }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            console.log(response);
            document.location.replace('/dashboard')
        } else {
            alert('Failed to sign up');
        }
    }
};

submitBtn.addEventListener('click', function () { document.location.replace('/dashboard') });

document
    .querySelector('#signupform')
    .addEventListener('submit', signupFormHandler);