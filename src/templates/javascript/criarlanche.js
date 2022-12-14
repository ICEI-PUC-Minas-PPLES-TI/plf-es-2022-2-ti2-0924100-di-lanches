
var nome = document.querySelector("#nome")
var preco = document.querySelector("#preco")
var descricao = document.querySelector("#descricao")
const select_ingrediente = document.getElementById('ingrediente')
const adicionar = document.querySelector('#adicionar')
const ingredientes_adicionados = document.getElementById('ingredientes-adicionados')
let adicionado
let qtd_ingredientes = 0

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

ingrediente.addEventListener('change', adicionar_ingredientes)
function adicionar_ingredientes(){
  let selecionado = select_ingrediente.options[select_ingrediente.selectedIndex]
  let texto = selecionado.text
  return texto
}

adicionar.addEventListener('click', () => {
  adicionado = adicionar_ingredientes()
  let selecionado = select_ingrediente.options[select_ingrediente.selectedIndex]

  if(selecionado.value != 0){
    let novo_ingrediente = document.createElement('div')
    novo_ingrediente.className = 'ingrediente-adicionado'
  
    ingredientes_adicionados.classList.remove('display-none')
    ingredientes_adicionados.append(novo_ingrediente)
    novo_ingrediente.innerHTML = `<p class="ingrediente">${adicionado}</p> 
    <button id="excluir" onclick="excluir_ingrediente()" ><i class="fa-solid fa-trash trash-icon"></i></button>`
    qtd_ingredientes++

  } else {

    const ingrediente_nao_selecionado = document.getElementById('nao-selecionado')
    ingrediente_nao_selecionado.classList.remove('display-none')

    setTimeout(() => {
      ingrediente_nao_selecionado.classList.add('display-none')
    }, 2000)
  }
})

function excluir_ingrediente() {
  const ingrediente_adicionado = document.querySelector('.ingrediente-adicionado')
  ingrediente_adicionado.remove()
  qtd_ingredientes--
  
  if(qtd_ingredientes <= 0) {
    ingredientes_adicionados.classList.add('display-none')
  }
}
