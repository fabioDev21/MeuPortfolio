// Alterando o tema de fundo e ativando o modal de menu
// TODO: Falta estilizar!!!
// TODO: quando clicar aonde quer ir fechar o modal
// TODO: separar essa função 
const menuIcon = document.querySelectorAll(".menuIcon")[0]
menuIcon.addEventListener("click", (e) => {
    document.querySelector("#menuSelect").showModal()
    const closeBtn = document.querySelector("#closeBtn")
    closeBtn.addEventListener("click", () =>{
        document.querySelector("#menuSelect").close()
    })
})