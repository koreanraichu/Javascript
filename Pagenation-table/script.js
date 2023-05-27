const contents = document.querySelector('.table-body')
const buttons = document.querySelector('.pagination')
const numOfContent = 120
const maxContent = 10
const maxButton = 5
const maxPage = Math.ceil(numOfContent / maxContent)
let page = 1

const makeContent = (id) => {
    const content = document.createElement('tr')
    content.classList.add('.table-row')
    content.innerHTML = `
        <td>${id}</td>
        <td>Title_Text ${id}</td>
        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.</td>`
    return content
}

const makeButton = (id) => {
    const button = document.createElement('li')
    const link = document.createElement('a')
    button.classList.add('page-item')
    link.classList.add('page-link')
    button.dataset.num = id
    link.dataset.num = id
    button.appendChild(link)
    link.innerText = id
    link.href = '#'
    button.addEventListener("click", (e) => {
        Array.prototype.forEach.call(buttons.children, (button) => {
            if (link.dataset.num) button.classList.remove("active")
        })
        button.classList.add("active")
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

const prev = document.createElement('li')
prev.classList.add('page-item','prev')
prev.innerHTML = '<a class="page-link" href="#">Previous</a>'
prev.addEventListener('click', prevPage)

const next = document.createElement('li')
next.classList.add('page-item','next')
next.innerHTML = '<a class="page-link" href="#">Next</a>'
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