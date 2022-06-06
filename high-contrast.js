function toggle(){
    document.body.classList.toggle("hc");
}

const toggleButton = document.querySelector("#hcToggle");

document.addEventListener("keypress", (event) => {
    if(event.key.toLowerCase() == "a" && event.shiftKey){
        toggleButton.checked = toggleButton.checked ? false : true;
        toggle();
    }
});

toggleButton.addEventListener("change", (event) => {
    toggle();
})