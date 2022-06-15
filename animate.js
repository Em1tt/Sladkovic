[...document.querySelectorAll(".animate-top")].forEach(element => {
    const delay = element.getAttribute("data-delay");
    //Wait til load
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            element.classList.add("slide-in-top");
        }, parseInt(delay));
    }, false);
});
[...document.querySelectorAll(".animate-right")].forEach(element => {
    const delay = element.getAttribute("data-delay");
    //Wait til load
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            element.classList.add("slide-in-right");
        }, parseInt(delay));
    }, false);
});
[...document.querySelectorAll(".animate-bottom")].forEach(element => {
    const delay = element.getAttribute("data-delay");
    //Wait til load
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            element.classList.add("slide-in-bottom");
        }, parseInt(delay));
    }, false);
});
(() => {
    document.addEventListener("scroll", (event) => {
        const contents = [...document.querySelectorAll(".container")];
        for(element of contents){
            if(isInMiddle(element) && !isPastMiddle(element)){
                if(element.id && !element.classList.contains("activated")){
                    const icon = document.getElementById("fa-"+element.id);
                    icon.classList.add("shown");
                }
                element.classList.add("activated");
            }else{
                try{
                    const icon = document.getElementById("fa-"+element.id);
                    icon.classList.remove("shown");
                }catch(e){
                    e;
                }
                element.classList.remove("activated");
            }
        }
    });
})();

function sectionPastMiddle(element){
    const rect = element.getBoundingClientRect();
    return window.innerHeight/2 > parseInt(rect.top);
}

function isInMiddle(element) {
    const rect = element.getBoundingClientRect();
    return window.innerHeight/2+parseInt(element.clientHeight)/2 > parseInt(rect.top);
}
function isPastMiddle(element) {
    const rect = element.getBoundingClientRect();
    return window.innerHeight/2-parseInt(element.clientHeight)/2 > parseInt(rect.top);
}