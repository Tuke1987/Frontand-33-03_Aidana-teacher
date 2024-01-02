// контекст this
const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')

const createTodo = () => {
    if (input.value.trim() === ''){
        return alert('Нельзя вводить пустоту или пробелы')
    }

    const div = document.createElement('div')
    const divButtons = document.createElement('div')

    const text = document.createElement('h3')
    const deleteButton = document.createElement('button')
    const editButton = document.createElement('button')

    deleteButton.innerHTML = 'DELETE'
    editButton.innerHTML = 'EDIT'

    div.setAttribute('class', 'block_text')
    divButtons.setAttribute('class', 'div_button')
    deleteButton.setAttribute('class', 'delete_button')
    editButton.setAttribute('class', 'edit_button')

    divButtons.append(deleteButton, editButton)
    div.append(text, divButtons)
    text.innerHTML = input.value

    todoList.prepend(div)
    console.dir(todoList)
    input.value = ''

    deleteButton.onclick = () => div.remove()
    editButton.onclick = () => {
        const editedText = prompt(`Edited -> ${text.innerHTML}`).trim()
        editedText === '' ? alert('Нельзя вводить пустоту'): text.innerHTML = editedText
    }

    text.addEventListener('click', () => text.classList.toggle('toggle'))

}

createButton.onclick = () => createTodo()
window.onkeydown = (ev) =>{
    if (ev.code === 'Enter'){
        createTodo()
    }
}

//truthy and falsy - выражения
//falsy -> 0, '', "", ``, NaN, null, undef, 7n, false

var element1 = null
var element = !null
console.log(element1 ? 'true':'false')
console.log(element ? 'true':'false')

console.log(true+false)
console.log(true+true)
