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


var groceryStorage = {
    add : function(groceryItemName){
        var key = new Date().valueOf().toString();
        localStorage.setItem(key, groceryItemName);
        return {
            key : key,
            name : groceryItemName
        }
    },
    getAll : function(){
        var result = [];
        for(var i= 0; i< localStorage.length;i++){
            var key = localStorage.key(i);
            var groceryItemName = localStorage.getItem(key);
            var newItem = {
                key : key,
                name : groceryItemName
            };
            result.push(newItem);
        }
        return result;
    },
    remove : function(key){
        localStorage.removeItem(key);
    }
}
