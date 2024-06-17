const currentTime = document.querySelector('.currenttime');
const after50 = document.querySelector('.after50');
const after100 = document.querySelector('.after100');
const after200 = document.querySelector('.after200');
const after300 = document.querySelector('.after300');
const ddayCal = document.querySelector('.ddaycal');
const dDay = document.querySelector('.dday');
const ddayButton = document.querySelector('.ddaybutton');

let today = new Date();
let todayYear = today.getFullYear();
let todayMonth = today.getMonth() + 1;
let todayDate = today.getDate();
currentTime.innerText = `현재 날짜는 ${todayYear}년 ${todayMonth}월 ${todayDate}일 입니다. `

var date = new Date();
date.setDate(date.getDate() + 50);
after50.innerText = `현재 날짜에서 50일 후의 날짜는 ${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 입니다. `;

var date = new Date()
date.setDate(date.getDate() + 100)
after100.innerText = `현재 날짜에서 100일 후의 날짜는 ${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 입니다. `;

var date = new Date()
date.setDate(date.getDate() + 200)
after200.innerText = `현재 날짜에서 200일 후의 날짜는 ${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 입니다. `;

var date = new Date()
date.setDate(date.getDate() + 300)
after300.innerText = `현재 날짜에서 300일 후의 날짜는 ${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 입니다. `;

ddayButton.addEventListener('click',(e)=>{
    let endDate = new Date(ddayCal.value);
    let gap = endDate - today;
    gap = Math.floor(gap / (1000 * 60 * 60 * 24));
    console.log(gap)

    if (gap > 0) { //디데이 계산할 날짜가 현재 날짜보다 뒤에 있음
        dDay.innerText = `${ddayCal.value}까지 D-${gap + 1}입니다. `
    }
    else if (endDate.getFullYear() == todayYear && endDate.getMonth() + 1 == todayMonth && endDate.getDate() == todayDate) { //어머 오늘이네
        dDay.innerText = `오늘이 D-day입니다. `
    }
    else { //디데이 계산할 날짜가 현재 날짜보다 앞에 있음
        dDay.innerText = `${ddayCal.value}로부터 D+${(gap + 1) * -1}입니다. `
    }
});
