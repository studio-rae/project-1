
window.addEventListener('DOMContentLoaded', event => {
    const addBtn = document.getElementById('add-btn');
    const list = document.getElementById('list');
    const input = document.getElementById('input');
    const ulist = document.getElementById('ulist');
    // let currentItem = input.value;

    const todoList = {
        // It should store the todos array on an object
        todos: [

        ],

        // using to log todos array to check new input is pushed into it
        temp() {
            return this.todos;
        },

        // It should an add todo method
        addItem(task) {
            // should not push in empty strings
            this.todos.push(task);
        },

        // check for item
        itemCheck() {
            // returns false if there is no input or input is "falsey"
            if (!input.value) return false;

            // loops through todos array to check if new task already exists
            let marray = todoList.todos;
            for (let i = 0; i < marray.length; i++) {
                const item = marray[i];
                if (marray.includes(input.value)) {
                    return true;
                }
            }
            return false;
        },

        // It should have a display todos method
        showItems(currentItem) {
            // checks if item is not in array and if it is not then adds to list and array
            if (!this.itemCheck()) {
                let li = document.createElement('li');
                li.innerHTML = input.value;
                ulist.appendChild(li);

            }
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
    console.log(todoList.todos);
    console.log(todoList.itemCheck(input.value));

    addBtn.addEventListener('click', event => {
        todoList.showItems(input.value);
        input.value = null;

        console.log(todoList.itemCheck(input.value));
    })

})






// Items below to be added in version 2
    // It should have a method to strike out completed tasks
    // It should have a method/button for changing existing tasks
    // It should have an updating timestamp at the bottom
