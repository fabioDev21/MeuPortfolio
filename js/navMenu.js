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

// Definição do light mode da página
// TODO: adicionar troca cores do texto, elementos bloco do projeto, sombras do icones das ferramentas.
// TODO: pensar se troco ou não a cor do background linear
let sunMode = document.getElementById("sunMode")
console.log(sunMode.title)

sunMode.addEventListener("click", ativarTema)

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
    Array.from(document.getElementsByClassName("bloco")).forEach(elemento => {
        elemento.style.color = "var(--prime-color)"
        elemento.style.backgroundColor = "var(--second-color)"
    })
    document.getElementById("suBody").style.backgroundColor = "var(--prime-color)"
    document.getElementById("suBody").style.color = "var(--second-color)"
}

function temaEscuro(){
    Array.from(document.getElementsByClassName("bloco")).forEach(elemento => {
        elemento.style.color = "var(--second-color)"
        elemento.style.backgroundColor = "var(--prime-color)"
    })
    document.getElementById("suBody").style.backgroundColor = "var(--second-color)"
    document.getElementById("suBody").style.color = "var(--prime-color)"
}
