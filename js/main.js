let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollYop> 50){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled")
    }
}
// nav
let navbar = document.querySelectorAll("nav-link");
let navCollapes = document.querySelector("navbar-collapse.collapse");
navbar.forEach(function(e){
    e.addEventListener("click", function(){
        navCollapes.classList.remove("show");

})
})