// const title = document.querySelector(".about__title li");
// const desc = document.querySelector(".about__main-skills");

// title.addEventListener("click",() =>{
//     desc.classList.toggle("open");
//     title.classList.toggle("open");
// })
const title = document.querySelector(".about__title li");
const desc = document.querySelector(".about__main-skills");

title.addEventListener("mouseenter", () => {
    desc.classList.add("open");
    title.classList.add("open");
});

title.addEventListener("mouseleave", () => {
    desc.classList.remove("open");
    title.classList.remove("open");
});
