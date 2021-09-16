var burger = document.querySelector(".hamburgermenu");
var bars = document.querySelector(".fa-bars");
var menu = document.querySelector(".slidermenu");
var ullist = document.querySelector(".slidermenu ul");


burger.addEventListener("click", function(){
    bars.classList.toggle("fa-times");
    menu.classList.toggle("menushow");
    ullist.classList.toggle("ulshown");

})

