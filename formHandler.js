const quiz = document.querySelector("#kvizForm");
let finished = false;
quiz.addEventListener("submit", (event) => {
    event.preventDefault();
    [...document.querySelectorAll("input:checked")].forEach(element => {
        try{
        if(element.classList.contains("correct")) return;
        const label = document.querySelector(`#${element.id} ~ label`);
        label.style = "border-color: red;";
        const name = document.querySelector(`#${element.parentElement.id} ~ label`);
        name.style = "color: red";
        }catch(e){
            e;
        }
    });
    const correct = [...document.querySelectorAll("input:checked")].filter(element => {
        return element.classList.contains("correct");
    }).length
    Swal.fire({
        title: 'Hodnotenie',
        text: `Úspešnosť: ${correct}/8 | ${Math.floor(correct/8*100)}%`,
        icon: 'success',
        confirmButtonText: 'Cool',
        preConfirm: () => {
            if(finished) return;
            finished = true;
            document.querySelector("end").style = "display: grid; transition: 1s ease; opacity: 1;";
            document.querySelector("end h2").classList.add("slide-to-top");
            setTimeout(() => {
                document.querySelector("end").style = "display: grid; transition: 2s ease; opacity: 0;";
            }, 10000);
            setTimeout(() => {
                document.querySelector("end").style = "";
            },12000);
        }
      })
});