const activeCellElement = document.querySelector(".position");

function onCellFocus(event) {
    console.log(event.target.id);
    activeCellElement.innerText = event.target.id;
}