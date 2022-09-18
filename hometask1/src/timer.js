const form = document.querySelector('.timer__form');
const timeInput = document.querySelector('.timer__input');
const format = document.querySelector('.timer__select');
const setBtn = document.querySelector('.timer__set-btn');
const countDown = document.querySelector('.timer__countdown');
const stopBtn = document.querySelector('.timer__stop-btn');
const resetBtn = document.querySelector('.timer__reset-btn');

let countDownInterval;
let secondsLeftms;
let endTime;
let stopBtnClicked = false;

stopBtn.addEventListener('click', () => {
    stopBtnClicked = !stopBtnClicked;
    if (stopBtnClicked === true) {
        stopBtn.innerHTML = 'Старт';
        resetBtn.disabled = false;
        pauseContdown();
        clearInterval();
    } else if (stopBtnClicked === false) {
        stopBtn.innerHTML = 'Стоп';
        resetBtn.disabled = true;
        endTime = secondsLeftms + Date.now();
        countDownInterval = setInterval(() => {
            setCountDown(endTime);
        }, 1000);
    }
});
function pauseContdown() {
    countDown.innerHTML = countDown.innerHTML;
}

resetBtn.addEventListener('click', () => {
    resetCountDown();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let countDownTime = timeInput.value;

    if (countDownTime > 0) {
        if (format.value === 'hours') {
            countDownTime = countDownTime * 3600000;
        } else if (format.value === 'minutes') {
            countDownTime = countDownTime * 60000;
        } else if (format.value === 'seconds') {
            countDownTime = countDownTime * 1000;
        }
        const now = Date.now();
        endTime = now + countDownTime;
        setCountDown(endTime);
        countDownInterval = setInterval(() => {
            setCountDown(endTime);
        }, 1000);
        setBtn.disabled = true;
        stopBtn.disabled = false;
    }
});

const setCountDown = (endTime) => {
    secondsLeftms = endTime - Date.now();
    const secondsLeft = Math.round(secondsLeftms / 1000);

    let hours = Math.floor(secondsLeft / 3600);
    let minutes = Math.floor(secondsLeft / 60) - hours * 60;
    let seconds = secondsLeft % 60;

    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    if (secondsLeft < 0) {
        document.querySelector('.timer__gong').play();
        resetCountDown();
        return;
    }

    countDown.innerHTML = `${hours} : ${minutes} : ${seconds}`;
};

const resetCountDown = () => {
    clearInterval(countDownInterval);
    countDown.innerHTML = '00 : 00 : 00';
    stopBtnClicked = false;
    stopBtn.innerHTML = 'Стоп';
    setBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;
};