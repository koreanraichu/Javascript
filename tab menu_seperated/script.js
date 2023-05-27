const tabList = document.querySelectorAll('.tabmenu .list li');
const tabContents = document.querySelectorAll('.tabmenu .content .cont');
let activeContents = '';

for (var i = 0;i < tabList.length;i++) {
    tabList[i].querySelector('.btn').addEventListener('click',function(e){
        e.preventDefault();
        for (var j = 0;j < tabList.length;j++) {
            tabList[j].classList.remove('focus');
            tabContents[j].style.display = 'none';
        }
        this.parentNode.classList.add('focus');
        activeContents = this.getAttribute('href');
        document.querySelector(activeContents).style.display = 'block';
    });
}
