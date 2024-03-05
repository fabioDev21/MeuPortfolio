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
// TODO: adicionar troca cores do texto = feito!, elementos bloco do projeto, sombras do icones das ferramentas.
// TODO: pensar se troco ou não a cor do background linear = foi trocado!
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
    // aplicando cor para cada elemento da classe bloco e cada declaração subsequente dessa forma age da mesma maneira
    Array.from(document.getElementsByClassName("bloco")).forEach(elemento => {
        elemento.style.color = "var(--prime-color)"
        elemento.style.backgroundColor = "var(--second-color)"
    })
    Array.from(document.getElementsByClassName("navegacao__item")).forEach(elemento => {
        elemento.style.color = "var(--prime-color)"
        // método que adiciona hover após substituição feita pelo próprio JS
            elemento.addEventListener("mouseenter", a => {
                elemento.style.color = "var(--second-color)"
                elemento.style.backgroundColor = "var(--prime-color)"
            })
            elemento.addEventListener("mouseleave", a => {
                elemento.style.color = "var(--prime-color)"
                elemento.style.backgroundColor = "transparent"
            })
    })
    menuIcon.style.color = "var(--prime-color)"
    menuIcon.addEventListener("mouseenter", a => {
        menuIcon.style.color = "var(--second-color)"
        menuIcon.style.backgroundColor = "var(--prime-color)"
    })
    menuIcon.addEventListener("mouseleave", a => {
        menuIcon.style.color = "var(--prime-color)"
        menuIcon.style.backgroundColor = "transparent"
    })
    navegacao.style.backgroundColor = "var(--second-color)"
    document.getElementById("verMaisBtn").style.color = "var(--prime-color)"
    document.getElementById("verMaisBtn").style.filter = "drop-shadow(0 0 0.20rem var(--prime-color))"
    document.getElementById("suBody").style.backgroundColor = "var(--prime-color)"
    document.getElementById("suBody").style.color = "var(--second-color)"
    document.getElementsByTagName("body")[0].style.background = "fixed linear-gradient(-120deg , #2B3A67,  #ededf4)"
}

function temaEscuro(){
    Array.from(document.getElementsByClassName("bloco")).forEach(elemento => {
        elemento.style.color = "var(--second-color)"
        elemento.style.backgroundColor = "var(--prime-color)"
    })
    
    Array.from(document.getElementsByClassName("navegacao__item")).forEach(elemento => {
        elemento.style.color = "var(--second-color)"
        elemento.addEventListener("mouseenter", a => {
            elemento.style.color = "var(--prime-color)"
            elemento.style.backgroundColor = "var(--second-color)"
        })
        elemento.addEventListener("mouseleave", a => {
            elemento.style.color = "var(--second-color)"
            elemento.style.backgroundColor = "transparent"
        })
    })
    menuIcon.addEventListener("mouseenter", a => {
        menuIcon.style.color = "var(--prime-color)"
        menuIcon.style.backgroundColor = "var(--second-color)"
    })
    menuIcon.addEventListener("mouseleave", a => {
        menuIcon.style.color = "var(--second-color)"
        menuIcon.style.backgroundColor = "transparent"
    })
    menuIcon.style.color = "var(--second-color)"
    navegacao.style.backgroundColor = "var(--prime-color)"
    document.getElementById("verMaisBtn").style.color = "var(--second-color)"
    document.getElementById("suBody").style.backgroundColor = "var(--second-color)"
    document.getElementById("suBody").style.color = "var(--prime-color)"
    document.getElementsByTagName("body")[0].style.background = "fixed linear-gradient(135deg , #191c23,  #65758f)"
}
