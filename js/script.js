let active = document.getElementById("active");
let menu = document.getElementById("menu");
let logo = document.getElementById("logo");
let logoList = document.getElementById("logo").classList;

let i = 0;

active.addEventListener('click', function()  {
  i == 0 ? i++ : i = 0

  if(i == 1) {
    logo.style.display = "none";
    menu.style.display = "block";
    
} else {
    menu.style.display = "none";
   
}
})

