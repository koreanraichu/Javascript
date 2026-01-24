const textTitle = document.querySelector('#title');
const textArea = document.querySelector('#textarea');
const textSave = document.querySelector('#save');
const textCopy = document.querySelector('#clipbrd');
const count = document.querySelector('.count');
const Copied = document.querySelector('.copied');
const fontSelection = document.querySelector('#fonts');
const fileOpen = document.querySelector('#textuploader');

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
    }else if (fontSelection.selectedIndex == 1) {
        fontSelection.style.fontFamily = 'Pretendard-Regular';
        textTitle.style.fontFamily = 'Pretendard-Regular';
        textArea.style.fontFamily = 'Pretendard-Regular';
    } else if (fontSelection.selectedIndex == 2) {
        fontSelection.style.fontFamily = 'RIDIBatang';
        textTitle.style.fontFamily = 'RIDIBatang';
        textArea.style.fontFamily = 'RIDIBatang';
    } else if (fontSelection.selectedIndex == 3) {
        fontSelection.style.fontFamily = 'Xcu';
        textTitle.style.fontFamily = 'Xcu';
        textArea.style.fontFamily = 'Xcu';
    } else if (fontSelection.selectedIndex == 4) {
        fontSelection.style.fontFamily = 'MabinogiClassicR';
        textTitle.style.fontFamily = 'MabinogiClassicR';
        textArea.style.fontFamily = 'MabinogiClassicR';
    } else if (fontSelection.selectedIndex == 5) {
        fontSelection.style.fontFamily = 'StoryBold';
        textTitle.style.fontFamily = 'StoryBold';
        textArea.style.fontFamily = 'StoryBold';
    } else if (fontSelection.selectedIndex == 6) {
        fontSelection.style.fontFamily = 'BelovedMyoeunttobak';
        textTitle.style.fontFamily = 'BelovedMyoeunttobak';
        textArea.style.fontFamily = 'BelovedMyoeunttobak';
    } else if (fontSelection.selectedIndex == 7) {
        fontSelection.style.fontFamily = 'NostalgicPoliceFairness';
        textTitle.style.fontFamily = 'NostalgicPoliceFairness';
        textArea.style.fontFamily = 'NostalgicPoliceFairness';
    } else if (fontSelection.selectedIndex == 8) {
        fontSelection.style.fontFamily = 'NostalgicGellyRoll';
        textTitle.style.fontFamily = 'NostalgicGellyRoll';
        textArea.style.fontFamily = 'NostalgicGellyRoll';
    } else if (fontSelection.selectedIndex == 9) {
        fontSelection.style.fontFamily = 'Rimgul';
        textTitle.style.fontFamily = 'Rimgul';
        textArea.style.fontFamily = 'Rimgul';
    } else if (fontSelection.selectedIndex == 10) {
        fontSelection.style.fontFamily = 'Umdot';
        textTitle.style.fontFamily = 'Umdot';
        textArea.style.fontFamily = 'Umdot';
    } 
});