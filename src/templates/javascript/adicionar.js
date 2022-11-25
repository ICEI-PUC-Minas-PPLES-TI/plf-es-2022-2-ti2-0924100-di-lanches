var labelErro = document.getElementById('labelErro')
var nome = document.getElementById('nome')
var qntd = document.getElementById('qntd')
var preco = document.getElementById('preco')


preco.addEventListener('keypress', () => {
  if (preco.value.length === 0) {
    preco.value += 'R$';
  }
})


function retornarNumero(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /^[0-9.]+$/;
  if( !regex.test(key) ) {
     theEvent.returnValue = false;
     if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

function valida() {
  if(nome.value.length == 0){
    return erro();
  }
  else {
    return valido();
  }

  if(qntd.value.length == 0){
    return erro();
    setInterval
  }
  else {
    return valido();
  }

  if(preco.value.length == 0){
    return erro(); 
  }
  else {
    return valido();
  }
}

function erro(){
  labelErro.style.display = "flex";
  labelErro.style.color = "red";
  labelErro.innerHTML = "Preencha todos os campos do formulário."
}

function valido(){
  labelErro.style.display = "flex";
  labelErro.style.color = "green";
  labelErro.innerHTML = "Cadastro concluído"
}

function end(){

}