// Definição das funções para o menu idioma 

let suBody = document.getElementById("suBody")
let languageIcon = document.getElementById("languageIcon")
let cardsSobTela = document.getElementsByClassName("cardsSobTela")

languageIcon.addEventListener("click", mostraMenuIdioma)
function mostraMenuIdioma(){
    languageIcon.title = ""
    cardsSobTela[0].style.display = "flex"
}

// Definição das funções para o menu de navegação mobile

let menuIcon = document.getElementById("menuIcon")

menuIcon.addEventListener("click", mostraMenuNav)
function mostraMenuNav(){
    menuIcon.title = ""
    cardsSobTela[1].style.display = "flex"
}

// Definição do light mode da página

let sunMode = document.getElementById("sunMode")

