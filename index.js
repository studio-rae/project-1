


const todoList = {
    // It should store the todos array on an object
    todos: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'],

    // It should an add todo method
    addItem(newItem) {
        this.todos.push(newItem);
    },

    // It should have a display todos method
    showItems() {
        console.log(this.todos);
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
todoList.addItem('hello there')
todoList.showItems();
todoList.changeItem(5, 'BOOM');
todoList.showItems();
todoList.deleteItem(2);
todoList.showItems();







// Items below to be added in version 2
// It should have an updating timestamp at the bottom
