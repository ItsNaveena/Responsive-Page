let navbar = document.querySelector('.navbar');
let navbarlist = document.querySelector('.navbarlist');
let navRes = document.querySelector('.navRes');
let navListRes = document.querySelector('.navListRes');
let burger = document.querySelector('.burger');

burger.addEventListener('click', ()=>{

    navbarlist.classList.toggle('navListRes');
    navbar.classList.toggle('navRes');

})


