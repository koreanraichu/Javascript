let curPos = 0;
let position = 0;
const IMAGE_WIDTH = 960;
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const images = document.querySelector(".image");
const dot = document.querySelectorAll('.bar > div');

function prev() {
    if (curPos > 0) {
        nextBtn.removeAttribute("disabled");
        position += IMAGE_WIDTH;
        images.style.transform = `translateX(${position}px)`
        dot[curPos].classList.remove("activate")
        curPos = curPos - 1; 
        dot[curPos].classList.add("activate")
    }
    else if (curPos == 0) {
        nextBtn.removeAttribute("disabled");
        position -= (IMAGE_WIDTH * 6);
        images.style.transform = `translateX(0)px)`
        dot[curPos].classList.remove("activate")
        curPos = 6;
        dot[curPos].classList.add("activate")
    }
}

function next() {
    if (curPos < 9) {
        prevBtn.removeAttribute("disabled");
        position -= IMAGE_WIDTH;
        images.style.transform = `translateX(${position}px)`
        dot[curPos].classList.remove("activate")
        curPos = curPos + 1
        dot[curPos].classList.add("activate")

    }
    else if (curPos == 9) {
        prevBtn.removeAttribute("disabled");
        position += (IMAGE_WIDTH * curPos);
        images.style.transform = `translateX(${position}px)`
        dot[curPos].classList.remove("activate")
        curPos = 0;
        dot[curPos].classList.add("activate")
    }
}

function init() {
    prevBtn.addEventListener("click", prev)
    nextBtn.addEventListener("click", next)
    dot[curPos].classList.add("activate")
}

init();