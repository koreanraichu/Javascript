//Reference: https://velog.io/@minkyeong-ko/Javascript-%EC%8A%A4%ED%81%AC%EB%A1%A4%EC%97%90-%EB%94%B0%EB%A5%B8-%EB%B0%B0%EA%B2%BD%EC%83%89-%EB%B3%80%EA%B2%BD

function makeArr(startValue, stopValue, cardinality) {
    var arr = [];
    var step = (stopValue - startValue) / (cardinality - 1);
    for (var i = 0; i < cardinality; i++) {
        arr.push(startValue + (step * i));
    }
    return arr;
}

var colors = [];
var red = makeArr(65, 53, 8);
var green = makeArr(184, 73, 8);
var blue = makeArr(131, 94, 8);

for (let i = 0; i < red.length; i++) {
    var red_grad = (Math.floor(red[i]).toString(16).padStart(2, '0'))
    var green_grad = (Math.floor(green[i]).toString(16).padStart(2, '0'))
    var blue_grad = (Math.floor(blue[i]).toString(16).padStart(2, '0'))
    var color_code = '#' + red_grad + green_grad + blue_grad
    colors.push(color_code)
}

var wrapper = document.querySelector('.box');
var title = document.getElementsByTagName('h1')[0];
var text = document.querySelector('#text');

wrapper.onwheel = changeColor;

var colorIndex = 0;
var scrollValue = 0;

function changeColor(e) {
    scrollValue += e.deltaY * 0.01;
    if (scrollValue > 8) {
        colorIndex += 1;
        if (colorIndex > colors.length - 1) {
            colorIndex = 0;
        }
        text.innerText = colors[colorIndex];
        wrapper.style.backgroundColor = colors[colorIndex];
        scrollValue = 0;
    }

    if (scrollValue < -8) {
        colorIndex -= 1;
        if (colorIndex < 0) {
            colorIndex = colors.length - 1;
        }
        text.innerText = colors[colorIndex];
        wrapper.style.backgroundColor = colors[colorIndex];
        scrollValue = 0;
    }
}