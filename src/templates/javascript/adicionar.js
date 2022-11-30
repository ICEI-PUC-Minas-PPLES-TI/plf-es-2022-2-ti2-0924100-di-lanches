var labelErro = document.getElementById('labelErro')
var nome = document.getElementById('nome')
var qntd = document.getElementById('qntd')
var preco = document.getElementById('preco')



$('#preco').unmask().mask("#.##0,00", {reverse: true});

function valida() {

  if(nome.value.length == 0 || qntd.value.length == 0 || preco.value.length == 0){
    return erro();
  }
  else { 
    Swal.fire({
      title: 'Deseja adicionar ingrediente no estoque?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Adicionar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        let ingrediente = {
          nome:nome.value,
          quantidade: qntd.value,
          valor_unidade: $('#preco').val().replace(",",".")
        }
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

