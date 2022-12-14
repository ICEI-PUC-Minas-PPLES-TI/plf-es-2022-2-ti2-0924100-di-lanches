
var nome = document.querySelector("#nome")
var preco = document.querySelector("#preco")
var descricao = document.querySelector("#descricao")


preco.addEventListener('keypress', () =>{
  if (preco.value.length === 0) {
    preco.value += 'R$'
  }
})

preco.addEventListener('focusout', () =>{
  
  if(preco.value.length > 0){
  preco.value +=',00'
  }
})

function valida() {
  if(nome.value.length === 0 || preco.value.length === 0 || descricao.value.length === 0){
    Swal.fire({
      icon: 'error',
      title: 'Erro de cadastro',
      text: 'Preencha todos os campos do formulário!',
    })
  }
}