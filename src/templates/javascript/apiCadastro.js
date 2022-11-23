function doPost(url, body){

    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))
    
    return request.responseText
    
}

function cadastroUsuario(){

    let url = "http://localhost:5000/api/autenticacao/cadastro" 
    let nome = document.getElementById("nome").value
    let telefone = document.getElementById("telefone").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value

    body = {
        "nome": nome,
        "telefone": telefone,
        "email": email,
        "senha": senha
    }

    doPost(url, body)
}