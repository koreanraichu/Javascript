const birthday = document.querySelector('input[type="date"]');
const calButton = document.querySelector('button');
const yourAge = document.createElement('p');
const yourAge_div = document.querySelector('.yourage');

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
    else { //아녀?
        //응 멀었어
        yourAge.innerText = `만 ${todayYear - new Date(birthday.value).getFullYear() - 1}세입니다. `;
        yourAge_div.appendChild(yourAge);
    }
})