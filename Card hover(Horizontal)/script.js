const wrapper = document.querySelector('.wrapper');
const cards = document.querySelectorAll('.card');
console.log(cards)
for (let i = 0; i < 3; i++) {
    console.log(getComputedStyle(cards[i]).translateX)
}

window.onwheel = scroll;
var scrollValue = 0;

function scroll(e) {
    scrollValue += e.deltaY;
    if (scrollValue > 1) {
        cards.forEach(function (item) {
            item.style.translate = '0px 0px';
            item.style.opacity = 1;
        });
    };
    if (scrollValue < 1) {
        cards.forEach(function (item) {
            item.style.translate = '-50% 0px';
            item.style.opacity = 0;
        });
    };
};