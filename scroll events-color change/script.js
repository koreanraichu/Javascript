//Reference: https://velog.io/@minkyeong-ko/Javascript-%EC%8A%A4%ED%81%AC%EB%A1%A4%EC%97%90-%EB%94%B0%EB%A5%B8-%EB%B0%B0%EA%B2%BD%EC%83%89-%EB%B3%80%EA%B2%BD

var colors = ['#000000', '#333333', '#666666', '#999999', '#CCCCCC', '#FFFFFF'];
var wrapper = document.querySelector('.box');
var title = document.getElementsByTagName('h1')[0];
var text = document.querySelector('#text');

wrapper.onwheel = changeColor;

var colorIndex = 0;
var scrollValue = 0;

function changeColor(e) {
    scrollValue += e.deltaY * 0.01;
    if (scrollValue > 10) {
        colorIndex += 1;
        if (colorIndex > colors.length - 1) {
            colorIndex = 0;
        }
        text.innerText = colors[colorIndex];
        wrapper.style.backgroundColor = colors[colorIndex];
        if (colorIndex >= 3) {
            title.style.color = '#000000'
            text.style.color = '#000000';
        }
        scrollValue = 0;
    }

    if (scrollValue < -10) {
        colorIndex -= 1;
        if (colorIndex < 0) {
            colorIndex = colors.length - 1;
        }
        text.innerText = colors[colorIndex];
        wrapper.style.backgroundColor = colors[colorIndex];
        if (colorIndex >= 3) {
            title.style.color = '#000000';
            text.style.color = '#000000';
        }
        scrollValue = 0;
    }
}