let date = new Date();

var lunarMonthTable = [
    [2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2],
    [1, 2, 1, 1, 2, 1, 2, 5, 2, 2, 1, 2],
    [1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 2, 1],   /* 1901 */
    [2, 1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 2],
    [1, 2, 1, 2, 3, 2, 1, 1, 2, 2, 1, 2],
    [2, 2, 1, 2, 1, 1, 2, 1, 1, 2, 2, 1],
    [2, 2, 1, 2, 2, 1, 1, 2, 1, 2, 1, 2],
    [1, 2, 2, 4, 1, 2, 1, 2, 1, 2, 1, 2],
    [1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1],
    [2, 1, 1, 2, 2, 1, 2, 1, 2, 2, 1, 2],
    [1, 5, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2],
    [1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 2, 1],
    [2, 1, 2, 1, 1, 5, 1, 2, 2, 1, 2, 2],   /* 1911 */
    [2, 1, 2, 1, 1, 2, 1, 1, 2, 2, 1, 2],
    [2, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2],
    [2, 2, 1, 2, 5, 1, 2, 1, 2, 1, 1, 2],
    [2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    [1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1],
    [2, 3, 2, 1, 2, 2, 1, 2, 2, 1, 2, 1],
    [2, 1, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2],
    [1, 2, 1, 1, 2, 1, 5, 2, 2, 1, 2, 2],
    [1, 2, 1, 1, 2, 1, 1, 2, 2, 1, 2, 2],
    [2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 2],   /* 1921 */
    [2, 1, 2, 2, 3, 2, 1, 1, 2, 1, 2, 2],
    [1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2],
    [2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 1],
    [2, 1, 2, 5, 2, 1, 2, 2, 1, 2, 1, 2],
    [1, 1, 2, 1, 2, 1, 2, 2, 1, 2, 2, 1],
    [2, 1, 1, 2, 1, 2, 1, 2, 2, 1, 2, 2],
    [1, 5, 1, 2, 1, 1, 2, 2, 1, 2, 2, 2],
    [1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 2],
    [1, 2, 2, 1, 1, 5, 1, 2, 1, 2, 2, 1],
    [2, 2, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1],   /* 1931 */
    [2, 2, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2],
    [1, 2, 2, 1, 6, 1, 2, 1, 2, 1, 1, 2],
    [1, 2, 1, 2, 2, 1, 2, 2, 1, 2, 1, 2],
    [1, 1, 2, 1, 2, 1, 2, 2, 1, 2, 2, 1],
    [2, 1, 4, 1, 2, 1, 2, 1, 2, 2, 2, 1],
    [2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 2, 1],
    [2, 2, 1, 1, 2, 1, 4, 1, 2, 2, 1, 2],
    [2, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1, 2],
    [2, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1],
    [2, 2, 1, 2, 2, 4, 1, 1, 2, 1, 2, 1],   /* 1941 */
    [2, 1, 2, 2, 1, 2, 2, 1, 2, 1, 1, 2],
    [1, 2, 1, 2, 1, 2, 2, 1, 2, 2, 1, 2],
    [1, 1, 2, 4, 1, 2, 1, 2, 2, 1, 2, 2],
    [1, 1, 2, 1, 1, 2, 1, 2, 2, 2, 1, 2],
    [2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 1, 2],
    [2, 5, 1, 2, 1, 1, 2, 1, 2, 1, 2, 2],
    [2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2],
    [2, 2, 1, 2, 1, 2, 3, 2, 1, 2, 1, 2],
    [2, 1, 2, 2, 1, 2, 1, 1, 2, 1, 2, 1],
    [2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2],   /* 1951 */
    [1, 2, 1, 2, 4, 2, 1, 2, 1, 2, 1, 2],
    [1, 2, 1, 1, 2, 2, 1, 2, 2, 1, 2, 2],
    [1, 1, 2, 1, 1, 2, 1, 2, 2, 1, 2, 2],
    [2, 1, 4, 1, 1, 2, 1, 2, 1, 2, 2, 2],
    [1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2, 2],
    [2, 1, 2, 1, 2, 1, 1, 5, 2, 1, 2, 2],
    [1, 2, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2],
    [1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
    [2, 1, 2, 1, 2, 5, 2, 1, 2, 1, 2, 1],
    [2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2],   /* 1961 */
    [1, 2, 1, 1, 2, 1, 2, 2, 1, 2, 2, 1],
    [2, 1, 2, 3, 2, 1, 2, 1, 2, 2, 2, 1],
    [2, 1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 2],
    [1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 2, 2],
    [1, 2, 5, 2, 1, 1, 2, 1, 1, 2, 2, 1],
    [2, 2, 1, 2, 2, 1, 1, 2, 1, 2, 1, 2],
    [1, 2, 2, 1, 2, 1, 5, 2, 1, 2, 1, 2],
    [1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1],
    [2, 1, 1, 2, 2, 1, 2, 1, 2, 2, 1, 2],
    [1, 2, 1, 1, 5, 2, 1, 2, 2, 2, 1, 2],   /* 1971 */
    [1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 2, 1],
    [2, 1, 2, 1, 1, 2, 1, 1, 2, 2, 2, 1],
    [2, 2, 1, 5, 1, 2, 1, 1, 2, 2, 1, 2],
    [2, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2],
    [2, 2, 1, 2, 1, 2, 1, 5, 2, 1, 1, 2],
    [2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 1],
    [2, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1],
    [2, 1, 1, 2, 1, 6, 1, 2, 2, 1, 2, 1],
    [2, 1, 1, 2, 1, 2, 1, 2, 2, 1, 2, 2],
    [1, 2, 1, 1, 2, 1, 1, 2, 2, 1, 2, 2],   /* 1981 */
    [2, 1, 2, 3, 2, 1, 1, 2, 2, 1, 2, 2],
    [2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 2],
    [2, 1, 2, 2, 1, 1, 2, 1, 1, 5, 2, 2],
    [1, 2, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2],
    [1, 2, 2, 1, 2, 2, 1, 2, 1, 2, 1, 1],
    [2, 1, 2, 2, 1, 5, 2, 2, 1, 2, 1, 2],
    [1, 1, 2, 1, 2, 1, 2, 2, 1, 2, 2, 1],
    [2, 1, 1, 2, 1, 2, 1, 2, 2, 1, 2, 2],
    [1, 2, 1, 1, 5, 1, 2, 1, 2, 2, 2, 2],
    [1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 2],   /* 1991 */
    [1, 2, 2, 1, 1, 2, 1, 1, 2, 1, 2, 2],
    [1, 2, 5, 2, 1, 2, 1, 1, 2, 1, 2, 1],
    [2, 2, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2],
    [1, 2, 2, 1, 2, 2, 1, 5, 2, 1, 1, 2],
    [1, 2, 1, 2, 2, 1, 2, 1, 2, 2, 1, 2],
    [1, 1, 2, 1, 2, 1, 2, 2, 1, 2, 2, 1],
    [2, 1, 1, 2, 3, 2, 2, 1, 2, 2, 2, 1],
    [2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 2, 1],
    [2, 2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 1],
    [2, 2, 2, 3, 2, 1, 1, 2, 1, 2, 1, 2],   /* 2001 */
    [2, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1],
    [2, 2, 1, 2, 2, 1, 2, 1, 1, 2, 1, 2],
    [1, 5, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    [1, 2, 1, 2, 1, 2, 2, 1, 2, 2, 1, 1],
    [2, 1, 2, 1, 2, 1, 5, 2, 2, 1, 2, 2],
    [1, 1, 2, 1, 1, 2, 1, 2, 2, 2, 1, 2],
    [2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 1, 2],
    [2, 2, 1, 1, 5, 1, 2, 1, 2, 1, 2, 2],
    [2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2],
    [2, 1, 2, 2, 1, 2, 1, 1, 2, 1, 2, 1],   /* 2011 */
    [2, 1, 6, 2, 1, 2, 1, 1, 2, 1, 2, 1],
    [2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    [1, 2, 1, 2, 1, 2, 1, 2, 5, 2, 1, 2],
    [1, 2, 1, 1, 2, 1, 2, 2, 2, 1, 2, 1],
    [2, 1, 2, 1, 1, 2, 1, 2, 2, 1, 2, 2],
    [2, 1, 1, 2, 3, 2, 1, 2, 1, 2, 2, 2],
    [1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2, 2],
    [2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2],
    [2, 1, 2, 5, 2, 1, 1, 2, 1, 2, 1, 2],
    [1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],   /* 2021 */
    [2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2],
    [1, 5, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2],
    [1, 2, 1, 1, 2, 1, 2, 2, 1, 2, 2, 1],
    [2, 1, 2, 1, 1, 5, 2, 1, 2, 2, 2, 1],
    [2, 1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 2],
    [1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 2, 2],
    [1, 2, 2, 1, 5, 1, 2, 1, 1, 2, 2, 1],
    [2, 2, 1, 2, 2, 1, 1, 2, 1, 1, 2, 2],
    [1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1],
    [2, 1, 5, 2, 1, 2, 2, 1, 2, 1, 2, 1],   /* 2031 */
    [2, 1, 1, 2, 1, 2, 2, 1, 2, 2, 1, 2],
    [1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 5, 2],
    [1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 2, 1],
    [2, 1, 2, 1, 1, 2, 1, 1, 2, 2, 1, 2],
    [2, 2, 1, 2, 1, 4, 1, 1, 2, 2, 1, 2],
    [2, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2],
    [2, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1],
    [2, 2, 1, 2, 5, 2, 1, 2, 1, 2, 1, 1],
    [2, 1, 2, 2, 1, 2, 2, 1, 2, 1, 2, 1],
    [2, 1, 1, 2, 1, 2, 2, 1, 2, 2, 1, 2],   /* 2041 */
    [1, 5, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2],
    [1, 2, 1, 1, 2, 1, 1, 2, 2, 1, 2, 2]];

function myDate(year, month, day, leapMonth) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.leapMonth = leapMonth;
}

function lunarCalc(year, month, day, type, leapmonth) {
    var solYear, solMonth, solDay;
    var lunYear, lunMonth, lunDay;
    var lunLeapMonth, lunMonthDay;
    var i, lunIndex;

    var solMonthDay = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    /* range check */
    if (year < 1900 || year > 2040) {
        alert('1900년부터 2040년까지만 지원합니다');
        return;
    }

    /* 속도 개선을 위해 기준 일자를 여러개로 한다 */
    if (year >= 2000) {
        /* 기준일자 양력 2000년 1월 1일 (음력 1999년 11월 25일) */
        solYear = 2000;
        solMonth = 1;
        solDay = 1;
        lunYear = 1999;
        lunMonth = 11;
        lunDay = 25;
        lunLeapMonth = 0;

        solMonthDay[1] = 29;    /* 2000 년 2월 28일 */
        lunMonthDay = 30;   /* 1999년 11월 */
    }
    else if (year >= 1970) {
        /* 기준일자 양력 1970년 1월 1일 (음력 1969년 11월 24일) */
        solYear = 1970;
        solMonth = 1;
        solDay = 1;
        lunYear = 1969;
        lunMonth = 11;
        lunDay = 24;
        lunLeapMonth = 0;

        solMonthDay[1] = 28;    /* 1970 년 2월 28일 */
        lunMonthDay = 30;   /* 1969년 11월 */
    }
    else if (year >= 1940) {
        /* 기준일자 양력 1940년 1월 1일 (음력 1939년 11월 22일) */
        solYear = 1940;
        solMonth = 1;
        solDay = 1;
        lunYear = 1939;
        lunMonth = 11;
        lunDay = 22;
        lunLeapMonth = 0;

        solMonthDay[1] = 29;    /* 1940 년 2월 28일 */
        lunMonthDay = 29;   /* 1939년 11월 */
    }
    else {
        /* 기준일자 양력 1900년 1월 1일 (음력 1899년 12월 1일) */
        solYear = 1900;
        solMonth = 1;
        solDay = 1;
        lunYear = 1899;
        lunMonth = 12;
        lunDay = 1;
        lunLeapMonth = 0;

        solMonthDay[1] = 28;    /* 1900 년 2월 28일 */
        lunMonthDay = 30;   /* 1899년 12월 */
    }

    lunIndex = lunYear - 1899;

    while (true) {

        if (type == 1 &&
            year == solYear &&
            month == solMonth &&
            day == solDay) {
            return new myDate(lunYear, lunMonth, lunDay, lunLeapMonth);
        }
        else if (type == 2 &&
            year == lunYear &&
            month == lunMonth &&
            day == lunDay &&
            leapmonth == lunLeapMonth) {
            return new myDate(solYear, solMonth, solDay, 0);
        }

        /* add a day of solar calendar */
        if (solMonth == 12 && solDay == 31) {
            solYear++;
            solMonth = 1;
            solDay = 1;

            /* set monthDay of Feb */
            if (solYear % 400 == 0)
                solMonthDay[1] = 29;
            else if (solYear % 100 == 0)
                solMonthDay[1] = 28;
            else if (solYear % 4 == 0)
                solMonthDay[1] = 29;
            else
                solMonthDay[1] = 28;

        }
        else if (solMonthDay[solMonth - 1] == solDay) {
            solMonth++;
            solDay = 1;
        }
        else
            solDay++;

        /* add a day of lunar calendar */
        if (lunMonth == 12 &&
            ((lunarMonthTable[lunIndex][lunMonth - 1] == 1 && lunDay == 29) ||
                (lunarMonthTable[lunIndex][lunMonth - 1] == 2 && lunDay == 30))) {
            lunYear++;
            lunMonth = 1;
            lunDay = 1;

            if (lunYear > 2043) {
                alert("입력하신 달은 없습니다.");
                break;
            }

            lunIndex = lunYear - 1899;

            if (lunarMonthTable[lunIndex][lunMonth - 1] == 1)
                lunMonthDay = 29;
            else if (lunarMonthTable[lunIndex][lunMonth - 1] == 2)
                lunMonthDay = 30;
        }
        else if (lunDay == lunMonthDay) {
            if (lunarMonthTable[lunIndex][lunMonth - 1] >= 3
                && lunLeapMonth == 0) {
                lunDay = 1;
                lunLeapMonth = 1;
            }
            else {
                lunMonth++;
                lunDay = 1;
                lunLeapMonth = 0;
            }

            if (lunarMonthTable[lunIndex][lunMonth - 1] == 1)
                lunMonthDay = 29;
            else if (lunarMonthTable[lunIndex][lunMonth - 1] == 2)
                lunMonthDay = 30;
            else if (lunarMonthTable[lunIndex][lunMonth - 1] == 3)
                lunMonthDay = 29;
            else if (lunarMonthTable[lunIndex][lunMonth - 1] == 4 &&
                lunLeapMonth == 0)
                lunMonthDay = 29;
            else if (lunarMonthTable[lunIndex][lunMonth - 1] == 4 &&
                lunLeapMonth == 1)
                lunMonthDay = 30;
            else if (lunarMonthTable[lunIndex][lunMonth - 1] == 5 &&
                lunLeapMonth == 0)
                lunMonthDay = 30;
            else if (lunarMonthTable[lunIndex][lunMonth - 1] == 5 &&
                lunLeapMonth == 1)
                lunMonthDay = 29;
            else if (lunarMonthTable[lunIndex][lunMonth - 1] == 6)
                lunMonthDay = 30;
        }
        else
            lunDay++;
    }
}

function dayCalcDisplay(startYear, startMonth, startDay) {
    if (!startYear || startYear == 0 ||
        !startMonth || startMonth == 0 ||
        !startDay || startDay == 0) {
        alert('날짜를 입력해주세요');
        return;
    }

    var solMonthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (startYear % 400 == 0 || (startYear % 4 == 0 && startYear % 100 != 0)) solMonthDay[1] += 1;


    if (startMonth < 1 || startMonth > 12 ||
        startDay < 1 || startDay > solMonthDay[startMonth - 1]) {
        if (solMonthDay[1] == 28 && startMonth == 2 && startDay > 28)
            console.log("윤년이 아닙니다. 다시 입력해주세요");
        else
            console.log("날짜 범위를 벗어났습니다. 다시 입력해주세요");
            //이거 2025년 1월로 넘기니까 뜨던데 뭐가 문제인건지 모르겠음... 2025년 2월로 넘어가니까 윤년이 아니라고 떠요... 
            //일단 출력 형식 변경합니다. 
        return;
    }

    var startDate = new Date(startYear, startMonth - 1, startDay);

    /* 양력/음력 변환 */
    var date = lunarCalc(startYear, startMonth, startDay, 1);

    return (date.leapMonth ? "윤" : "") + date.month +"."+
        date.day;
}

const renderCalendar = () => {
    const viewYear = date.getFullYear();
    const viewMonth = date.getMonth();

    const prevMonth = new Date(viewYear, viewMonth, 0);
    const thisMonth = new Date(viewYear, viewMonth + 1, 0);
    const prevDate = prevMonth.getDate();
    const prevDay = prevMonth.getDay();
    const thisDate = thisMonth.getDate();
    const thisDay = thisMonth.getDay();

    const prevDates = [];
    const thisDates = [...Array(thisDate + 1).keys()].slice(1);
    const nextDates = [];

    document.querySelector('#month').textContent = `${viewYear}년 ${viewMonth + 1}월`;

    if (prevDay != 6) {
        for (let i = 0; i < prevDay + 1; i++) {
            prevDates.unshift(prevDate - i);
        }
    }

    for (let i = 1; i < 7 - thisDay; i++) {
        nextDates.push(i);
    }

    const dates = prevDates.concat(thisDates, nextDates);

    const firstDate = dates.indexOf(1);
    const lastDate = dates.lastIndexOf(thisDate);
    dates.forEach((date, i) => {
        const condition = i >= firstDate && i < lastDate + 1
            ? 'this'
            : 'other';
        dates[i] = `<div class="date"><span class="${condition}">${date}</span><br> <span class="${condition} lunar">${dayCalcDisplay(viewYear,viewMonth + 1,date)}</span></div>`;
    })

    document.querySelector('.dates').innerHTML = dates.join('');

    const today = new Date();
    if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
        for (let date of document.querySelectorAll('.this')) {
            if ((+date.innerText) === today.getDate()) {
                date.classList.add('today');
                break;
            }
        }
    }

};
//아, 이거 익명함수였군 

const prevMonth = () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
}

const nextMonth = () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
}

let prevMonth_button = document.querySelector('#prev');
let nextMonth_button = document.querySelector('#next');

prevMonth_button.addEventListener('click', (e) => {
    prevMonth();
})

nextMonth_button.addEventListener('click', (e) => {
    nextMonth();
})

renderCalendar();
