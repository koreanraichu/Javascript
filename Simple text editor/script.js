const textTitle = document.querySelector('#title');
const textArea = document.querySelector('#textarea');
const textSave = document.querySelector('#save');
const count = document.querySelector('.count');

textSave.addEventListener('click',()=>{
    const blob = new Blob([textArea.value], {type:'text/plain'});
    const url = window.URL.createObjectURL(blob);
    //블롭블롭

    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = url;
    if (textTitle.value.trim().length == 0) {
        link.download = 'Untitled';
    }
    else {
        link.download = textTitle.value;
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