import { timerLink } from "./moduleLink.js";

const gong = document.querySelector('.timer__gong');

timerLink.addEventListener('click', () => {
    gong.play();
});
