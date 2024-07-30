const colorDiv1 = document.querySelector('.color-div1');
const colorDiv2 = document.querySelector('.color-div2');
const colorDiv3 = document.querySelector('.color-div3');
const colorDiv4 = document.querySelector('.color-div4');
const colorInsert1 = document.querySelector('#colorInput1');
const colorInsert2 = document.querySelector('#colorInput2');
const colorValue1 = document.querySelector('.color-value1');
const colorValue2 = document.querySelector('.color-value2');
const colorValue3 = document.querySelector('.color-value3');
const colorValue4 = document.querySelector('.color-value4');
const colorButton = document.querySelector('.colorbutton');
var regex = /^(?:[0-9a-f]{3}){1,2}$/i;

colorButton.addEventListener('click', () => {
    if (colorInsert1.value != "" && colorInsert2.value != "") {
        colorDiv1.style.backgroundImage = `linear-gradient(${"#" + colorInsert1.value}, ${"#" + colorInsert2.value})`;
        colorDiv2.style.backgroundImage = `linear-gradient(${"#" + colorInsert2.value}, ${"#"+ colorInsert1.value})`;
        colorDiv3.style.backgroundImage = `linear-gradient(to right, ${"#" + colorInsert1.value}, ${"#" + colorInsert2.value})`;
        colorDiv4.style.backgroundImage = `linear-gradient(to right, ${"#" + colorInsert2.value}, ${"#"+ colorInsert1.value})`;
        //그라데이션(3, 4는 90도 눕혀서)\

        colorDiv1.style.border = `1px solid ${"#" + colorInsert1.value}`;
        colorDiv2.style.border = `1px solid ${"#" + colorInsert1.value}`;
        colorDiv3.style.border = `1px solid ${"#" + colorInsert1.value}`;
        colorDiv4.style.border = `1px solid ${"#" + colorInsert1.value}`;
        //테두리(첫 번째 색으로)
        colorValue1.innerText = `Start color: ${"#" + colorInsert1.value}/End color: ${"#" + colorInsert2.value}`;
        colorValue2.innerText = `Start color: ${"#" + colorInsert2.value}/End color: ${"#" + colorInsert1.value}`;
        colorValue3.innerText = `To right, Start color: ${"#" + colorInsert1.value}/End color: ${"#" + colorInsert2.value}`;
        colorValue4.innerText = `To right, Start color: ${"#" + colorInsert2.value}/End color: ${"#" + colorInsert1.value}`;
    } else if (!regex.test(colorInsert1.value) || !regex.test(colorInsert2.value)) {
        alert ('유효한 색상값이 아닙니다! ');
    } else {
        alert('두 칸을 전부 채워주세요! ');
    };
});