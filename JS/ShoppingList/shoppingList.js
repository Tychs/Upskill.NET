const itemList = document.getElementById('item-list');
const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const clearItemsButton = document.getElementById('clear-items');


itemForm.addEventListener('submit', onFormSubmit);
document.addEventListener('mousemove', onMouseMove);
itemList.addEventListener('mouseover', onMouseOverItemList);

function init() {
    //alert('Hi!')
}

function onFormSubmit(evt) {
    //alert(evt)
    evt.preventDefault();

    const newItemText = itemInput.value;
    const newItem = document.createElement("li")
    newItem.classList.add('item')
    newItem.textContent = newItemText

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.classList.add('delete')
    deleteButton.addEventListener('click', onDeleteItem);
    newItem.appendChild(deleteButton)

    itemList.appendChild(newItem)

}

function onDeleteItem(e) {
    if (e.target.classList.contains('delete')) {
        const itemToDelete = e.target.parentElement;
        itemList.removeChild(itemToDelete)
    }
    console.log(e)
}

function onMouseOverItemList(e) {
    if (e.target.classList.contains('item')) {
        e.target.classList.toggle('highlight')
    }
}

function onClickClearAll() {
    itemList.innerHTML = ""
}
function onMouseMove(e) {
    let p = document.getElementById("coords")
    //p.innerHTML = `Coords: ${e.x}, ${e.y}`
    //alert(e)
}