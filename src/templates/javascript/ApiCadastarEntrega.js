let cadastro = {
    variaveis: {
        url: "http://localhost:5000/api/autenticacao/cadastro"
    },
    funcoes:{
        cadastrar: () => {
            let usuario = {
                nome: $("#nome").val(),
                telefone: $("#telefone").val(),
                email: $("#email").val(),
                senha: $("#senha").val()
            }
            console.log(usuario)
            $.post({
                url: cadastro.variaveis.url,
                data: usuario,
                success: (result)=>{
                    swal.fire({
                        icon: "success",
                        title: "Sucesso",
                        text: "Cadastrado com sucesso",
                        timer: 3000,
                        showConfirmButton: false,
                        timerProgressBar: true
                    }).then(e => {
                        window.location.href = "./login.html";
                    })
                },
                error: (e) => {
                    console.log(e)
                    swal.fire({
                        icon: "error",
                        title: "Erro",
                        text: "Tente novamente mais tarde",
                        timer: 3000, 
                        showConfirmButton: false,
                        timerProgressBar: true                       
                    }) 
                }
            })        
        },
        init: ()=>{
            $("#cadastrar").on("click", e => {
                cadastro.funcoes.cadastrar();
            })
        }
    }
}
$(document).ready(e=>{
    cadastro.funcoes.init();
})