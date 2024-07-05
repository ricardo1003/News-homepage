const headerElement = document.getElementsByTagName("header")[0]
const navButton = document.getElementsByClassName("open-close")[0]
const navMenu = document.getElementsByClassName("menu")[0]
const mainElement = document.getElementsByTagName("main")[0]

navButton.addEventListener("click", ()=>{
    navMenu.classList.toggle("opened")
    mainElement.classList.toggle("opened")
    headerElement.classList.toggle("opened")
})