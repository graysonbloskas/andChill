const userFetcher = async (event) => {
    event.preventDefault();
    let currentUserPref;
    let currentUserGenre;
    let currentUsersMatches;
    await fetch("/api/users/1").then(data => data.json()).then(x => {
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

  const update = async () => {
      document.location.replace('/updateprofile')
  }

  document.querySelector('#update').addEventListener('click', update);


  const test = async () => {
      console.log("Clicky click")
  }
  
  document.querySelector('#updateBtn').addEventListener('click', test);