
const listItems = document.querySelectorAll('.modal-list-item');

listItems.forEach(item => item.addEventListener('click', onListItemClick));

function onListItemClick(e) {
    let item = e.currentTarget.querySelector('.checkbox-hidden');
    
    if (item.checked === true) {
        item.checked = false;
        return;
    }
    item.checked = true;
}