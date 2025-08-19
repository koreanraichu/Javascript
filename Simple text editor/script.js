const textTitle = document.querySelector('#title');
const textArea = document.querySelector('#textarea');
const textSave = document.querySelector('#save');
const textCopy = document.querySelector('#clipbrd');
const count = document.querySelector('.count');
const Copied = document.querySelector('.copied');
const fontSelection = document.querySelector('#fonts');

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

textArea.addEventListener('keyup',()=>{
    count.innerText = textArea.value.length;
});

textCopy.addEventListener('click',()=>{
    window.navigator.clipboard.writeText(textArea.value);
    Copied.style.top = "1%";
    setTimeout(() => {
        Copied.style.top = "-10%";
    }, 500)
})

fontSelection.addEventListener('click',()=>{
    if (fontSelection.selectedIndex == 0) {
        fontSelection.style.fontFamily = 'Ownglyph_corncorn-Rg';
        textTitle.style.fontFamily = 'Ownglyph_corncorn-Rg';
        textArea.style.fontFamily = 'Ownglyph_corncorn-Rg';
    } else if (fontSelection.selectedIndex == 1) {
        fontSelection.style.fontFamily = 'CHOGOONCHICKENSCRATCHV7';
        textTitle.style.fontFamily = 'CHOGOONCHICKENSCRATCHV7';
        textArea.style.fontFamily = 'CHOGOONCHICKENSCRATCHV7';
    } else if (fontSelection.selectedIndex == 2) {
        fontSelection.style.fontFamily = 'nanumgothic';
        textTitle.style.fontFamily = 'nanumgothic';
        textArea.style.fontFamily = 'nanumgothic';
    } else if (fontSelection.selectedIndex == 3) {
        fontSelection.style.fontFamily = 'Pretendard-Regular';
        textTitle.style.fontFamily = 'Pretendard-Regular';
        textArea.style.fontFamily = 'Pretendard-Regular';
    } else if (fontSelection.selectedIndex == 4) {
        fontSelection.style.fontFamily = 'RIDIBatang';
        textTitle.style.fontFamily = 'RIDIBatang';
        textArea.style.fontFamily = 'RIDIBatang';
    } else if (fontSelection.selectedIndex == 5) {
        fontSelection.style.fontFamily = 'DOSIyagiMedium';
        textTitle.style.fontFamily = 'DOSIyagiMedium';
        textArea.style.fontFamily = 'DOSIyagiMedium';
    } else if (fontSelection.selectedIndex == 6) {
        fontSelection.style.fontFamily = 'MabinogiClassicR';
        textTitle.style.fontFamily = 'MabinogiClassicR';
        textArea.style.fontFamily = 'MabinogiClassicR';
    } else if (fontSelection.selectedIndex == 7) {
        fontSelection.style.fontFamily = 'Ownglyph_okticon-Bd';
        textTitle.style.fontFamily = 'Ownglyph_okticon-Bd';
        textArea.style.fontFamily = 'Ownglyph_okticon-Bd';
    } else if (fontSelection.selectedIndex == 8) {
        fontSelection.style.fontFamily = 'omyu_pretty';
        textTitle.style.fontFamily = 'omyu_pretty';
        textArea.style.fontFamily = 'omyu_pretty';
    } else if (fontSelection.selectedIndex == 9) {
        fontSelection.style.fontFamily = 'Orbit-Regular';
        textTitle.style.fontFamily = 'Orbit-Regular';
        textArea.style.fontFamily = 'Orbit-Regular';
    } else if (fontSelection.selectedIndex == 10) {
        fontSelection.style.fontFamily = 'HakgyoansimGeurimilgiTTF-R';
        textTitle.style.fontFamily = 'HakgyoansimGeurimilgiTTF-R';
        textArea.style.fontFamily = 'HakgyoansimGeurimilgiTTF-R';
    }
});