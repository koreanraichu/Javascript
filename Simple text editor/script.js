const textTitle = document.querySelector('#title');
const textArea = document.querySelector('#textarea');
const textSave = document.querySelector('#save'); // 다운로드버튼
const textCopy = document.querySelector('#clipbrd'); // 복사버튼
const count = document.querySelector('.count'); // 그 있어요 페이지 하단에 글자 세주는 그거 
const fontSelection = document.querySelector('#fonts');
const fileOpen = document.querySelector('#textuploader'); // 파일 오우픈
const reset = document.querySelector('#reset'); // 내용 비우기(글꼴 유지됨)
const broom = document.querySelector('#broom'); // 줄바꿈 나가주세요 

// 토스트
const Copied = document.querySelector('.copied');
const Broomed = document.querySelector('.broomed');

// 오픈
fileOpen.addEventListener('change',(e)=>{
    const file = e.target.files[0]; //너도 배열이냐?
    if (!file) return; 

    textTitle.value = file.name.replace(/\.txt$/, '');

    const reader = new FileReader();
    reader.onload = function(event) {
        textArea.value = event.target.result;
        count.innerText = textArea.value.length;
    };
    
    reader.readAsText(file, 'utf-8');
})

// 다운로드(저장)
textSave.addEventListener('click',()=>{
    const blob = new Blob([textArea.value], {type:'text/plain'});
    const url = window.URL.createObjectURL(blob);
    //블롭블롭

    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = url;
    if (textTitle.value.trim().length == 0) {
        link.download = 'Untitled.txt';
    }
    else {
        link.download = `${textTitle.value}.txt`;
    }

    document.body.appendChild(link);

    link.click();

    setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    }, 100);
})

// 글자수 셔주는거
textArea.addEventListener('keyup',()=>{
    count.innerText = textArea.value.length;
});

// 복사
textCopy.addEventListener('click',()=>{
    window.navigator.clipboard.writeText(textArea.value);
    Copied.style.top = "1%";
    setTimeout(() => {
        Copied.style.top = "-10%";
    }, 500)
})

// 내용만 비워주는거 
reset.addEventListener('click',()=>{
    textTitle.value = '';
    textArea.value = '';
    count.innerText = '0';
});

// 줄바꿈 정리 
broom.addEventListener('click', () => {
    let lines = textArea.value.replace(/\r\n/g, '\n').split('\n');

    let result = [];
    
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();

        // 빈 줄은 문단 구분용으로 유지
        if (line === '') {
            // 중복 빈 줄 방지
            if (result[result.length - 1] !== '') {
                result.push('');
            }
            continue;
        }

        result.push(line);
    }

    let text = result.join('\n');

    // 👉 대사 붙이기 (핵심)
    text = text.replace(/"\s*\n\s*"/g, '"\n"');

    textArea.value = text;

    Broomed.style.top = "1%";
    setTimeout(() => {
        Broomed.style.top = "-10%";
    }, 500)
});

//글꼴 전환 로직 간소회
fontSelection.addEventListener('change', (e) => {
    const selectedFont = e.target.value; // 선택된 option의 value 값을 가져옵니다.

    fontSelection.style.fontFamily = selectedFont;
    textTitle.style.fontFamily = selectedFont;
    textArea.style.fontFamily = selectedFont;
});