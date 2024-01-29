const buttons = document.querySelectorAll("button");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const numBtn = document.querySelectorAll(".numBtn");
// 순서대로 1. 모든 버튼'들'. 2. 더하기 빼기 곱하기 나누기 =, 3. 결과창, 4. 숫자 버튼

let operatorOn = '';
let prevNum = '';
let nextNum = '';
//순서대로 연산자, 앞의 숫자, 뒤의 숫자

let calculate = (n1, operator, n2) => {
    let result = 0;
    switch (operator) {
        case '+':
            result = prevNum + nextNum;
            break;
        case '-':
            result = prevNum - nextNum;
            break;
        case 'X':
            result = prevNum * nextNum;
            break;
        case '/':
            result = prevNum / nextNum;
            break;
        default:
            break;
    }
    return String(result);
}
//입력받은 값을 연산자에 따라 계산한다

let calculator = () => {
    let isFirstDigit = true;

    buttons.forEach((item) => {
        item.addEventListener('click', (e) => {
            let action = e.target.classList[0];
            let click = e.target.innerHTML;

            if (action === 'operator') {
                operatorOn = click;
                prevNum = display.textContent;
                display.textContent = '';
                isFirstDigit = true;
            }
            if (action === 'numBtn') {
                if (isFirstDigit && click === '0') {
                    return;
                }

                if (display.textContent === '' && operatorOn === '') {
                    display.textContent = click;
                    prevNum = display.textContent;
                } else if (display.textContent !== '' && operatorOn === '') {
                    display.textContent = display.textContent + click;
                    prevNum = display.textContent;
                } else if (display.textContent === '' && operatorOn !== '') {
                    display.textContent = click;
                    nextNum = display.textContent;
                } else if (display.textContent !== '' && operatorOn !== '') {
                    display.textContent = display.textContent + click;
                    nextNum = display.textContent;
                }
                isFirstDigit = false;
            }
            if (action === 'result') {
                display.textContent = calculate(prevNum, operatorOn, nextNum);
                isFirstDigit = true;
            }

            if (action === 'ac') {
                display.textContent = '';
                prevNum = '';
                operatorOn = '';
                nextNum = '';
                isFirstDigit = true;
            }
        });
    });
};

calculator();
