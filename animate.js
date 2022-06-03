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
})