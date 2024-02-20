let verMaisBtn = document.getElementById("verMaisBtn")
let blocoSobre = document.getElementById("sobre")


// fazer um random de quando o usuário passar o mouse por cima a imagem rodar 
blocoSobre.addEventListener("mouseenter", rotateBlocoSobre)
function rotateBlocoSobre(){
    const numberTochose = Math.ceil(Math.random() * 10)
    if(numberTochose >= 1 && numberTochose <= 10){
        switch (numberTochose){
            case 1:
                document.getElementById("foto-perfil").style.rotate = "15deg"
                break;
            case 2:
                document.getElementById("foto-perfil").style.rotate = "-15deg"
                break;
            case 3:
                document.getElementById("foto-perfil").style.rotate = "20deg"
                break;
            case 4:
                document.getElementById("foto-perfil").style.rotate = "-20deg"
                break;
            case 5:
                document.getElementById("foto-perfil").style.rotate = "25deg"
                break;
            case 6:
                document.getElementById("foto-perfil").style.rotate = "-25deg"
                break;
            case 7:
                document.getElementById("foto-perfil").style.filter = "drop-shadow(0 0 0.75em crimson)"
                break;
            case 8:
                document.getElementById("foto-perfil").style.filter = "drop-shadow(0 0 0.75em purple)"
                break;
            case 9:
                document.getElementById("foto-perfil").style.filter = "drop-shadow(0 0 0.75em #f0f8ff)"
                break;
            case 10:
                document.getElementById("foto-perfil").style.filter = "drop-shadow(0 0 0.75em #FFD700)"
                document.getElementById("foto-perfil").style.rotate = "360deg"
                break;
            default:
                document.getElementById("foto-perfil").style.rotate = "0deg"
        }
            
    }
}
blocoSobre.addEventListener("mouseleave", desrotateBlocoSobre)
function desrotateBlocoSobre(){
    document.getElementById("foto-perfil").style.rotate = "0deg"
    document.getElementById("foto-perfil").style.filter = "none"
}

verMaisBtn.addEventListener("click", abrirCardSobre)
function abrirCardSobre(){
    let cardSobre = document.getElementsByClassName("cardsSobTela")[2]
    cardSobre.style.display = "flex"
    escureceTela.style.display = "block"
} 
