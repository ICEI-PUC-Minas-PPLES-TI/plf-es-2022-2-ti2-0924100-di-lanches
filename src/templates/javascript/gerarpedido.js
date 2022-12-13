var entrega = document.getElementById('entrega')
var dadosEntrega = document.querySelector('.dadosEntrega')
var cep = document.querySelector('#CEP')


entrega.addEventListener("change", () => {
  if(entrega.checked){
    dadosEntrega.style.display = "block"
  }
  else{
    dadosEntrega.style.display = "none"
  }
})

cep.addEventListener('keypress', () =>{
  if (cep.value.length === 5) {
    cep.value += '-'
  }
})