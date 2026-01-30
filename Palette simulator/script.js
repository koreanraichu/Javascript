// 빠레트 만들 영역
const cmap_gradation = document.querySelector('.cmap_wrapper');
const cmap_div = document.querySelector('.cmap');
const palette_gradation = document.querySelector('.palette_wrapper');
const palette_div = document.querySelector('.palette');
// Input
const first_color = document.querySelector('#first_color');
const second_color = document.querySelector('#second_color');

const color_button = document.querySelector('button'); // Button

var regex = /^(?:[0-9a-f]{3}){1,2}$/i; // 유효성검사용 

// 벗흔이여 일을 하세요
color_button.addEventListener('click',()=>{
    if (!regex.test(first_color.value) || !regex.test(second_color.value)) {
        alert('유효한 색상값이 아닙니다!')
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
        const startRgb = hexToRgb(first_color.value);
        const endRgb = hexToRgb(second_color.value);
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
    cmap_div.style.backgroundImage = `linear-gradient(to right, ${"#" + first_color.value}, ${"#" + second_color.value})`; // 왼->오
    
});