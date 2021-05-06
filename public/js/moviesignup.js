movieBtn = document.getElementById("movieBtn");

const signupFormHandler = async (event) => {
    event.preventDefault();

    const genre = document.querySelector('#genreInput').value;
    const favMovie = document.querySelector('#favMovieInput').value.trim();
    const movieQuote = document.querySelector('#quoteInput').value;

    console.log(genre);
    console.log(favMovie);
    console.log(movieQuote);

    if (genre && favMovie && movieQuote) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ genre, favMovie, movieQuote }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            console.log(response);
            document.location.replace('/signupimg')
        }else {
            alert('Failed to sign up');
        }
    }
};

// movieBtn.addEventListener('click', function(){document.location.replace('/dashboard')});

document
    .querySelector('#movieform')
    .addEventListener('submit', signupFormHandler);