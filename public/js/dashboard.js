

const userFetcher = async (event, userId) => {
    event.preventDefault();
    let currentUserPref;
    let currentUserGenre; 
       await fetch(`/api/users/${userId}`).then(data => data.json()).then(x => {
            currentUserPref = x.user.gender_pref;
            currentUserGenre = x.user.genre;
        });
        await fetch(`/api/users/${currentUserPref}/${currentUserGenre}`).then(data => data.json()).then(x => {
           if(!!x) {
            return document.location.replace('/profiles');
           }
           return;
        });
 

}


//logout route
const logout = async () => {
    console.log("Leaving now")
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to log out.');
    }
};


//going to the update page
const update = async (userId) => {
    await fetch(`/api/users/${userId}`).then(data => data.json()).then(x => {
        if(!!x) {
            document.location.replace('/updateprofile');
        }
    });
}


//this is our update route
const updateUserBio = async (e) => {
    console.log("Clicky click");
    e.preventDefault();
    const userBio = document.getElementById('bioInput').value;
    const response = await fetch('/api/users/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            bio: userBio || ''
        })
    });

    if (response.ok) {
        console.log("Congratulations, you did it!")
        document.location.replace('/dashboard');
    } else {
        alert('Failed to update bio.');
    }
}


//Going to the delete page
const settings = async (e) => {
    e.preventDefault();
    console.log("Pull the lever, kronk")
    document.location.replace('/settings');
}


//Delete route
const byeForNow = async () => {
    console.log("Come with me, and you'll be in a world of OSHA violations")
    const byeResponse = await fetch('/api/users/bye', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });
    if (byeResponse.ok) {
        console.log("We're Sgt. Pepper's Lonely Heart's Club Band, we're sorry but it's time to go");
        //TERMINATE THE SESSION HERE
        document.location.replace('/');
    } else {
        alert('You can check out any time you like, but you can never leave');
    }
}

const main = async (e) => {
    e.preventDefault();
    console.log("Rattle your jewelry")
    document.location.replace('/dashboard')
}
