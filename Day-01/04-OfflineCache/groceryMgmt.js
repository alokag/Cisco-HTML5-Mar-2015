function onBtnAddItemClick(){
    var txtBox = document.getElementById("txtGroceryItem");
    var groceryItemName = txtBox.value;
    var item = groceryStorage.add(groceryItemName);
    addItemToList(item);
}
function addItemToList(item){
    var newGroceryItem = document.createElement("li");
    newGroceryItem.setAttribute("item-key", item.key);
    newGroceryItem.innerHTML = item.name;
    newGroceryItem.addEventListener("click", onGroceryItemClick);
    var groceryList = document.getElementById("groceryList");
    groceryList.appendChild(newGroceryItem);
}
function loadGroceryItemsFromStorage(){
    document.getElementById("groceryList").innerHTML = "";
    var itemsFromStorage = groceryStorage.getAll();
    for(var i=0; i<itemsFromStorage.length; i++)
        addItemToList(itemsFromStorage[i]);
}

function onGroceryItemClick(){
    if (this.classList.contains("bought")){
        this.classList.remove("bought");
    } else {
        this.classList.add("bought");
    }
}

function init(){
    var btn = document.getElementById("btnAddItem");
    btn.addEventListener("click", onBtnAddItemClick);

    var btnRemove = document.getElementById("btnRemoveBought");
    btnRemove.addEventListener("click", onBtnRemoveBoughtClick);

    loadGroceryItemsFromStorage();
}
function onBtnRemoveBoughtClick(){
    var groceryList = document.getElementById("groceryList").children;
    for(var i = groceryList.length - 1 ; i >= 0; i--){
        if (groceryList[i].classList.contains("bought")){
            var key = groceryList[i].getAttribute("item-key");
            groceryStorage.remove(key);
            groceryList[i].remove();
        }
    }
}

window.addEventListener("DOMContentLoaded", init);
window.addEventListener("storage",loadGroceryItemsFromStorage);
