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

// const sequelize = require('../../config/connection')
// const getBtn = document.getElementById("get-matches") 
// const getUsers = () => {
//     connection.query('SELECT * FROM user', (err, data)=> {
//         if (err) throw err;
//         console.table(data)
//     })
// }
// getBtn.addEventListener("click", getUsers)

document.querySelector("#get-matches").addEventListener("click", userFetcher)
