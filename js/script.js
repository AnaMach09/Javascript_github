"use strict"
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })
  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))



  $('.owl-carousel').owlCarousel({
    loop:false,
    singleitem:true,
    video:true,
    autoplay:5000,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        
    }
})






