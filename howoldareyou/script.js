const birthday = document.querySelector('input[type="date"]');
const calButton = document.querySelector('button');
const yourAge = document.createElement('p');
const yourAge_div = document.querySelector('.yourage');
const now = document.querySelector('.nowdate');

// 현재 날짜
const today = new Date;
let todayYear = today.getFullYear();
let todayMonth = today.getMonth() + 1;
let todayDate = today.getDate();

calButton.addEventListener('click',function(event){
    if (todayMonth > new Date(birthday.value).getMonth() + 1) { //현재 날짜의 월이 생일보다 크다면
        //만나이 겟또 
        yourAge.innerText = `만 ${todayYear - new Date(birthday.value).getFullYear()}세입니다. `;
        yourAge_div.appendChild(yourAge);
    }
    else if (todayMonth == new Date(birthday.value).getMonth() + 1 && todayDate >= new Date(birthday.value).getDate()) { //현재 날짜의 월이 생일과 같'고' 현재 날짜의 일이 생일보다 같거나 크다면
        //만나이 겟또
        yourAge.innerText = `만 ${todayYear - new Date(birthday.value).getFullYear()}세입니다. `;
        yourAge_div.appendChild(yourAge);
    }
    else if (todayYear - new Date(birthday.value).getFullYear() -1 < 0) { //생년월일로 미래의 날짜를 입력한다면?
        alert('미래 날짜로 만 나이를 계산할 수 없습니다!') //응 계산 못해요 

    }
    else { //아녀?
        //응 멀었어
        yourAge.innerText = `만 ${todayYear - new Date(birthday.value).getFullYear() - 1}세입니다. `;
        yourAge_div.appendChild(yourAge);
    }
})

now.innerText = `오늘은 ${todayYear}년 ${todayMonth}월 ${todayDate}일입니다. `;
//오늘 날짜 표시란 