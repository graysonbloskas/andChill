const userFetcher = async (event) => {
    event.preventDefault();
    const users=await fetch("/api/users/users") 
    console.log(users)
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
