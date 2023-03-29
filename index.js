// // Add your code here

function submitData(name, email) {
    let form = {
      name: name,
      email: email
    };
  
    let post = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(form)
    };
  
    return fetch('http://localhost:3000/users', post)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        document.querySelector('#info').innerHTML = `<p>{data.name}</p><br>
        <p>{data.email}</p>`;
      })
      .catch(function (error) {
        alert("ERROR!!!!!!!!!!!!");
        console.log(error.message);
      });
}