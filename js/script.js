
const navToggleeBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".side-section");
const allSection = document.querySelectorAll(".section");
const totalSection = allSection.length;

navToggleeBtn.addEventListener("click", () =>{
    NavToggler();
})

function NavToggler(){
    aside.classList.toggle("open");
    navToggleeBtn.classList.toggle("open");

    for(let i=0; i<totalSection; i++){
        allSection[i].classList.toggle("open");
    }
}
