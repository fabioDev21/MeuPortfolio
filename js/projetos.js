let itemProjetoUm = document.getElementsByClassName("itemProjeto")[0]
let itemProjetoDois = document.getElementsByClassName("itemProjeto")[1]
let itemProjetoTres = document.getElementsByClassName("itemProjeto")[2]

itemProjetoUm.addEventListener("click", a => {
    let cardProjetoUm = document.getElementsByClassName("cardsSobTela")[3]
    cardProjetoUm.style.display = "flex"
    escureceTela.style.display = "block"
})
itemProjetoDois.addEventListener("click", a => {
    let cardProjetoUm = document.getElementsByClassName("cardsSobTela")[4]
    cardProjetoUm.style.display = "flex"
    escureceTela.style.display = "block"
})
itemProjetoTres.addEventListener("click", a => {
    let cardProjetoUm = document.getElementsByClassName("cardsSobTela")[5]
    cardProjetoUm.style.display = "flex"
    escureceTela.style.display = "block"
})