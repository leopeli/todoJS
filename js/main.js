const listElement = document.querySelector('#app ul')
const inputElement = document.querySelector('#app input')
const buttonElement = document.querySelector('#app button')

var todos = [
  'Ir para academia',
  'Estudar',
  'Fazer freela'
]

// function renderTodos() {
//   for (todo of todos) {
//     let todoElement = document.createElement('li')
//     let todoText = document.createTextNode(todo)

//     todoElement.appendChild(todoText);
//     listElement.appendChild(todoElement)
//   }
// }


function renderTodos() {
  listElement.innerHTML = ''
  let listItemsElement = document.querySelectorAll('#app ul li')

  todos.forEach(function(todo) {
    let todoElement = document.createElement('li')
    todoElement.classList.add('list-item')
    let todoText = document.createTextNode(todo)
  
    todoElement.appendChild(todoText)
    listElement.appendChild(todoElement)
  })

  }
renderTodos()

function addTodo() {
  let todoText = inputElement.value

  todos.push(todoText)
  inputElement.value = ''
  renderTodos()
}

buttonElement.addEventListener('click', function() {
  !inputElement.value ? alert('deu falso') : addTodo()
})
