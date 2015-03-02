/*
APIs
	setItem(key, value)
	getItem(key) 	=> value
	removeItem(key)
	clear()
	key(index) 		=> key
	length

    unique key -> new Date().valueOf().toString()
*/
function onBtnAddItemClick(){
       var txtBox = document.getElementById("txtGroceryItem");
       var groceryItemName = txtBox.value;
       var newGroceryItem = document.createElement("li");
       newGroceryItem.innerHTML = groceryItemName;
       newGroceryItem.addEventListener("click", onGroceryItemClick);
       var groceryList = document.getElementById("groceryList");
       groceryList.appendChild(newGroceryItem);
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
    }
function onBtnRemoveBoughtClick(){
     var groceryList = document.getElementById("groceryList").children;
    for(var i = groceryList.length - 1 ; i >= 0; i--){
        if (groceryList[i].classList.contains("bought"))
            groceryList[i].remove();
    }
}

    window.addEventListener("DOMContentLoaded", init);
