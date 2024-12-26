var wrapper = document.querySelector('.wrapper');
var cards = document.querySelectorAll('.card');

window.onwheel = scroll;
var scrollValue = 0;

function scroll(e) {
    scrollValue += e.deltaY;
    if (scrollValue > 1) {
        cards.forEach(function (item) {
            item.style.opacity = 1.0;
            item.style.translate = "0px -75px";
        });
    };
    if (scrollValue < 1) {
        cards.forEach(function (item) {
            item.style.opacity = 0.0;
            item.style.translate = "0px 75px";
        });
    };
};