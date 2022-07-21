function createUser() {  
    alert("criando novo usuario...")
    fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: `POST`,
        body: JSON.stringify({
            userId: document.getElementById("nomeUsuario").value,
            title: document.getElementById("nomeCompleto").value,
            body: document.getElementById("emailUsuario").value
        }),
        headers: { 'Content-type': 'application/json; charset=UTF-8', },
    })
    .then(response => response.json())
    .then(json => {
        console.log(json)
        alert("novo usuario criado!")
    })
}