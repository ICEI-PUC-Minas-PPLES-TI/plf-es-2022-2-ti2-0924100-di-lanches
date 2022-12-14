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
                    {"data": "valor_unidade", "render": (data, row) => `R$: ${data.toLocaleString('pt-br', {minimumFractionDigits: 2})}`},
                    {"data": "id", "render": (data, row) => `<a href="javascript: estoque.funcoes.deletar(${data})" class="btn btn-danger">Deletar</a> 
                                                             <a href="adicionarIngrediente.html?id=${data}" class="btn btn-warning">Editar</a> `}
                ]
            })                 
        },
        deletar: (id) => {
            Swal.fire({
                title: 'Deseja deletar ingrediente no estoque?',
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: 'Deletar',
                denyButtonText: `Cancelar`,
              }).then((result) => {
                if (result.isConfirmed) {
                    $.ajax({
                        url: estoque.variaveis.url,
                        method: "PUT",
                        data: { id,ativo: false},
                        success: (result)=>{
                            estoque.funcoes.montarTable()
                            swal.fire({
                                icon: "success",
                                title: "Sucesso",
                                text: "Deletado com sucesso",
                                timer: 3000,
                                showConfirmButton: false,
                                timerProgressBar: true
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
                } else if (result.isDenied) {
                  Swal.fire('Cancelado com sucesso', '', 'info')
                }
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