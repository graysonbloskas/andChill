// submitBtn = document.getElementById("submitBtn");
var signUpForm = document.getElementById("signupform");
var movieForm = document.getElementById("movieform");
var nextBtn = document.getElementById("nextBtn");

let email, password, name, bday, genderId, genderPref, bio, genre, fav_movie, movie_quote;

function displayForm() {
    event.preventDefault();

    email = document.querySelector('#emailInput').value.trim();
    password = document.querySelector('#passwordInput').value.trim();
    name = document.querySelector('#nameInput').value.trim();
    bday = document.getElementById('bday').value.trim();
    genderId = document.getElementById('genderId').value;
    genderPref = document.getElementById('genderPref').value;
    bio = document.querySelector('#bioInput').value;

    signUpForm.setAttribute('class', "hide");
    movieForm.removeAttribute('class', "hide");
    signUpForm.innerHTML = "";
};

nextBtn.addEventListener("click", displayForm);

const signupFormHandler = async (event) => {
    event.preventDefault();
    
    genre = document.querySelector('#genreInput').value;
    fav_movie = document.querySelector('#favMovieInput').value;
    movie_quote = document.querySelector('#quoteInput').value;

    //Console log EVERYTHING
    // console.log(email);
    // console.log(password);
    // console.log(name);
    // console.log(bday);
    // console.log(genderId);
    // console.log(genderPref);
    // console.log(bio);

    //The String is the Birthday input above
    var str = bday;
    //Take that string, and remove the dashes from it
    var newBday = str.replace(/-/g, "");

    //Console log that (THIS WORKS)
    // console.log(newBday);


    //dob = the newBday from above
    var dob = newBday;
    //The year is the first FOUR digits of newBday
    var year = Number(dob.substr(0, 4));
    // console.log(year);
    //The month is the 2 digits starting at the 4th position
    var month = Number(dob.substr(4, 2));
    // console.log(month);
    //The date is the 2 digits starting at the 6th position
    var day = Number(dob.substr(6, 2));
    // console.log(day);
    //Get today's date
    var today = new Date();
    //The age will be today's year minus the year that we are defining from the above refactor
    var age = today.getFullYear() - year;
    //If today's month is less than the month from newBday OR the month is equal to the newBday month and today's date is less than the date from newBday THEN DECREMENT THE AGE
    if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
        age--;
        // console.log(age);
        // return age;
    }

    console.log(age);

    if (email && password && name && age && genderId && genderPref && bio && genre && fav_movie && movie_quote) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ email, password, name, age, genderId, genderPref, bio, genre, fav_movie, movie_quote }),
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

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);

    // submitBtn.addEventListener('click', function () { document.location.replace('/dashboard') });