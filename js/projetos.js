
//Definição de variáveis para os projetos
let areaUm = document.getElementById("cardProjetoUm")
let itemProjetoUm = document.getElementById("projetoUm")
let cardPjUm = document.getElementsByClassName("cardsSobTela")[3]

let areaDois = document.getElementById("cardProjetoDois")
let itemProjetoDois = document.getElementById("projetoDois")
let cardPjDois = document.getElementsByClassName("cardsSobTela")[4]

let areaTres = document.getElementById("cardProjetoTres")
let itemProjetoTres = document.getElementById("projetoTres")
let cardPjTres = document.getElementsByClassName("cardsSobTela")[5]

// Optei por definir os projetos dentro de um objeto e economizar código no HTML
const projetos = { 
    cardp_um: {
        titulo_card: "Clone Spotify",
        descricao_card: "Proposta realizada durante a Imersão Frontend da Alura, este projeto clone do Spotify me ajudou muito a descobrir novas formas de resolver problemas relacionados ao frontend utilizando principalmente JavaScript mas também HTML e CSS.",
        tecnologias_card: {
            html: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
            css: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg", 
            javaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        },
        link_card: ["https://projetoimersaofrontendalura.vercel.app/", "https://github.com/fabioDev21/ImersaoFrontendAlura.git"],
        },
    cardp_dois: {
        titulo_card: "Site de Receitas",
        descricao_card: "Projeto de faculdade desenvolvido durante o 1º semestre da faculdade de Análise e desenvolvimento de sistemas, foi um desafio revelador pois descobri mais afundo sobre áudios, vídeos e formulário dentro do HTML.",
        tecnologias_card: {
            html: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
            css: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
        },
        link_card: ["https://projeto-faculdade-receitar-cozinhar.vercel.app/", "https://github.com/fabioDev21/Site-Receitas/"],
        },
    cardp_tres: {
        titulo_card: "Landing page",
        descricao_card: "Landing page desenvolvida para um desafio 7 dias, existiram desafios e pude solucioná-los aprendendo novas técnicas dentro de CSS, como o display grid para manter a responsividade, display flex para alinhamento de elementos, váriaveis, entre outros.",
        tecnologias_card: {
            html: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
            css: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
        },
        link_card: ["https://desafio-seven-days-of-code.vercel.app", "https://github.com/fabioDev21/7DaysOfCodeByGiMoller"],
        }
        
    }

itemProjetoUm.addEventListener("click", a => {
    
    // Carrega o conteúdo do card de projeto para dentro da div areaUm dentro do html
    areaUm.innerHTML = `
    <div class="closeBtn">
        <p class="fa fa-times fa-lg"></p>
    </div>
    <span>
        <img style="width: 100%;" src="assets/projetos/spotifyImersao.png" alt="Projeto spotify">
    </span>
    <h4 class="cardsSobTela__title"> ${projetos.cardp_um.titulo_card} </h4>
    <span>
        <p>${projetos.cardp_um.descricao_card}</p>
    </span>
    <div class="card__tecnos">
        <p> Tecnologias utilizadas: </p>
        <span>
            <span>
                <img title="HTML5" src="${projetos.cardp_um.tecnologias_card.html}" alt="logo HTML5" style="width: 60px;">
            </span>
            <span>
                <img title="CSS3" src="${projetos.cardp_um.tecnologias_card.css}" alt="logo CSS3" style="width: 60px;">
            </span>
            <span>
                <img title="JavaScript" src="${projetos.cardp_um.tecnologias_card.javaScript}" alt="logo JavaScript" style="width: 60px;">
            </span>
        </span>
    </div>
    <div class="links__projetos">
        <a href="${projetos.cardp_um.link_card[0]}" target="_blank">Acessar Projeto</a>
        <a href="${projetos.cardp_um.link_card[1]}" target="_blank">Ver Repositório</a>
    </div>`
    // Define a mudança de display que faz o card aparecer
    cardPjUm.style.display = "flex"
    escureceTela.style.display = "block"
    
    // função que gera e adiciona a funcionalidade do botão de fechar do card
    let closeBtnProjetoUm = document.getElementsByClassName("closeBtn")[3]
    closeBtnProjetoUm.addEventListener("click", escondeMenuProjetoUm)
    function escondeMenuProjetoUm(){
        cardsSobTela[3].style.display = "none"
        escureceTela.style.display = "none"

    }

    // Definição de funcionalidade para quando o usuário clicar sobre a tela esmaecida, o card ser fechado
    escureceTela.addEventListener("click", a => {
        cardsSobTela[3].style.display = "none"
        escureceTela.style.display = "none"
    })
})

