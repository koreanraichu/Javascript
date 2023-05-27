let curPos = 0;
let position = 0; 
const IMAGE_WIDTH = 972;
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const images = document.querySelector(".image")
//const는 뭐지? 

function prev() {
    if (curPos > 0) {
        nextBtn.removeAttribute("disabled");
        position += IMAGE_WIDTH;
        images.style.transform = `translateX(${position}px)`;
        curPos = curPos - 1;
    }
    if(curPos == 0){
        nextBtn.removeAttribute("disabled");
        position -= (IMAGE_WIDTH * 5);
        images.style.transform = `translateX(0)px)`;
        curPos = 5;
    }
}
//이전 버튼

function next() {
    if (curPos < 5) {
        prevBtn.removeAttribute("disabled");
        position -= IMAGE_WIDTH;
        images.style.transform = `translateX(${position}px)`;
        curPos = curPos + 1;
    }
    if(curPos == 5){
        prevBtn.removeAttribute("disabled");
        position += (IMAGE_WIDTH * curPos);
        images.style.transform = `translateX(${position}px)`;
        curPos = 0;
    }
}
//다음 버튼

function init(){
    prevBtn.addEventListener("click", prev)
    nextBtn.addEventListener("click", next)
    }
init();