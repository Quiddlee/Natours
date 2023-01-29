'use strict';

window.addEventListener('DOMContentLoaded', () => {
    // Popup
    const popup = document.querySelector('.popup');
    const popupClose = document.querySelector('.popup__close');

    popup.addEventListener('click', (event) => {
        const target = event.target;

        if (event && target.id === 'popup') {
            popupClose.click();
        }
    });

    // Navigation
    const navMenu = document.querySelector('.navigation__nav');
    const navBtn = document.querySelector('.navigation__button');

    navMenu.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.className === 'navigation__link') {
            console.log('wassup')
            navBtn.click();
        }
    });
});
