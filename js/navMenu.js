// Definição das funções para o menu idioma 
let cardsSobTela = document.getElementsByClassName("cardsSobTela")
let escureceTela = document.getElementById("escureceTela")
let navegacao = document.getElementById("navegacao")
let root = document.querySelector(":root")

// Array.from necessário pois estou puxando do html um elemento de classe
let languageIcon = Array.from(document.getElementsByClassName("languageIcon"))

languageIcon.forEach(a =>{
    a.addEventListener("click", mostraMenuIdioma)
})

function mostraMenuIdioma(){
    languageIcon.title = ""
    escureceTela.style.display = "block"
    cardsSobTela[0].style.display = "flex"
}

// Definição das funções para o menu de navegação mobile
let menuIcon = document.getElementById("menuIcon")

menuIcon.addEventListener("click", mostraMenuNav)
function mostraMenuNav(){
    menuIcon.title = ""
    escureceTela.style.display = "block"
    cardsSobTela[1].style.display = "flex"
}

// Definição do light mode da página
let sunMode = Array.from(document.getElementsByClassName("sunMode"))

sunMode.forEach(a => {
    a.addEventListener("click", ativarTema)
})

function ativarTema(){
    if(sunMode.title == "Ativar modo claro"){
        temaClaro()
        sunMode.title = "Ativar modo escuro"
    } else{
        temaEscuro()
        sunMode.title = "Ativar modo claro"
    }
}

function temaClaro(){
    root.style.setProperty("--prime-color","#0D1117")
    root.style.setProperty("--second-color", "#e9e3db")
    root.style.setProperty("--third-color", "#b8c4d5")
    root.style.setProperty("--bg-color-inSubody", "rgba(161, 194, 255, 0.5)")
    root.style.setProperty("--bgHover-color-inSubody", "rgba(161, 194, 255, 0.9)")
    document.getElementsByTagName("body")[0].style.background = "fixed linear-gradient(-120deg , #2B3A67,  #ededf4)"
}

function temaEscuro(){
    root.style.setProperty("--prime-color","#e9e3db")
    root.style.setProperty("--second-color", "#0D1117")
    root.style.setProperty("--third-color", "#39414E")
    root.style.setProperty("--bg-color-inSubody", "rgba(0, 2, 23, 0.5)")
    root.style.setProperty("--bgHover-color-inSubody", "rgba(0, 2, 23, 0.8)")
    document.getElementsByTagName("body")[0].style.background = "fixed linear-gradient(120deg , #191c23,  #65758f)"
}

// Area de testes

let sobreBtn = document.getElementById("sobreBtn")
let sobre = document.getElementById("contatos")

function scrollandoParaOElemento(){
    sobre.scrollTo("behavior");
// TODO: fazer funcionar
}

sobreBtn.addEventListener("click", scrollandoParaOElemento)