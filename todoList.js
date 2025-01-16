const button = document.getElementById("addButton");
const contentList = document.getElementById("contentList");
let itemCount = 0;

button.addEventListener('click', () => {
    itemCount++;

    const newItem = document.createElement('li');

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

    const textBox = document.createElement('input');
    textBox.type = 'text';
    textBox.placeholder = ` Élément ${itemCount}`;

    newItem.appendChild(checkBox);
    newItem.appendChild(textBox);

    contentList.appendChild(newItem);
}); 

