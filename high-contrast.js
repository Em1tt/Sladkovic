function toggle(){
    document.body.classList.toggle("hc");
}

document.addEventListener("keypress", (event) => {
    console.log(event);
    if(event.key.toLowerCase() == "a" && event.shiftKey){
        console.log("hi");
        toggle();
    }
});