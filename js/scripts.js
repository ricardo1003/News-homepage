const headerElement = document.getElementsByTagName("header")[0]
const navButton = document.getElementsByClassName("open-close")[0]
const navMenu = document.getElementsByClassName("menu")[0]
const mainElement = document.getElementsByTagName("main")[0]

navButton.addEventListener("click", ()=>{
    headerElement.classList.toggle("opened")
    navMenu.classList.toggle("opened")
    mainElement.classList.toggle("opened")

    headerElement.classList.toggle("closed")
    if(navMenu.classList.contains("opened")){
        navMenu.classList.remove("closed")
    }else{
        navMenu.classList.add("closed")
    }
    mainElement.classList.toggle("closed")
})