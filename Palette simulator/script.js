// 빠레트 만들 영역
const cmap_gradation = document.querySelector('.cmap_wrapper');
const cmap_div = document.querySelector('.cmap1');
const cmap_div_light = document.querySelector('.cmap2'); // Light
const cmap_div_dark = document.querySelector('.cmap3'); // Dark
const cmap_div_light2 = document.querySelector('.cmap4'); // Light
const cmap_div_dark2 = document.querySelector('.cmap5'); // Dark
const cmap_div_divl = document.querySelector('.cmap6'); // Diverging(light)
const cmap_div_divd = document.querySelector('.cmap7'); // Diverging(dark)

const palette_gradation = document.querySelector('.palette_wrapper');
const palette_div = document.querySelector('.palette');
// Input
const first_color = document.querySelector('#first_color');
const second_color = document.querySelector('#second_color');

// Button
const color_button = document.querySelector('button');

var regex = /^(?:[0-9a-f]{3}){1,2}$/i; // 유효성검사용 

// 벗흔이여 일을 하세요
color_button.addEventListener('click',()=>{
    const color1 = first_color.value.replace(/#/g, '').trim(); // 응 샵 들어가
    const color2 = second_color.value.replace(/#/g, '').trim(); // 얘도 데려가 
    if (!regex.test(color1) || !regex.test(color2)) {
        alert('유효한 색상값이 아닙니다!');
        console.log("실패한 값:", color1, color2);
    } else {
        palette_div.innerHTML = '';
        cmap_div.innerHTML = '';
        // 칸으로 노나지는 그거 
        const hexToRgb = (hex) => {
            const r = parseInt(hex.substring(0, 2), 16);
            const g = parseInt(hex.substring(2, 4), 16);
            const b = parseInt(hex.substring(4, 6), 16);
            return [r, g, b];
        };
        const startRgb = hexToRgb(color1);
        const endRgb = hexToRgb(color2);
        const n = 10;

        //자 드가자 
        for (let i = 0; i < n; i++) {
            const step = i / (n - 1); // 0부터 1까지의 비율

            // R, G, B 각각 보간 계산
            const r = Math.round(startRgb[0] + (endRgb[0] - startRgb[0]) * step);
            const g = Math.round(startRgb[1] + (endRgb[1] - startRgb[1]) * step);
            const b = Math.round(startRgb[2] + (endRgb[2] - startRgb[2]) * step);

            // 새 div 생성 및 스타일 적용
            const chip = document.createElement('div');
            chip.classList.add('palette_chip'); // CSS에서 너비/높이 설정용
            chip.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            chip.style.flex = "1"; // 10칸이 골고루 나눠지도록

            // 드디어 등장하는 오타 없는 그 녀석
            palette_div.appendChild(chip);
        }
    }
    // 그라데이션
    cmap_div.style.backgroundImage = `linear-gradient(to right, ${"#" + color1}, ${"#" + color2})`; // 왼->오

    // 라이트
    cmap_div_light.style.backgroundImage = `linear-gradient(to right, ${"#" + color1}, #ffffff)`; // 왼->오
    cmap_div_light2.style.backgroundImage = `linear-gradient(to right, ${"#" + color2}, #ffffff)`; // 왼->오 (두번째색)

    // 다크
    cmap_div_dark.style.backgroundImage = `linear-gradient(to right, ${"#" + color1}, #000000)`; // 왼->오
    cmap_div_dark2.style.backgroundImage = `linear-gradient(to right, ${"#" + color2}, #000000)`; // 왼->오 (두번째색)

    //diverging(light)
    cmap_div_divl.style.backgroundImage = `linear-gradient(to right, ${"#" + color1}, #ffffff, ${"#" + color2})`; // 왼->오

    //diverging(dark)
    cmap_div_divd.style.backgroundImage = `linear-gradient(to right, ${"#" + color1}, #000000, ${"#" + color2})`; // 왼->오
    
});