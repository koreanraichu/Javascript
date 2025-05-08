const Text = document.querySelector('#text');
const copyButton = document.querySelector('#button');
const Copied = document.querySelector('.copied');

copyButton.addEventListener('click',(e)=>{
    window.navigator.clipboard.writeText(Text.value);
    Copied.style.display = "block";
    setTimeout(() => {
        Copied.style.display = "none";
    }, 500)
});