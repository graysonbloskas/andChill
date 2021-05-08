const userFetcher = async (event, userId) => {
  console.log(userId);
    event.preventDefault();
    let currentUserPref;
    let currentUserGenre;
    let currentUsersMatches;
    await fetch(`/api/users/${userId}`).then(data => data.json()).then(x => {
        currentUserPref = x.user.gender_pref;
        currentUserGenre = x.user.genre;
    });
    await fetch(`/api/users/${currentUserPref}/${currentUserGenre}`).then(data => data.json()).then(x => {
       currentUsersMatches = x.data;
    });
    console.log(currentUsersMatches);
    
    // const filterdData = await fetch('api/users/')
    // document.location.reload()
}

// document.querySelector("#get-matches").addEventListener("click", userFetcher)

//logout route
const logout = async () => {
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
  
  document.querySelector('#logout').addEventListener('click', logout);

  //going to the update page
  const update = async () => {
      document.location.replace('/updateprofile')
  }

  document.querySelector('#update').addEventListener('click', update);

//this is our update route
  const test = async () => {
      console.log("Clicky click")
      const response = await fetch('/api/users/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
      });
    
      if (response.ok) {
        console.log("Congratulations, you did it!")
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update bio.');
      }
  }
  
  document.querySelector('#updateBtn').addEventListener('click', test);