// const userFetcher = async function getAllUsers(event) {
//     event.preventdefault
//     const users=await fetch("/api/users") 
//     console.log(users.body)
//     // document.location.reload()
// }

// const sequelize = require('../../config/connection')
const getBtn = document.getElementById("get-matches") 
const getUsers = () => {
    connection.query('SELECT * FROM user', (err, data)=> {
        if (err) throw err;
        console.table(data)
    })
}
getBtn.addEventListener("click", getUsers)

// document.querySelector("#get-matches").addEventListener("click", userFetcher)
