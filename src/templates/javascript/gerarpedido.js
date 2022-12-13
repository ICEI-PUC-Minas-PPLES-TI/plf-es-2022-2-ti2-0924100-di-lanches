var entrega = document.getElementById('entrega')
var dadosEntrega = document.querySelector('.dadosEntrega')

entrega.addEventListener("change", () => {
  if(entrega.checked){
    dadosEntrega.style.display = "block"
  }
  else{
    dadosEntrega.style.display = "none"
  }
  
})