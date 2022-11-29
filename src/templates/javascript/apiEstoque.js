let estoque = {
    variaveis: {
        url: "http://localhost:5000/api/ingrediente/"
    },
    funcoes:{
        montarTable: () => {
            swal.fire({
                icon: "info",
                title: "Aguarde",
                text: "Carregando estoque",
                timer: 4000, 
                showConfirmButton: false,
                timerProgressBar: true,
                toast: true,
                position: "top-right"                    
            })
            $('#estoque-table').DataTable({
                "paging": false,
                "lengthChange": true,
                "info": false,
                "autoWidth": true,
                "destroy": true,
                "ajax": {                   
                    "url": estoque.variaveis.url,
                    "type": 'GET',
                    "dataSrc": (value) =>{
                        return value;
                    },
                },
                "columns": [
                    {"data": "id"},
                    {"data": "nome"},
                    {"data": "quantidade", "render": (data, row) => data > 0 ? data : "esgotado"},
                    {"data": "valor_unidade", "render": (data, row) => `R$: ${data.toLocaleString('pt-br', {minimumFractionDigits: 2})}`}
                ]
            })                 
        },
        init: ()=>{
            estoque.funcoes?.montarTable();
        }
    }
}
$(document).ready(e=>{
    estoque.funcoes.init();
})