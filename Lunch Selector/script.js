const randomBtn = document.querySelector('#button1'); // 랜덤랜덤 (여기 있는 리스트들 중)
const randomLunch = document.querySelector('#jeommechu1'); // 랜덤 표시구역

const ourBtn = document.querySelector('#button2'); // 입력받은 것들 중 하나 랜덤
const ourLunch = document.querySelector('#jeommechu2'); // 선택 표시구역
const lunchInput = document.querySelector('#lunchinput'); // 점심점심
const lunchView = document.querySelector('#lunchlist'); // 입력한거 보여주는 기능 

const clearBtn = document.querySelector('#button3'); // 리스트 삭제쓰 
const clearBtn2 = document.querySelector('#button4'); // 랜덤추첨 비우기 

let lunchList = ['백반', '국밥', '찌개', '분식', '중국집', '빵', '편의점', '햄버거', '샐러드', '파스타', '쌀국수', '마라탕', '초밥', '돈카츠', '카레', '비빔밥', '냉면', 
    '샌드위치', '부대찌개', '짬뽕', '짜장면', '스테이크', '제육볶음', '닭갈비', '케밥']; // 밥 후보 리스트
let ourList = []

// [기능] 토스트 메시지 생성 함수
function showToast(message) {
    const toast = document.createElement('div');
    toast.innerText = message;
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.padding = '10px 20px';
    toast.style.background = 'var(--main-color)';
    toast.style.color = 'var(--white)';
    toast.style.borderRadius = '5px';
    document.body.appendChild(toast);
    
    setTimeout(() => toast.remove(), 2000); // 2초 뒤 삭제
}

// [기능] 입력한 메뉴 리스트 화면에 다시 그리기
function updateLunchView() {
    lunchView.innerHTML = ''; // 기존 리스트 초기화
    ourList.forEach(menu => {
        const li = document.createElement('li');
        li.innerText = menu;
        lunchView.appendChild(li);
    });
}

// [이벤트] 엔터키로 메뉴 추가
lunchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const value = lunchInput.value.trim();
        
        if (value === "") return; // 빈 값 방지
        
        if (ourList.includes(value)) {
            showToast('이미 있는 메뉴예요!');
        } else {
            ourList.push(value);
            showToast(`${value} 추가 완료!`);
            updateLunchView(); // 리스트 갱신
        }
        lunchInput.value = "";
    }
});

clearBtn.addEventListener('click',()=>{
    ourList = [];
    lunchView.innerHTML = '';
    ourLunch.innerHTML = '';
});

clearBtn2.addEventListener('click',()=>{
    randomLunch.innerHTML = '';
});

// 페이지 로드 시 초기 리스트 표시
updateLunchView();

// 랜덤 밥추천
randomBtn.addEventListener('click',()=>{
    let selectedLunch = document.createElement('p'); // 당첨된 밥

    const randomIndex = Math.floor(Math.random() * lunchList.length); // 몇번째 주소가 당첨됐는가 
    const selectedMenu = lunchList[randomIndex]; // 응 너야 

    selectedLunch.innerText = selectedMenu;
    selectedLunch.classList.add('selectedlunch');

    // 3. 기존에 결과가 있다면 지우고 새로 붙이기 (하나만 나오게 하려면 필요)
    randomLunch.innerHTML = ''; 

    // 4. #jeommechu1 영역에 붙이기
    randomLunch.appendChild(selectedLunch);
});

// 선택 밥추천
ourBtn.addEventListener('click',()=>{
    let selectedLunch = document.createElement('p'); // 당첨된 밥

    // 여러분이 입력한 밥을 리스트로 만들거예요 
    // 있다면 말이지 
    if (ourList.length === 0) {
        alert("추가된 메뉴가 없어요! 먼저 메뉴를 입력해주세요.");
        return; // 함수 종료
    }

    const randomIndex = Math.floor(Math.random() * ourList.length); // 몇번째 주소가 당첨됐는가 
    const selectedMenu = ourList[randomIndex]; // 응 너야 

    selectedLunch.innerText = selectedMenu;
    selectedLunch.classList.add('selectedlunch');

    // 3. 기존에 결과가 있다면 지우고 새로 붙이기 (하나만 나오게 하려면 필요)
    ourLunch.innerHTML = ''; 

    // 4. #jeommechu1 영역에 붙이기
    ourLunch.appendChild(selectedLunch);
});