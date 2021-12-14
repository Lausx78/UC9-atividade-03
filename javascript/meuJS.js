function eventoClick(e){
  e.stopPropagation();
  alert("O elemento " + this.nodeName + " foi clicado!")
}

function eventoFocus(){
  let elePai=this.parentNode
  let eleLbl=elePai.querySelector("label")
  if (eleLbl==null){
    eleLbl=document.createElement("label")
    elePai.appendChild(eleLbl)
  }
  eleLbl.innerText="Elemento " + this.nodeName + " recebeu o focus"
  this.style.backgroundColor="yellow"
}
function eventoBlur(){
  this.style.backgroundColor="transparent"
}

function Funcaoonload() {
  alert("Formulário carregado com sucesso!")
}
//Selecionando todos os elementos com a classe clicaveis
var els=document.querySelectorAll(".clicaveis")
//amarrando o evento nos elementos clicaveis
els.forEach(it=>{
  it.addEventListener("click",eventoClick)
})
//Essa é outra forma de amarrar o evento
/*
for (let i=0;i<els.length;i++){
  let it=els[i]
  it.addEventListener("click",eventoClick)
}
*/
/* Selecionando os elementos focus */
els=document.querySelectorAll(".focus-habilitado")
els.forEach(it=>{
  it.addEventListener("focus",eventoFocus)
  it.addEventListener("blur",eventoBlur)
})

function mostrarModal(){
  document.querySelector(".modal").style.display="block"
  window.location.href="#"
  document.body.style.overflow="hidden"
}
function fechaModal (){
  document.querySelector(".modal").style.display="none"
  window.location.href="#"
  document.body.style.overflow="visible"
}

let itMd=document.querySelector(".click-modal")
itMd.addEventListener("click",mostrarModal)

let idMd2=document.querySelector(".fecha-menu")
idMd2.addEventListener("click",fechaModal)