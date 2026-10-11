// 벗흔
const typeCheckbox = document.querySelector(".checkbox");
const calculateBtn = document.querySelector("#calculate");
const resetBtn = document.querySelector("#delete");

// 계산한거 뿌릴 객체
const resultDiv = document.querySelector(".result");

// 타입
    const types = [
        { id: "normal", name: "노말" },
        { id: "fire", name: "불꽃" },
        { id: "water", name: "물" },
        { id: "grass", name: "풀" },
        { id: "electric", name: "전기" },
        { id: "ice", name: "얼음" },
        { id: "fighting", name: "격투" },
        { id: "poison", name: "독" },
        { id: "ground", name: "땅" },
        { id: "flying", name: "비행" },
        { id: "psychic", name: "에스퍼" },
        { id: "bug", name: "벌레" },
        { id: "rock", name: "바위" },
        { id: "ghost", name: "고스트" },
        { id: "dragon", name: "드래곤" },
        { id: "dark", name: "악" },
        { id: "steel", name: "강철" },
        { id: "fairy", name: "페어리" }
    ];

// 타입 상성
const chart = {
        "normal":   { "fighting": 2, "ghost": 0 },
        "fire":     { "water": 2, "ground": 2, "rock": 2, "fire": 0.5, "grass": 0.5, "ice": 0.5, "bug": 0.5, "steel": 0.5, "fairy": 0.5 },
        "water":    { "grass": 2, "electric": 2, "fire": 0.5, "water": 0.5, "ice": 0.5, "steel": 0.5 },
        "grass":    { "fire": 2, "ice": 2, "poison": 2, "flying": 2, "bug": 2, "water": 0.5, "grass": 0.5, "electric": 0.5, "ground": 0.5 },
        "electric": { "ground": 2, "electric": 0.5, "flying": 0.5, "steel": 0.5 },
        "ice":      { "fire": 2, "fighting": 2, "rock": 2, "steel": 2, "ice": 0.5 },
        "fighting": { "flying": 2, "psychic": 2, "fairy": 2, "bug": 0.5, "rock": 0.5, "dark": 0.5 },
        "poison":   { "ground": 2, "psychic": 2, "grass": 0.5, "fighting": 0.5, "poison": 0.5, "bug": 0.5, "fairy": 0.5 },
        "ground":   { "water": 2, "grass": 2, "ice": 2, "poison": 0.5, "rock": 0.5, "electric": 0 },
        "flying":   { "electric": 2, "ice": 2, "rock": 2, "grass": 0.5, "fighting": 0.5, "bug": 0.5, "ground": 0 },
        "psychic":  { "bug": 2, "ghost": 2, "dark": 2, "fighting": 0.5, "psychic": 0.5 },
        "bug":      { "fire": 2, "flying": 2, "rock": 2, "grass": 0.5, "fighting": 0.5, "ground": 0.5 },
        "rock":     { "water": 2, "grass": 2, "fighting": 2, "ground": 2, "steel": 2, "normal": 0.5, "fire": 0.5, "poison": 0.5, "flying": 0.5 },
        "ghost":    { "ghost": 2, "dark": 2, "poison": 0.5, "bug": 0.5, "normal": 0, "fighting": 0 },
        "dragon":   { "ice": 2, "dragon": 2, "fairy": 2, "fire": 0.5, "water": 0.5, "grass": 0.5, "electric": 0.5 },
        "dark":     { "fighting": 2, "bug": 2, "fairy": 2, "ghost": 0.5, "dark": 0.5, "psychic": 0 },
        "steel":    { "fire": 2, "fighting": 2, "ground": 2, "normal": 0.5, "grass": 0.5, "ice": 0.5, "flying": 0.5, "psychic": 0.5, "bug": 0.5, "rock": 0.5, "dragon": 0.5, "steel": 0.5, "fairy": 0.5, "poison": 0 },
        "fairy":    { "poison": 2, "steel": 2, "fighting": 0.5, "bug": 0.5, "dark": 0.5, "dragon": 0 }
    };

