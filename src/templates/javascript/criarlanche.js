var preco = document.querySelector("#preco")

preco.addEventListener('keypress', () =>{
  if (preco.value.length === 0) {
    preco.value += 'R$'
  }
})

preco.addEventListener('focusout', () =>{
  preco.value +=',00'
})