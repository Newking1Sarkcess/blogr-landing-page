const navUl = document.querySelector("nav ul");

const menuOpen = document.getElementById("hamburger");

const closeMenu = document.getElementById("icon-close");


menuOpen.addEventListener('click', ()=>{
    navUl.classList.toggle("openMenu");
    if(navUl.classList.contains("openMenu")){
        menuOpen.classList.add("hide")
        closeMenu.classList.add("show");
        closeMenu.addEventListener('click', ()=>{
            closeMenu.classList.remove("show")
            navUl.classList.remove("openMenu")
            menuOpen.classList.remove("hide")

        })
    }
       
})  

