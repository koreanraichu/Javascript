const button = document.querySelectorAll('button');
const idLengthval = document.querySelector('.idlength');
const idCount = document.querySelector('.idhowmany');
const idValarea = document.querySelector(".ID");
const wordOption = document.querySelectorAll(".listopt");

function makelist() {
    let word_list = "";
    wordOption.forEach((item) => {
        if (item.checked) {
            word_list += item.value
        }
    })
    return word_list
}

function makeID() {
    let idLength = idLengthval.value;
    let idText = "";
    let word_list = makelist();
    let idValue = document.createElement("p");
    //자바스크립트는 아스키코드 못다루나? 
    for (let i = 0;i < idLength;i++) {
        idText += word_list.charAt(Math.floor(Math.random() * word_list.length));
        idValue.innerText = idText;
        idValarea.appendChild(idValue);
    };
}

button[0].addEventListener('click',(e) => {
    let idCountvalue = idCount.value;
    for (let i = 0;i < idCountvalue;i++){
        makeID();
    };
});

button[1].addEventListener('click',(e)=>{
    idValarea.innerText = '';
});
