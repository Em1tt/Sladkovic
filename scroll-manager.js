window.addEventListener("scroll", (event) => {
    if(window.scrollY == 0){
        document.querySelector("nav").classList.remove("scrolled");
    }else{
        document.querySelector("nav").classList.add("scrolled");
    }
})