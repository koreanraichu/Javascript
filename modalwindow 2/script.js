const modalBtn = document.querySelector('#modal-btn');
const modalClose = document.querySelector('#modal-close');
const modalLayer = document.querySelector('.modal-overlay');
//모달 배경(모달창 열렸을 때 뒷배경을 살짝 블러처리 해 주는 무언가)과 버튼(모달 호출, 모달 닫기)

modalBtn.addEventListener('click',()=>{
    modalLayer.style.display = "flex";
});

modalClose.addEventListener('click',()=>{
    modalLayer.style.display = "none";
});

modalLayer.addEventListener('click',(e)=>{
    const eTarget = e.target;
    if (eTarget.classList.contains("modal-overlay")) {
        modalLayer.style.display = "none";
    }
});

window.addEventListener('keyup',(e)=>{
    if(modalLayer.style.display == "flex" && e.key == "Escape") {
        modalLayer.style.display = "none";
    }
});

window.addEventListener('keyup',(e)=>{
    if(e.key == "Enter") {
        modalLayer.style.display = "flex";
    }
});