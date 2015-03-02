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
        sessionStorage.setItem(key, groceryItemName);
        return {
            key : key,
            name : groceryItemName
        }
    },
    getAll : function(){
        var result = [];
        for(var i= 0; i< sessionStorage.length;i++){
            var key = sessionStorage.key(i);
            var groceryItemName = sessionStorage.getItem(key);
            var newItem = {
                key : key,
                name : groceryItemName
            };
            result.push(newItem);
        }
        return result;
    },
    remove : function(key){
        sessionStorage.removeItem(key);
    }
}
