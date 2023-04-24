// const { bodyParser } = require("json-server")

// Add your code here

function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ name, email })
    })
    .then(res => res.json())
    .then(data => {console.log(data)

  const newId = data.id;
  const idElement = document.createElement('p');
  
  idElement.textContent = `New ID: ${newId}`;
  document.body.appendChild(idElement);
  return data;   
})
.catch(error => {
    console.error("Error submitting data:", error);
    const errorElement = document.createElement('p');
    errorElement.textContent = `Error: ${error.message}`;
    document.body.appendChild(errorElement);
  });
}
