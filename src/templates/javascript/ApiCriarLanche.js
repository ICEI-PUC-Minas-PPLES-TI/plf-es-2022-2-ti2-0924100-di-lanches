let cadastrar = {
    variaveis: {
        url: "http://localhost:5000/api/lanche"
    },
    funcoes:{
        cadastrarLanche: () => {
            let lanche = {
                foto: $("#imagem").val(),
                descricao: $("#descricao").val(),
                valor: $("#preco").val(),
                nome: $("#nome").val(),
                ativo: true,
                Ingrediente_lanches: "bacon"

            }
            console.log(lanche)
            $.post({
                url: cadastrar.variaveis.url,
                data: lanche,
                success: (result)=>{
                    swal.fire({
                        icon: "success",
                        title: "Sucesso",
                        text: "Lanche cadastrado com sucesso",
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
            $("#enviar").on("click", e => {
                cadastrar.funcoes.cadastrarLanche();
            })
        }
    }
}
$(document).ready(e=>{
    cadastrar.funcoes.init();
})