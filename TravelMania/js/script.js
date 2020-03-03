"use strict";

function responsiveMenu() {
    let toggleMenu = document.querySelector('.toggle-menu');
    let mobileMenu = document.querySelector('.mobile-menu');

    toggleMenu.onclick = (event) => {
        toggleMenu.classList.toggle('active');
        mobileMenu.classList.toggle('d-hide');
    };
}

responsiveMenu();