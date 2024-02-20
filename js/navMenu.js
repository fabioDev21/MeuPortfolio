// Definição das funções para o menu idioma 
let languageIcon = document.getElementById("languageIcon")
let cardsSobTela = document.getElementsByClassName("cardsSobTela")
let escureceTela = document.getElementById("escureceTela")
let navegacao = document.getElementById("navegacao")

languageIcon.addEventListener("click", mostraMenuIdioma)
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

navegacao.addEventListener("", a => console.log("slc"))

// Definição do light mode da página

let sunMode = document.getElementById("sunMode")

