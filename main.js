

let section = document.querySelectorAll("section");

section.forEach(()=>{
  window.addEventListener("scroll",()=>{
    window.scrollTo(0,0);
  })
})


let darkMode = document.querySelector(".dark");
let content = document.querySelector(".content");
let name = document.querySelector(".information h2");
let pContent = document.querySelector(".information p");
let hippos = document.querySelector(".information .skills p");

let openDark = false;

darkMode.addEventListener("click",()=>{
  if(!openDark){
    darkMode.className = "fa-solid fa-sun dark";
    content.style.backgroundColor = "rgba(3, 0, 41, .6)";
    name.style.color = "#eee";
    pContent.style.color = "#eee";
    hippos.style.color = "#eee";
    openDark = true;
  } else {
    darkMode.className = "fa-solid fa-moon dark";
    content.style.backgroundColor = "rgba(238, 238, 238,.7)";
    name.style.color = "#000";
    pContent.style.color = "#000";
    hippos.style.color = "#000";
    
    openDark = false;
  }
})
