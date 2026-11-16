let todoList = [
    {
        item: 'Buy Milk',
        dueDate: '04-11-2026'
    },
    {
        item: 'Go to College',
        dueDate: '04-11-2026'
    }
];
displayItem();

function addTodo(){
    let inputElement = document.querySelector('#txt');
    let dateElement = document.querySelector('#dat');

    let todoItem = inputElement.value;
    let todoDate = dateElement.value;

    todoList.push({item: todoItem, dueDate: todoDate});
    inputElement.value = '';
    dateElement.value = '';
    
    displayItem();
}

function displayItem() {
    let contanierElement = document.querySelector('.item-container');
    
    let newHtml = '';


    for( i = 0; i < todoList.length; i++){
        let {item, dueDate} = todoList[i];
        newHtml += `
            
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class="btn1" onclick="todoList.splice(${i},1);
            displayItem();">Delete</button>
        `;
    }
    contanierElement.innerHTML = newHtml;
}