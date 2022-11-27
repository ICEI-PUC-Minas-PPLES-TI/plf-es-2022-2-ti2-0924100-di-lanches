let login = {
    variaveis: {
        url: "http://localhost:5000/api/autenticacao/"
    },
    funcoes:{
        login: () => {
            let usuario = {
                email: $("#email").val(),
                senha: $("#senha").val()
            }
            $.post({
                url: login.variaveis.url,
                data: usuario,
                success: (result)=>{
                    swal.fire({
                        icon: "success",
                        title: "Sucesso",
                        text: "logado com sucesso",
                        timer: 3000,
                        showConfirmButton: false,
                        timerProgressBar: true
                    }).then(e => {
                        window.location.href = "./cardapio.html";
                    })
                },
                error: (e) => {
                    console.log(e)
                    swal.fire({
                        icon: "warning",
                        title: "Atenção",
                        text: "Email ou senha incorretos",
                        timer: 3000, 
                        showConfirmButton: false,
                        timerProgressBar: true                       
                    }) 
                }
            })        
        },
        init: ()=>{
            $("#login").on("click", e => {
                login.funcoes.login();
            })
        }
    }
}
$(document).ready(e=>{
    login.funcoes.init();
})