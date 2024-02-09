const selectTheme = document.getElementsByName('theme');
const page = document.querySelector('.page');
const title = document.querySelector('.title');
const contents = document.querySelectorAll('.contents');

selectTheme.forEach((item) => {
    item.addEventListener("change",(e)=>{
        const selectedTheme = e.currentTarget;
        if (selectedTheme.checked) {
            if (selectedTheme.value == 'default' && page.classList.contains('prussian')){
                page.classList.remove('prussian')
                title.classList.remove('prussian')
                contents.forEach((item) => {
                    item.classList.remove('prussian');
                })
            };
            if (selectedTheme.value == 'default' && page.classList.contains('vandyke')) {
                page.classList.remove('vandyke')
                title.classList.remove('vandyke')
                contents.forEach((item) => {
                    item.classList.remove('vandyke');
                })
            };
            if (selectedTheme.value == 'default' && page.classList.contains('viridian')) {
                page.classList.remove('viridian')
                title.classList.remove('viridian')
                contents.forEach((item) => {
                    item.classList.remove('viridian');
                })
            };
            if (selectedTheme.value == 'default' && page.classList.contains('ultraviolet')) {
                page.classList.remove('ultraviolet')
                title.classList.remove('ultraviolet')
                contents.forEach((item) => {
                    item.classList.remove('ultraviolet');
                })
            };
            if (selectedTheme.value == 'prussian') {
                page.classList.add('prussian');
                title.classList.add('prussian');
                contents.forEach((item) => {
                    item.classList.add('prussian');
                })
            };
            if (selectedTheme.value == 'vandyke') {
                page.classList.add('vandyke');
                title.classList.add('vandyke');
                contents.forEach((item) => {
                    item.classList.add('vandyke');
                })
            };
            if (selectedTheme.value == 'viridian') {
                page.classList.add('viridian');
                title.classList.add('viridian');
                contents.forEach((item) => {
                    item.classList.add('viridian');
                })
            };
            if (selectedTheme.value == 'ultraviolet') {
                page.classList.add('ultraviolet');
                title.classList.add('ultraviolet');
                contents.forEach((item) => {
                    item.classList.add('ultraviolet');
                })
            };
        };
    });
});