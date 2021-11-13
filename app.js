// Selectors
document.querySelector('form').addEventListener('submit', handleSubmitForm)
document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck)
document.getElementById('clearAll').addEventListener('click', handleClearAll)

// Event Handlers
// Form Submit
function handleSubmitForm(event) {
    event.preventDefault()
    let input = document.querySelector('input')
    if (input.value != '')
        addToDo(input.value)
    input.value = ''
}
// Buttons(checked & delete)
function handleClickDeleteOrCheck(event) {
    if (event.target.name == 'checkButton')
        checkTodo(event);

    if (event.target.name == 'deleteButton')
        deleteTodo(event);
}


// HelperFunctions
// addToDo
function addToDo(todo) {
    let ul = document.querySelector('ul')
    let li = document.createElement('li')

    li.innerHTML = `
        <span class="todo-item">${todo}</span>
        <button name="checkButton"><i class="fas fa-check-square"></i></button>
        <button name="deleteButton"><i class="fas fa-trash"></i></button>
    `

    li.classList.add('todo-list-item')
    ul.appendChild(li)
}

// checkTodo
function checkTodo(event) {
    let item = event.target.parentNode;
    if (item.style.textDecoration == 'line-through')
        item.style.textDecoration = 'none';
    else
        item.style.textDecoration = 'line-through';
}

// deleteTodo
function deleteTodo(event) {
    let item = event.target.parentNode

    item.addEventListener('transitionend', function () {
        item.remove()
    })

    item.classList.add('todo-list-item-fall')
}

// clearAll
function handleClearAll(event) {
    document.querySelector('ul').innerHTML = ''
}