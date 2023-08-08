//가져올건 이 쪽
let toggleButton = document.querySelector('.slider');
let viewItem = document.querySelector('.item');
let viewCont = document.querySelectorAll('.contents');
let viewIcon = document.querySelectorAll('.icon');

//실행 코드
toggleButton.addEventListener("click", function () {
    if (viewItem.classList.contains('grid')) { //.item은 하나밖에 없어서 하나만 가져왔습니다 
        viewItem.classList.remove('grid');
    } else {
        viewItem.classList.add('grid');
    }
    viewCont.forEach(function (item) {
        if (item.classList.contains('grid')) { //컨텐츠와 아이콘은 HTML파일에 추가된 숫자만큼 여러개 있어서 forEach로 해결 
            item.classList.remove('grid');
        } else {
            item.classList.add('grid');
        }
    })
    viewIcon.forEach(function(item){
        if(item.classList.contains('grid')) {
            item.classList.remove('grid');
        } else {
            item.classList.add('grid');
        }
    })
}, false);