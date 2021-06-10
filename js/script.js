
const navToggleeBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".side-section");
const allSection = document.querySelectorAll(".section");
const totalSection = allSection.length;

navToggleeBtn.addEventListener("click", NavToggler);

function NavToggler(){
    aside.classList.toggle("open");
    navToggleeBtn.classList.toggle("open");

    for(let i=0; i<totalSection; i++){
        allSection[i].classList.toggle("open");
    }
}

const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const totalNavList = navList.length;

for(let i = 0; i < totalNavList; i++){
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(){
        if(window.innerWidth <1200){
            NavToggler();
        }
    })
}
if(window.innerWidth <1200){
    NavToggler();
}
