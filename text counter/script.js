const inputarea = document.querySelector('#inputarea');
const counter = document.querySelector('.count');

inputarea.addEventListener('keyup',()=>{
    counter.innerText = inputarea.value.length;
});