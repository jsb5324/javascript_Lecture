const createBtn = document.querySelector("#create")
const container = document.querySelector(".container")
var items = document.querySelectorAll(".items")

createBtn.addEventListener("click", function() {
    items = document.querySelectorAll(".items")
    var newItem = document.createElement("div");
    newItem.setAttribute("draggable", "true");
    newItem.className = "items";
    newItem.textContent = "Item" + String(items.length+1);
    newItem.style.top = 300+(items.length*2)+'px'
    newItem.style.left = 300+(items.length*2)+'px'
    container.appendChild(newItem);

    addDraggableListeners(newItem);

    function addDraggableListeners(item) {
        item.addEventListener("dragover", function(e) {
            e.preventDefault();
        });
        item.addEventListener("dragend", function(e) { 
            e.preventDefault();
            item.style.left = e.clientX + "px";
            item.style.top = e.clientY + "px";
        });
    }
})

const trashCan = document.querySelector("#delete")

trashCan.addEventListener("dragover", function(e) {
    e.preventDefault();
});

trashCan.addEventListener("drop", function(e) {
    e.preventDefault();
    var item = document.querySelector('.items:hover');
    item.parentNode.removeChild(item);
})