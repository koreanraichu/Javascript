const colorDiv1 = document.querySelector('.color-div1');
const colorDiv2 = document.querySelector('.color-div2');
const color1 = document.querySelectorAll('.color1');
const color2 = document.querySelectorAll('.color2');
const colorInsert1 = document.querySelector('#colorInput1');
const colorInsert2 = document.querySelector('#colorInput2');
const colorValue1 = document.querySelector('.color-value1');
const colorValue2 = document.querySelector('.color-value2');
const colorButton = document.querySelector('.colorbutton');
var regex = /^(?:[0-9a-f]{3}){1,2}$/i;

colorButton.addEventListener('click', () => {
    if (colorInsert1.value != "" && colorInsert2.value != "") {
        colorDiv1.style.backgroundColor = "#" + colorInsert1.value;
        colorDiv2.style.backgroundColor = "#" + colorInsert2.value;
        color1.forEach(function (item) {
            item.style.color = "#" + colorInsert1.value;
        });
        color2.forEach(function (item) {
            item.style.color = "#" + colorInsert2.value;
        });
        colorValue1.innerText = `background color: ${"#" + colorInsert1.value}/contents color: ${"#" + colorInsert2.value}`;
        colorValue2.innerText = `background color: ${"#" + colorInsert2.value}/contents color: ${"#" + colorInsert1.value}`;
    } else if (!regex.test(colorInsert1.value) || !regex.test(colorInsert2.value)) {
        alert ('유효한 색상값이 아닙니다! ');
    } else {
        alert('두 칸을 전부 채워주세요! ');
    };
});