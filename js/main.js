const listElement = document.querySelector('#app ul')
const inputElement = document.querySelector('#app input')
const buttonElement = document.querySelector('#app button')

var todos = JSON.parse(localStorage.getItem('list_todos')) || []

function renderTodos() {
  listElement.innerHTML = ''

  todos.forEach(function(todo, todoIndex) {
    let todoElement = document.createElement('li')
    todoElement.classList.add('list-item')
    let todoText = document.createTextNode(todo)

    let todoLink = document.createElement('a')
    todoLink.classList.add('list-item-link')
    
    let faDeleteIcon = document.createElement('i')
    faDeleteIcon.classList.add('far')
    faDeleteIcon.classList.add('fa-trash-alt')
    
    todoLink.appendChild(faDeleteIcon)
    todoLink.setAttribute('href', '#')
    todoLink.setAttribute('onclick', `deleteTodo(${todoIndex})`)

    todoElement.appendChild(todoText)
    todoElement.appendChild(todoLink)
    listElement.appendChild(todoElement)

  })

  }
renderTodos()

function addTodo() {
  let todoText = inputElement.value

  todos.push(todoText)
  inputElement.value = ''
  renderTodos()
  saveToStorage()
}

buttonElement.addEventListener('click', function() {
  !inputElement.value ? alert('deu falso') : addTodo()
})

function deleteTodo(pos) {
  todos.splice(pos, 1)
  renderTodos()
  saveToStorage()
}

function saveToStorage() {
  localStorage.setItem('list_todos', JSON.stringify(todos))
}