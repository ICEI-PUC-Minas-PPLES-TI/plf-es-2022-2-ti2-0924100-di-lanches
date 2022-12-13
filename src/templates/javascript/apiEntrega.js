let entrega = {
    variaveis: {
        url: "https://localhost:5000/api/pedido/entrega/1"
    },
    funcoes:{
        montarTable: () => {
            swal.fire({
                icon: "info",
                title: "Aguarde",
                text: "Carregando entregas",
                timer: 4000, 
                showConfirmButton: false,
                timerProgressBar: true,
                toast: true,
                position: "top-right"                    
            })
            $('#entrega-table').DataTable({
                "paging": false,
                "lengthChange": true,
                "info": false,
                "autoWidth": true,
                "destroy": true,
                "ajax": {                   
                    "url": entrega.variaveis.url,
                    "type": 'GET',
                    "dataSrc": (value) =>{
                        return value;
                    },
                },
                "columns": [
                    {"data": "id"},
                    {"data": "rua"},
                    {"data": "CEP"},
                    {"data": "id"}
                ]
            })                 
        },
        init: ()=>{
            entrega.funcoes?.montarTable();
        }
    }
}
$(document).ready(e=>{
    entrega.funcoes.init();
})