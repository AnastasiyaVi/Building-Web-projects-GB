const calcLink = document.querySelector('.menu__item-calc');

export const timerLink = document.querySelector('.menu__item-timer');

calcLink.addEventListener('click', () => {
    document.querySelector(".timer__form").style.display = "none"
    document.querySelector(".datecalc").style.display = "inherit"
});

timerLink.addEventListener('click', () => {
    document.querySelector(".datecalc").style.display = "none"
    document.querySelector(".timer__form").style.display = "inherit"
})