itemProjetoDois.addEventListener("click", a => {
    areaDois.innerHTML = `
    <div class="closeBtn">
        <p class="fa fa-times fa-lg"></p>
    </div>
    <span>
        <img style="width: 100%" src="assets/projetos/receitarcozinhar.png" alt="Projeto Receitar e cozinhar">
    </span>
    <h4 class="cardsSobTela__title"> ${projetos.cardp_dois.titulo_card} </h4>
    <span>
        <p>${projetos.cardp_dois.descricao_card}</p>
    </span>
    <div class="card__tecnos">
        <p> Tecnologias utilizadas: </p>
        <span>
            <span>
                <img title="HTML5" src="${projetos.cardp_dois.tecnologias_card.html}" alt="logo HTML5" style="width: 60px;">
            </span>
            <span>
                <img title="CSS3" src="${projetos.cardp_dois.tecnologias_card.css}" alt="logo CSS3" style="width: 60px;">
            </span>
        </span>
    </div>
    <div class="links__projetos">
        <a href="${projetos.cardp_dois.link_card[0]}" target="_blank">Acessar Projeto</a>
        <a href="${projetos.cardp_dois.link_card[1]}" target="_blank">Ver Repositório</a>
    </div>`
    cardPjDois.style.display = "flex"
    escureceTela.style.display = "block"
    
    let closeBtnProjetoDois = document.getElementsByClassName("closeBtn")[4]
    closeBtnProjetoDois.addEventListener("click", escondeMenuProjetoDois)
    function escondeMenuProjetoDois(){
        cardsSobTela[4].style.display = "none"
        escureceTela.style.display = "none"
    }

    escureceTela.addEventListener("click", a => {
        cardsSobTela[4].style.display = "none"
        escureceTela.style.display = "none"
    })
})

itemProjetoTres.addEventListener("click", a => {
    areaTres.innerHTML = `
    <div class="closeBtn">
        <p class="fa fa-times fa-lg"></p>
    </div>
    <span>
        <img style="width: 100%;" src="assets/projetos/projeto7daysofcode.jpeg" alt="Projeto landing page 7 days of code">
    </span>
    <h4 class="cardsSobTela__title"> ${projetos.cardp_tres.titulo_card} </h4>
    <span>
        <p>${projetos.cardp_tres.descricao_card}</p>
    </span>
    <div class="card__tecnos">
        <p> Tecnologias utilizadas: </p>
        <span>
            <span>
                <img title="HTML5" src="${projetos.cardp_tres.tecnologias_card.html}" alt="logo HTML5" style="width: 60px;">
            </span>
            <span>
                <img title="CSS3" src="${projetos.cardp_tres.tecnologias_card.css}" alt="logo CSS3" style="width: 60px;">
            </span>
        </span>
    </div>
    <div class="links__projetos">
        <a href="${projetos.cardp_tres.link_card[0]}" target="_blank">Acessar Projeto</a>
        <a href="${projetos.cardp_tres.link_card[1]}" target="_blank">Ver Repositório</a>
    </div>`
    cardPjTres.style.display = "flex"
    escureceTela.style.display = "block"
    
    let closeBtnProjetoTres = document.getElementsByClassName("closeBtn")[5]
    closeBtnProjetoTres.addEventListener("click", escondeMenuProjetoTres)
    function escondeMenuProjetoTres(){
        cardsSobTela[5].style.display = "none"
        escureceTela.style.display = "none"
    }

    escureceTela.addEventListener("click", a => {
        cardsSobTela[5].style.display = "none"
        escureceTela.style.display = "none"
    })
})