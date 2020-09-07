var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);

function addToDoItem() {
    alert("Add button clicked!");
}

var clearButton = document.getElementById("clear-completed-button");
clearButton.addEventListener("click", clearCompletedToDoItems);

function clearCompletedToDoItems() {
    alert("Clear Completed clicked!");
    }

var emptyButton = document.getElementById("clear-list-button");
emptyButton.addEventListener("click", emptyList);

function emptyList() {
    alert("Clear list button clicked!");
}

var saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", saveList);

function saveList() {
    alert("Save button clicked!");
}

var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");

function newToDoItem(itemText, completed) {
    var toDoItem = document.createElement("li");
    var toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);
    if (completed) {
    toDoItem.classList.add("completed");
    }
    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener("dblclick", toggleToDoItemState);
}

function addToDoItem() {
    var itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);
    }

function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
    this.classList.remove("completed");
    } 
    else {
    this.classList.add("completed");
    }
}

function clearCompletedToDoItems() {
    var completedItems = toDoList.getElementsByClassName("completed");
        
    while (completedItems.length > 0) {
    completedItems.item(0).remove();
    }
}

function emptyList() {
    var toDoItems = toDoList.children;
    
    while (toDoItems.length > 0) {
        toDoItems.item(0).remove();
    }
}