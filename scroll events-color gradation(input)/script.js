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
var invert_colors = [];

const button = document.getElementById('confirm');
button.addEventListener('click', () => {
    makeColor()
})

function makeColor() {
    var startcolor = document.getElementById('startcolor').value;
    var endcolor = document.getElementById('endcolor').value;

    var start_red = startcolor.substr(0, 2);
    start_red = parseInt(start_red, 16);
    var invert_start_red = 255 - start_red;
    var end_red = endcolor.substr(0, 2);
    end_red = parseInt(end_red, 16);
    var invert_end_red = 255 - end_red;

    var start_green = startcolor.substr(2, 2);
    start_green = parseInt(start_green, 16);
    var invert_start_green = 255 - start_green;
    var end_green = endcolor.substr(2, 2);
    end_green = parseInt(end_green, 16);
    var invert_end_green = 255 - end_green;

    var start_blue = startcolor.substr(4, 2);
    start_blue = parseInt(start_blue, 16);
    var invert_start_blue = 255 - start_blue;
    var end_blue = endcolor.substr(4, 2);
    end_blue = parseInt(end_blue, 16);
    var invert_end_blue = 255 - end_blue;

    var red = makeArr(start_red, end_red, 10);
    var invert_red = makeArr(invert_start_red, invert_end_red, 10);
    var green = makeArr(start_green, end_green, 10);
    var invert_green = makeArr(invert_start_green, invert_end_green, 10);
    var blue = makeArr(start_blue, end_blue, 10);
    var invert_blue = makeArr(invert_start_blue, invert_end_blue, 10);

    for (let i = 0; i < red.length; i++) {
        var red_grad = (Math.floor(red[i]).toString(16).padStart(2, '0'));
        var invert_red_grad = (Math.floor(invert_red[i]).toString(16).padStart(2, '0'));
        var green_grad = (Math.floor(green[i]).toString(16).padStart(2, '0'));
        var invert_green_grad = (Math.floor(invert_green[i]).toString(16).padStart(2, '0'));
        var blue_grad = (Math.floor(blue[i]).toString(16).padStart(2, '0'));
        var invert_blue_grad = (Math.floor(invert_blue[i]).toString(16).padStart(2, '0'));
        var color_code = '#' + red_grad + green_grad + blue_grad;
        var invert_color_code = '#' + invert_red_grad + invert_green_grad + invert_blue_grad;
        console.log(color_code, invert_color_code)
        colors.push(color_code)
        invert_colors.push(invert_color_code)
    }

    text.innerText = colors[colorIndex];
    text.style.color = invert_colors[colorIndex];
    title.style.color = invert_colors[colorIndex];
    button.style.color = colors[colorIndex];
    button.style.backgroundColor = invert_colors[colorIndex];
    wrapper.style.backgroundColor = colors[colorIndex];
    for (let i = 0; i < label.length; i++) {
        label[i].style.color = invert_colors[colorIndex]
    }
    for (let i = 0; i < input.length; i++) {
        input[i].style.border = '2px solid' + invert_colors[colorIndex];
    }

    return colors, invert_colors
}

var wrapper = document.querySelector('.box');
var title = document.getElementsByTagName('h1')[0];
var text = document.querySelector('#text');
var label = document.querySelectorAll('label');
var input = document.querySelectorAll('input');

wrapper.onwheel = changeColor;

var colorIndex = 0;
var scrollValue = 0;

function changeColor(e) {
    scrollValue += e.deltaY * 0.01;
    if (scrollValue > 5) {
        colorIndex += 1;
        if (colorIndex > colors.length - 1) {
            colorIndex = 0;
        }
        text.innerText = colors[colorIndex];
        text.style.color = invert_colors[colorIndex];
        title.style.color = invert_colors[colorIndex];
        wrapper.style.backgroundColor = colors[colorIndex];
        button.style.color = colors[colorIndex];
        button.style.backgroundColor = invert_colors[colorIndex];
        for (let i = 0; i < label.length; i++) {
            label[i].style.color = invert_colors[colorIndex]
        }
        for (let i = 0; i < input.length; i++) {
            input[i].style.border = '2px solid' + invert_colors[colorIndex];
        }
        scrollValue = 0;
    }

    if (scrollValue < -5) {
        colorIndex -= 1;
        if (colorIndex < 0) {
            colorIndex = colors.length - 1;
        }
        text.innerText = colors[colorIndex];
        text.style.color = invert_colors[colorIndex];
        title.style.color = invert_colors[colorIndex];
        wrapper.style.backgroundColor = colors[colorIndex];
        button.style.color = colors[colorIndex];
        button.style.backgroundColor = invert_colors[colorIndex];
        for (let i = 0; i < label.length; i++) {
            label[i].style.color = invert_colors[colorIndex]
        }
        for (let i = 0; i < input.length; i++) {
            input[i].style.border = '2px solid' + invert_colors[colorIndex];
        }
        scrollValue = 0;
    }
}