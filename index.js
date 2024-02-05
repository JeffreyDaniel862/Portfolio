const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelector(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function pageTransitions(){
    //Add active-btn class to active button
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener("click", (e) => {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].classList.remove("active-btn")
            e.target.classList.add("active-btn")

            //Add active class to active section

            const id = e.target.dataset.id;
            sections.forEach(section => section.classList.remove("active"));
            const activeElement = document.getElementById(id);
            activeElement.classList.add("active");
        })
    }

    //Add active to active section
    // allSections.addEventListener("click", e => {
    //     const id = e.target.dataset.id;
    //    if(id){
    //     sections.forEach(section => {
    //         section.classList.remove("active");
    //     })
    //     const activeElement = document.getElementById(id);
    //     activeElement.classList.add("active");
    //    }
    // })

    const themeButton = document.querySelector(".theme-btn");
    themeButton.addEventListener("click", () => {
        let element = document.body;
        element.classList.toggle("light-mode");
    })
}

pageTransitions();

const typed = new Typed(".multiple-text", {
    strings: ["Jeffrey Daniel", "Full-Stack Developer."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});