const modal = document.getElementById('modal')
const modalcall = document.getElementsByClassName('openmodal')[0]
const modalgoback = document.getElementsByClassName('close-area')[0]

modalcall.addEventListener("click", e => {
    modal.style.display = "flex"
})

modalgoback.addEventListener('click',e => {
    modal.style.display = 'none'
})

modal.addEventListener("click", e => {
    const evTarget = e.target
    if(evTarget.classList.contains("modal-overlay")) {
        modal.style.display = "none"
    }
})