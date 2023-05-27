const tabList = document.querySelectorAll('.tabmenu .list li');

for(var i = 0; i < tabList.length; i++){
    tabList[i].querySelector('.btn').addEventListener('click', function(e){
      e.preventDefault();
      for(var j = 0; j < tabList.length; j++){
        tabList[j].classList.remove('focus');
      }
      this.parentNode.classList.add('focus');
    });
  }