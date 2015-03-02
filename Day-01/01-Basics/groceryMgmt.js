function onBtnAddItemClick(){
       var txtBox = document.getElementById("txtGroceryItem");
       var groceryItemName = txtBox.value;
       var newGroceryItem = document.createElement("li");
       newGroceryItem.innerHTML = groceryItemName;
       var groceryList = document.getElementById("groceryList");
       groceryList.appendChild(newGroceryItem);
    }
    function init(){
        var btn = document.getElementById("btnAddItem");
        btn.addEventListener("click", onBtnAddItemClick);
    }
    window.addEventListener("DOMContentLoaded", init);