calculateBtn.addEventListener('click',()=>{
    const selectedType = document.querySelectorAll('.checkbox input[type="checkbox"]:checked'); // 선택된거 가져올 애 
    const selectedTypes = Array.from(selectedType).nav ? Array.from(selectedType) : Array.from(selectedType).map(el => el.value);
    const results = { 4: [], 2: [], 1: [], 0.5: [], 0.25: [], 0: [] }; // 결과 보관용

    // 선택 범위가 1~2입니다. 
    if (selectedType.length === 0) {
        alert('타입을 선택해주세요! ');
        return;
    } else if (selectedType.length > 2) {
        alert('포켓몬의 타입은 최대 두 개까지입니다! ')
        return;
    };

    types.forEach(atkObj => {
        const atk = atkObj.id;
        let totalMultiplier = 1; // 기본 1배로 시작

        // 선택된 타입(1개 혹은 2개)의 상성 배율을 순차적으로 곱함
        selectedTypes.forEach(defType => {
            if (chart[defType] && chart[defType][atk] !== undefined) {
                totalMultiplier *= chart[defType][atk];
            }
        });

        // 계산된 배율 결과에 타입 이름(한글) 저장
        if (results[totalMultiplier]) {
            results[totalMultiplier].push(atkObj.name);
        }
    });

    // 5. 요청하신 4가지 섹션 형식으로 화면에 렌더링
    renderTypeTable(results);
});

// 섹션별 표(카드) 형태로 출력하는 함수
function renderTypeTable(res) {    
    // 4가지 대분류로 그룹화
    const sections = [
        {
            title: "🔥 효과가 굉장함 (약점)",
            classes: "group-super",
            items: [
                { mult: 4, label: "4배 (매우 위험)", badgeClass: "badge-x4" },
                { mult: 2, label: "2배 (위험)", badgeClass: "badge-x2" }
            ]
        },
        {
            title: "⚖️ 효과가 보통 (1배)",
            classes: "group-normal",
            items: [
                { mult: 1, label: "1배", badgeClass: "badge-x1" }
            ]
        },
        {
            title: "🛡️ 효과가 별로 (반감)",
            classes: "group-not-Very",
            items: [
                { mult: 0.5, label: "0.5배", badgeClass: "badge-x05" },
                { mult: 0.25, label: "0.25배 (이중 반감)", badgeClass: "badge-x025" }
            ]
        },
        {
            title: "🚫 효과가 없음 (무효)",
            classes: "group-zero",
            items: [
                { mult: 0, label: "0배 (무효)", badgeClass: "badge-x0" }
            ]
        }
    ];

    let html = '';

    sections.forEach(sec => {
        // 해당 섹션에 속한 타입들이 하나라도 있는지 확인
        const hasTypes = sec.items.some(item => res[item.mult] && res[item.mult].length > 0);
        if (!hasTypes) return; // 해당하는 타입이 없으면 섹션 생략

        html += `<div class="result-section ${sec.classes}">`;
        html += `<h3>${sec.title}</h3>`;
        html += `<div class="section-body">`;

        sec.items.forEach(item => {
            const typesArr = res[item.mult];
            if (typesArr && typesArr.length > 0) {
                html += `<div class="sub-row">`;
                html += `<span class="sub-label">${item.label}</span>`;
                html += `<div class="badge-container">`;
                typesArr.forEach(tName => {
                    html += `<span class="type-badge ${item.badgeClass}">${tName}</span>`;
                });
                html += `</div></div>`;
            }
        });

        html += `</div></div>`;
    });

    resultDiv.innerHTML = html;
}

// 선택 초기화 버튼
resetBtn.addEventListener('click',()=>{
    // 1. 모든 체크박스를 가져와서 checked를 false로 설정
    const checkboxes = document.querySelectorAll('.checkbox input[type="checkbox"]');
    checkboxes.forEach(cb => cb.checked = false);

    // 2. 출력된 결과 영역도 초기화(비우기)
    resultDiv.innerHTML = '';
});