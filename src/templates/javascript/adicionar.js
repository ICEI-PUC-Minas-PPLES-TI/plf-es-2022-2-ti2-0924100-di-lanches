var labelErro = document.getElementById('labelErro')
var nome = document.getElementById('nome')
var qntd = document.getElementById('qntd')
var preco = document.getElementById('preco')
let id= 0;


$('#preco').unmask().mask("#.##0,00", {reverse: true});

function valida() {

  if(nome.value.length == 0 || qntd.value.length == 0 || preco.value.length == 0){
    return erro();
  }
  else { 
    let ingrediente = {
      nome:nome.value,
      quantidade: qntd.value,
      valor_unidade: $('#preco').val().replace(",",".")
    }
    if(id == 0){
      Swal.fire({
        title: 'Deseja adicionar ingrediente no estoque?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Adicionar',
        denyButtonText: `Cancelar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          $.post({
            url:"http://localhost:5000/api/ingrediente/",
            data:ingrediente,
            success:(result) => {
              swal.fire({
                icon: "success",
                title: "Sucesso",
                text: "Ingrediente adicionado com sucesso",
                timer: 2000, 
                showConfirmButton: false,
                timerProgressBar: true,
              }).then(a => {
                Swal.fire({
                  title: 'Deseja adicionar outo ingrediente?',
                  showDenyButton: true,
                  showCancelButton: false,
                  confirmButtonText: 'Sim',
                  denyButtonText: `Não`,
                }).then(result => {
                  result.isConfirmed ? $("input").val("") : window.location.href = "estoque.html";
                })
              })
            },
            error:()=>{
              swal.fire({
                icon: "error",
                title: "Error",
                text: "Dados Invalidos",
                timer: 2000, 
                showConfirmButton: false,
                timerProgressBar: true,
              })
            }
          })
        } else if (result.isDenied) {
          Swal.fire('Cancelado com sucesso', '', 'info')
        }
      })
    }else {
      $.ajax({
        url: `http://localhost:5000/api/ingrediente/${id}`,
        method: "PUT",
        data: ingrediente,
        success: (result) => {
            swal.fire({
              icon: "success",
              title:"Sucesso",
              text: "Ingrediente alterado com sucesso"
            }).then(() => window.location.href = "./estoque.html")
        }
      })
    }
  }
  
}

function erro(){
  labelErro.style.display = "flex";
  labelErro.style.color = "red";
  labelErro.innerHTML = "Preencha todos os campos do formulário."
  setTimeout(function(){
    labelErro.style.display = "none"
  },2000);
}
function retornaigrediente(id){
  $.get({
    url:`http://localhost:5000/api/ingrediente/${id}`,
    success: (result) => {
      $(".card h1").html("Editar ingrediente")
      $("#cadastrar").html("Salvar Alteração")
      $("#nome").val(result.nome)
      $("#qntd").val(result.quantidade)
      $("#preco").val(result.valor_unidade)
    }
  })
}
$(document).ready(()=>{
  let url = new URL(window.location.href)
  id = url.searchParams.get('id')
  if(id != 0 || id != null)
    retornaigrediente(url.searchParams.get('id'))
})

