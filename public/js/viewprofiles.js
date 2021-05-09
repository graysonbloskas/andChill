// window.onload = function() {
//     userFetch();
//   };
let currentUserPref;
let currentUserGenre;
 let currentUsersMatches;
    
const userFetch = async (userId) => {   
   await fetch(`/api/users/${userId}`).then(data => data.json()).then(x => {
        currentUserPref = x.user.gender_pref;
        currentUserGenre = x.user.genre;
    });
    await fetch(`/api/users/${currentUserPref}/${currentUserGenre}`).then(data => data.json()).then(x => {
        currentUsersMatches = x.data;
    });
    return currentUsersMatches;

    

    // const filterdData = await fetch('api/users/')
    // document.location.reload()
}

// if (currentUsersMatches) {
//     console.log('we are hitting')
//     document.location.replace('/profiles');
// } else {
//     alert('Failed to get matches');
// }