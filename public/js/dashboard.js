const userFetcher = async (event) => {
    event.preventDefault();
    const users=await fetch("/api/users/users");
    console.log(users);
    // document.location.reload()
}

document.querySelector("#get-matches").addEventListener("click", userFetcher)


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