const todoText = document.querySelector('.todo-text')
const todoAdd = document.querySelector('.todo-add')
const todoDelete = document.querySelector('.delete')
const todoEdit = document.querySelector('.modify')
const todoCheck = document.querySelector('.checkbox')
const todoList = document.querySelector('.todo-list')

let todo = []
let id = 0;
//변수!! 

function setTodo(newTodo) {
    todo = newTodo
}

function getTodo() {
    return todo
}

function addTodo(text) {
    const newId = id++
    const newTodo = getTodo().concat({id: newId, isCompleted: false, content: text })
    setTodo(newTodo)
    displayTodo()
}

function deleteTodo(todoId) {
    const newTodo = getTodo().filter(todo => todo.id !== todoId )
    setTodo(newTodo)
    displayTodo()
}

function completeTodo(todoId) {
    const newTodo = getTodo().map(todo => todo.id === todoId ? {...todo,  isCompleted: !todo.isCompleted} : todo )
    setTodo(newTodo)
    displayTodo()
}

function modifyTodo(text, todoId) {
    const currentTodo = getTodo()
    const newTodo = currentTodo.map(todo => todo.id === todoId ? ({...todo, content: text}) : todo)
    setTodo(newTodo)
    displayTodo()
}

function summonTodo(e, todoId) {
    const todoElem = e.target
    const inputText = e.target.innerText
    const todoItemElem = document.querySelectorAll('.todo')
    const todoEdit = document.createElement('input')

    todoEdit.value = inputText
    todoEdit.classList.add('todo-text-edit')
    todoEdit.addEventListener('keypress',function(e){
        if (e.key === 'Enter') {
            modifyTodo(e.target.value, todoId)
            document.body.removeEventListener('click', onClickBody)
        }
    })

    const onClickBody = (e) => {
        if (e.target !== todoEdit) {
            todoItemElem.removeChild(todoEdit)
            document.body.removeEventListener('click', onClickBody)
        }
    }

    todoItemElem[todoId].appendChild(todoEdit)
    document.body.removeEventListener('click', onClickBody)
}

function displayTodo() {
    todoList.innerHTML = null;
        const allTodo = getTodo()

    allTodo.forEach(function(todo){
        const todoItem = document.createElement('li')
        const todoCheck = document.createElement('div')
        const todoCont = document.createElement('div')
        const todoBtn = document.createElement('div')
        const todoEdit = document.createElement('button')
        const todoDel = document.createElement('button')

        todoItem.setAttribute("data-id","todo.id")
        todoCheck.addEventListener('click',() => completeTodo(todo.id))
        todoDel.addEventListener('click', () => deleteTodo(todo.id))
        todoEdit.addEventListener('dblclick',(event) => summonTodo(event,todo.id))

        todoItem.classList.add('todo-item')
        todoCheck.classList.add('checkbox')
        todoCont.classList.add('todo')
        todoBtn.classList.add('todo-button-group')
        todoEdit.classList.add('modify')
        todoDel.classList.add('delete')
        todoCont.innerText = todo.content
        todoEdit.innerHTML = '<i class="fa-solid fa-pen"></i>'
        todoDel.innerHTML = '<i class="fa-solid fa-trash-can"></i>'

        if(todo.isCompleted) {
            todoItem.classList.add('checked');
            todoCheck.innerHTML = '<i class="fa-solid fa-check"></i>'
        }

        todoList.appendChild(todoItem)
        todoItem.appendChild(todoCheck)
        todoItem.appendChild(todoCont)
        todoItem.appendChild(todoBtn)
        todoBtn.appendChild(todoEdit)
        todoBtn.appendChild(todoDel)
    })
    
}

function init() {
    todoText.addEventListener('keypress',function(e){
        if (e.key === 'Enter') {
            addTodo(e.target.value);
            todoText.value ='';
        }
    })
}

function todopagenation() {
    const todoPage = document.getElementsByClassName('todo-post')
}

init()