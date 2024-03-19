// const title = document.querySelector(".about__title li");
// const desc = document.querySelector(".about__main-skills");

// title.addEventListener("click",() =>{
//     desc.classList.toggle("open");
//     title.classList.toggle("open");
// })
const title = document.querySelector(".about__title li");
const desc = document.querySelector(".about__main-skills");
const des = document.querySelector(".awards");
const de = document.querySelector(".exp");
const d = document.querySelector(".educ");


let timeoutId;

title.addEventListener("mouseenter", () => {
  timeoutId = setTimeout(() => {
    desc.classList.add("open");
    title.classList.add("open");
    des.classList.add("open");
    de.classList.add("open");
    d.classList.add("open");
  }, 180); // Adjust the delay time (in milliseconds) as needed
});

title.addEventListener("mouseleave", () => {
  clearTimeout(timeoutId);
  desc.classList.remove("open");
  title.classList.remove("open");
  des.classList.remove("open");
    de.classList.remove("open");
    d.classList.remove("open");
});

