
window.addEventListener('DOMContentLoaded', event => {
    const addBtn = document.getElementById('add-btn');
    const list = document.getElementById('list');
    const input = document.getElementById('input');
    const ulist = document.getElementById('ulist');

    const todoList = {
        // It should store the todos array on an object
        todos: [
            'item 1',
            'item 2',
        ],

        // It should an add todo method
        addItem(newItem) {
            this.todos.push(newItem);
        },

        // It should have a display todos method
        showItems(todoArray) {
            this.todos.forEach(newItem => {
                let li = document.createElement('li');
                li.innerHTML = newItem;
                // li.value = newItem;
                ulist.appendChild(li);
            })

            return ;
        },

        // It should have a change todo method
        changeItem(index, newItem) {
            this.todos[index] = newItem;
        },

        // It should have a delete todo method
        deleteItem(index) {
            this.todos.splice(index, 1);
        },


    };



    addBtn.addEventListener('click', event => {

        todoList.addItem(input.value);
        todoList.showItems(todoList.todos);

    })


})






// Items below to be added in version 2
    // It should have a button to delete or strike out completed tasks
    // It should have a method/button for changing existing tasks
    // It should have an updating timestamp at the bottom
