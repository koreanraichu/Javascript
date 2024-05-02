const ballInput = document.querySelector('.ballinput');
const ballButton = document.querySelector('.ballbutton');
const ballNewgame = document.querySelector('.newgame');
const ballAnswer = document.querySelector('.answer');
// 입력창이랑 버튼은 바뀌는거 없으니깐 const로 가져왔습니다. 

ballNewgame.disabled = true;
let round = 0;
let strike = 0;
let ball = 0;
// 몇트째인가, 스트라이크, 볼

let numberArray = ['1','2','3','4','5','6','7','8','9'];
let ballQuestion = [];
for (let i = 0;i < 3;i++) {
    let ballPick = [];
    ballPick = numberArray.splice(Math.floor(Math.random() * (numberArray.length - i)),1)[0];
    ballQuestion.push(ballPick);
}
// 배열 만들기

ballButton.addEventListener('click',()=>{
    if (ballInput.value.length != 3) {
        strike = 0; //스트라이크
        ball = 0; //볼
        alert('세 자리 숫자를 입력해주세요! ');
        ballInput.value = '';
    }
    else if (new Set(ballInput.value).size < 3) {
        strike = 0; //스트라이크
        ball = 0; //볼
        alert('숫자는 중복되지 않는 세 자리 숫자입니다. ');
        ballInput.value = '';
    }
    else {
        strike = 0; //스트라이크
        ball = 0; //볼
        round ++;
        for (let i = 0;i < 3;i++) {
            if (ballQuestion[i] == ballInput.value[i]) {
                strike ++;
            }
            else if (ballInput.value.indexOf(ballQuestion[i]) != -1) {
                ball ++;
            }
        };
        if (ball == 0 && strike == 0) {
            let ballText = document.createElement('p');
            ballText.innerText = `Round ${round}: ${ballInput.value}, Out! 😥`;
            ballText.classList.add('nohit');
            ballAnswer.appendChild(ballText);
        }
        else if (strike == 3) {
            let ballText = document.createElement('p');
            ballText.innerText = `Round ${round}: ${ballInput.value}, ${strike}S ${ball}B ⚾`;
            ballText.classList.add('homerun');
            ballAnswer.appendChild(ballText);
            ballNewgame.disabled = false;
            ballNewgame.addEventListener('click',()=>{
                history.go(0);
            });
            
        }
        else {
            let ballText = document.createElement('p');
            ballText.innerText = `Round ${round}: ${ballInput.value}, ${strike}S ${ball}B`;
            ballAnswer.appendChild(ballText);
        }
        ballInput.value = '';
    }
});
//아 정말 힘들다... 

