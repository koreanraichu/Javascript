const chickenBrands = [
    'BHC', 'BBQ', '교촌', '처갓집 양념치킨', 
    '굽네치킨', '페리카나', '네네치킨', '맥시카나', 
    '또래오래', '피자나라 치킨공주', '호식이 두마리 치킨', '60계치킨', 
    '푸라닭', 'KFC', '노랑통닭', '부어치킨', '맥시칸 치킨', '치킨매니아', '지코바', 
    '꾸브라꼬', '땅땅치킨', '훌랄라 숯불치킨', '티바두마리치킨', 
    '스모프 양념통닭', '보드람치킨', '자담치킨', '후라이드 참 잘하는 집', 
    '멕시칸 치킨', '다사랑치킨', '둘둘치킨', '호치킨', 
    '또봉이통닭', '동키치킨', '림스치킨', '가마치', 
    '장모님치킨', '깐부치킨', '치킨마루', '이춘봉치킨', 
    '치킨플러스', '순살만공격', '깻잎두마리', '디디치킨', 
    '쌀통닭', '오븐에빠진닭', '파파이스', '썬더치킨', '기타 (입력)'
]; // 미리 저장해두고 있다가 체크박스 생성할 취킨취킨 브랜드 (나무위키 주요 치킨 브랜드 틀 참조)
// 그... 근데... 맘스터치를 치킨집이라고 봐도 됨...? 버거 파는데 아니었어요? 

const container = document.querySelector('.chicken_list');
const chickenBtn = document.querySelector('.chicken_btn');
const chickenResult = document.querySelector('.chicken_result');
const toggle = document.querySelector('.toggle'); // Toggle

chickenBrands.forEach(brand => {
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    
    checkbox.type = 'checkbox';
    checkbox.value = brand;
    checkbox.checked = false; // 기본값은 올 폴스유 

    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(brand));
    
    container.appendChild(label);
});

// 3. 추천 버튼 클릭 이벤트
chickenBtn.addEventListener('click', () => {
    // 체크된 체크박스만 선택 (:checked 셀렉터 활용)
    const checkedBoxes = document.querySelectorAll('.chicken_list input[type="checkbox"]:checked');

    // 선택된 브랜드가 없다면 경고
    if (checkedBoxes.length === 0) {
        alert('최소한 하나의 브랜드는 선택해주세요!');
        return;
    }

    // 체크된 브랜드들을 담을 배열
    let selectedBrands = [];

    checkedBoxes.forEach(box => {
        if (box.value === '기타 (입력)') {
            // '기타 (입력)'을 체크했다면, 취소 누르기 전까지 계속 입력받기!
            let isAdding = true;
            while (isAdding) {
                const customBrand = prompt('우리 동네 기타 브랜드 이름을 입력해주세요!\n(그만 추가하려면 취소를 누르세요)');
                
                // 사용자가 취소를 누르거나 빈 값을 입력하면 반복 종료
                if (customBrand === null || customBrand.trim() === '') {
                    isAdding = false;
                } else {
                    selectedBrands.push(customBrand.trim());
                }
            }
        } else {
            selectedBrands.push(box.value);
        }
    });

    // 만약 기타를 체크했는데 취소를 눌렀거나 아무것도 안 적었다면 방어 코드
    if (selectedBrands.length === 0) {
        alert('추첨할 유효한 브랜드가 없습니다!');
        return;
    }

    // 랜덤 추첨
    const randomIndex = Math.floor(Math.random() * selectedBrands.length);
    const winner = selectedBrands[randomIndex];

    // 결과 출력
    chickenResult.innerHTML = ''; // 일단 기존 결과를 떼고

    let selectedChicken = document.createElement('p'); // 맹긜어봄
    selectedChicken.innerText = winner;
    selectedChicken.classList.add('selected_chicken');

    chickenResult.appendChild(selectedChicken);
});

// 눌러서 펼치기
toggle.addEventListener('click', ()=>{
    if (container.style.display === 'none') {
        container.style.display = 'grid'; // 혹은 본인이 쓰던 정렬 방식 (flex 등)
        toggle.innerText = '[목록 접기]';
    } else {
        // 펼쳐져 있다면? -> 숨기기
        container.style.display = 'none';
        toggle.innerText = '[목록 펼쳐보기]';
    }
});