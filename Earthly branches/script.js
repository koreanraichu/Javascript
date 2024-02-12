const currentTime = document.querySelector(".currenttime");
const earthBranch = document.querySelector(".earthbranches");

function getCurtime() {
    let today = new Date;
    let todayYear = today.getFullYear();
    let todayMonth = today.getMonth() + 1;
    let todayDate = today.getDate();
    let todayHour = today.getHours();
    let todayMinute = today.getMinutes();
    let todaySecond = today.getSeconds();
    currentTime.innerText = `지금은 ${todayYear}년 ${todayMonth}월 ${todayDate}일 ${todayHour}시 ${todayMinute}분 ${todaySecond}초 입니다. `;
}

function getEarthbranch(){
    let today = new Date;
    let todayHour = today.getHours();
    if (todayHour >= 1 && todayHour < 3) {
        earthBranch.innerText = '십이지시로 바꾸면 축(丑)시입니다. '
    }
    else if (todayHour >= 3 && todayHour < 5) {
        earthBranch.innerText = '십이지시로 바꾸면 인(寅)시입니다. '
    }
    else if (todayHour >= 5 && todayHour < 7) {
        earthBranch.innerText = '십이지시로 바꾸면 묘(卯)시입니다. '
    }
    else if (todayHour >= 7 && todayHour < 9) {
        earthBranch.innerText = '십이지시로 바꾸면 진(辰)시입니다. '
    }
    else if (todayHour >= 9 && todayHour < 11) {
        earthBranch.innerText = '십이지시로 바꾸면 사(巳)시입니다. '
    }
    else if (todayHour >= 11 && todayHour < 13) {
        earthBranch.innerText = '십이지시로 바꾸면 오(午)시입니다. '
    }
    else if (todayHour >= 13 && todayHour < 15) {
        earthBranch.innerText = '십이지시로 바꾸면 미(未)시입니다. '
    }
    else if (todayHour >= 15 && todayHour < 17) {
        earthBranch.innerText = '십이지시로 바꾸면 신(申)시입니다. '
    }
    else if (todayHour >= 17 && todayHour < 19) {
        earthBranch.innerText = '십이지시로 바꾸면 유(酉)시입니다. '
    }
    else if (todayHour >= 19 && todayHour < 21) {
        earthBranch.innerText = '십이지시로 바꾸면 술(戌)시입니다. '
    }
    else if (todayHour >= 21 && todayHour < 23) {
        earthBranch.innerText = '십이지시로 바꾸면 해(亥)시입니다. '
    }
    else if (todayHour == 0 && todayMinute == 0) {
        earthBranch.innerText = '십이지시로 바꾸면 자(子)시입니다. 0시 0분이므로 자정이네요. '
    }
    else if (todayHour == 12 && todayMinute == 0) {
        earthBranch.innerText = '십이지시로 바꾸면 오(午)시입니다. 12시 0분이므로 정오네요. '
    }
    else {
        earthBranch.innerText = '십이지시로 바꾸면 자(子)시입니다. '
    }
}

getCurtime();
setInterval(getCurtime, 1000);
getEarthbranch();
setInterval(getEarthbranch, 1000);