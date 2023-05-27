const mousefollow = document.querySelector('.mousefollow');

document.addEventListener('mousemove',(e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    mousefollow.style.left = mouseX + 20 + 'px';
    mousefollow.style.top = mouseY + 20 + 'px';
})