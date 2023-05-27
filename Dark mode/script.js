let togglebutton = document.getElementById('toggle');
let button = document.querySelectorAll('button')

togglebutton.addEventListener("click", function () {
    console.log('버튼!')
    if (document.querySelector('body').classList.contains('dark-mode')) {
        document.body.classList.remove("dark-mode");
    } else {
        document.body.classList.add("dark-mode");
    }
    button.forEach(function(item){
        if (item.classList.contains('dark-mode')) {
            item.classList.remove('dark-mode');
        }
        else {
            item.classList.add('dark-mode');
        }
    })
}, false);