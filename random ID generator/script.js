const button = document.querySelectorAll('button');
const idLengthval = document.querySelector('.idlength');
const idCount = document.querySelector('.idhowmany');
const idValarea = document.querySelector(".ID");
const wordOption = document.querySelectorAll(".listopt");

function showToast(message) {
    const toast = document.createElement("div");
    toast.innerText = message;
    toast.style.position = "fixed";
    toast.style.top = "30px";
    toast.style.right = "30px";
    toast.style.backgroundColor = "var(--main-color)";
    toast.style.color = "var(--sub-color)";
    toast.style.padding = "10px 20px";
    toast.style.borderRadius = "8px";
    toast.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
    toast.style.zIndex = 1000;
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.3s ease";
    toast.style.fontSize = "16pt";

    document.body.appendChild(toast);

    // 페이드 인
    setTimeout(() => {
        toast.style.opacity = "1";
    }, 10);

    // 2초 뒤 제거
    setTimeout(() => {
        toast.style.opacity = "0";
        // 페이드 아웃 후 DOM에서 제거
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 2000);
}

function makelist() {
    let word_list = "";
    wordOption.forEach((item) => {
        if (item.checked) {
            word_list += item.value;
        }
    });
    if (word_list === "") {
        alert("문자 옵션을 하나 이상 선택하세요.");
    }
    return word_list;
}


function makeID() {
    let idLength = idLengthval.value;
    let idText = "";
    let word_list = makelist();
    for (let i = 0; i < idLength; i++) {
        idText += word_list.charAt(Math.floor(Math.random() * word_list.length));
    }
    const idValue = document.createElement("p");
    idValue.innerText = idText + " ";

    const clipBoard = document.createElement("button");
    clipBoard.innerHTML = `<i class="fa-solid fa-clipboard"></i> Copy`;
    idValue.appendChild(clipBoard);

    idValarea.appendChild(idValue);

    clipBoard.addEventListener("click", () => {
        navigator.clipboard.writeText(idText);
        showToast("ID 복사 완료!");
    });
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
