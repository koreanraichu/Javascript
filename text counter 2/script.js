const inputarea = document.querySelector('#inputarea');
const counter = document.querySelector('.count');
const maxtext = 200;

counter.innerText = maxtext;

inputarea.addEventListener('keyup', () => {
    const length = inputarea.value.length;
    const remaining = maxtext - length;

    counter.innerText = remaining;

    counter.classList.remove('almost', 'over');

    if (length > maxtext) {
        counter.classList.add('over');
    } else if (length > maxtext * 0.9) {
        counter.classList.add('almost');
    }
});
