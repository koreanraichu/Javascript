const contents = document.querySelector('.content-body')
const buttons = document.querySelector('.buttons')
const numOfContent = 100
const maxContent = 9
const maxButton = 5
const maxPage = Math.ceil(numOfContent / maxContent)
let page = 1

const makeContent = (id) => {
    const content = document.createElement('div')
    content.classList.add('col-sm-6')
    content.setAttribute('id', 'contents-card')
    content.innerHTML = `
                <div class="card" id="contents">
                    <div class="card-body">
                        <h5 class="card-title">No. ${id}</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</a>
                    </div>
                </div>`
    return content
}

const makeButton = (id) => {
    const button = document.createElement('button')
    button.classList.add('button')
    button.dataset.num = id
    button.innerText = id
    button.addEventListener("click", (e) => {
        Array.prototype.forEach.call(buttons.children, (button) => {
            if (button.dataset.num) button.classList.remove("active")
        })
        e.target.classList.add("active")
        renderContent(parseInt(e.target.dataset.num))
    })
    return button
}

const prevPage = () => {
    page -= maxButton
    render(page)
}

const nextPage = () => {
    page += maxButton
    render(page)
}

const prev = document.createElement('button')
prev.classList.add('button','prev')
prev.innerHTML = '<i class="fa-solid fa-angle-left"></i>'
prev.addEventListener('click', prevPage)

const next = document.createElement('button')
next.classList.add('button','next')
next.innerHTML = '<i class="fa-solid fa-angle-right"></i>'
next.addEventListener('click',nextPage)

const renderContent = (page) => {
    while(contents.hasChildNodes()) {
        contents.removeChild(contents.lastChild)
    }
    for (let id = (page - 1) * maxContent + 1;id <= page * maxContent && id <= numOfContent;id++){
        contents.appendChild(makeContent(id))
    }
}

const renderButton = (page) => {
    while(buttons.hasChildNodes()) {
        buttons.removeChild(buttons.lastChild)
    }
    for (let id = page;id < page + maxButton && id <= maxPage;id++) {
        buttons.appendChild(makeButton(id))
    }
    buttons.children[0].classList.add('active')

    buttons.prepend(prev)
    buttons.append(next)

    if (page - maxButton < 1) buttons.removeChild(prev)
    if (page + maxButton > maxPage) buttons.removeChild(next)
}

const render = (page) => {
    renderContent(page)
    renderButton(page)
}

render(page)