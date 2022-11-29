let cardapio = {
    variaveis: {
        url: "http://localhost:5000/api/lanche/"
    },
    funcoes:{
        montar: () => {
            $.get({
                url: cardapio.variaveis.url,
                success: (result)=>{
                    swal.fire({
                        icon: "info",
                        title: "Aguarde",
                        text: "Carregando cardapio",
                        timer: 4000, 
                        showConfirmButton: false,
                        timerProgressBar: true,
                        toast: true,
                        position: "top-right"                    
                    })
                    
                    result.forEach(k => {
                        let template  = $($("#template-card").html())
                        $(template).find(".card-img-lanche").attr("src",`images/lanches/${k.foto}`).attr("alt", k.nome)
                        $(template).find(".card-nome").html(k.nome)
                        $(template).find(".card-preco").html(`R$: ${k.valor.toLocaleString('pt-br', {minimumFractionDigits: 2})}`)
                        $(template).find(".hamburguer-description").html(k.descricao)
                        $("#lanches").append(template)
                        console.table(k)
                    })
                },
                error: (e) => {
                    swal.fire({
                        icon: "warning",
                        title: "Atenção",
                        text: "Cardapio vazio",
                        timer: 3000, 
                        showConfirmButton: false,
                        timerProgressBar: true,
                        toast: true,
                        position: "top-right"                    
                    }) 
                }
            })        
        },
        init: ()=>{
            cardapio.funcoes.montar();
        }
    }
}
$(document).ready(e=>{
    cardapio.funcoes.init();
})