 


var signUpForm = document.getElementById("signupform");
var movieForm = document.getElementById("movieform");
var nextBtn = document.getElementById("");

let _data;



let email, password, _name, bday, genderId, genderPref, bio, genre, fav_movie, movie_quote;

function displayForm(data) {
    email = document.querySelector('#emailInput').value.trim();
    password = document.querySelector('#passwordInput').value.trim();
    _name = document.querySelector('#nameInput').value.trim();
    bday = document.getElementById('bday').value.trim();
    genderId = document.getElementById('genderId').value;
    genderPref = document.getElementById('genderPref').value;
    bio = document.querySelector('#bioInput').value;

    signUpForm.setAttribute('class', "hide");
    movieForm.removeAttribute('class', "hide");
    signUpForm.innerHTML = "";

    setDropdown(data);
};


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
    console.log("It's fine.  This is fine.")

    if (email && password && _name && age && genderId && genderPref && bio && genre && fav_movie && movie_quote) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ email, password, _name, age, genderId, genderPref, bio, genre, fav_movie, movie_quote }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log("For the love of everything help us")
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to sign up');
        }
    }
};

var autofillTargets = function(e) {
    e.preventDefault();
    fetch('/api/autocomplete')
  .then(function (response) {
    return response.json();

  })
  .then(function (data) {
    if (data) {
        displayForm(data);
    }
  
    
  });
};




function setDropdown(data) {
    if(data){
      _data = data && data.movies.map(x => x.title);
      new autoComplete({
        selector: "#favMovieInput",
        placeHolder: "Search for Movies!",
        data: {
            src: _data
        },
        resultsList: {
            noResults: (list, query) => {
                // Create "No Results" message list element
                const message = document.createElement("li");
                message.setAttribute("class", "no_result");
                // Add message text content
                message.innerHTML = `<span>Found No Results for "${query}"</span>`;
                // Add message list element to the list
                list.appendChild(message);
            },
        },
        resultItem: {
            element: "li",
            className: "autoComplete_result",
            content: (data, element) => {
                element.setAttribute("data-parent", "food-item");
            },
            highlight: {
                render: true,
                className: "autoComplete_highlighted"
            },
            selected: {
                className: "autoComplete_selected"
            }
        },
        onSelection: (feedback) => {
            const input = document.getElementById('favMovieInput');
            input.value = feedback.selection.value;
        },
    });
  }
}
