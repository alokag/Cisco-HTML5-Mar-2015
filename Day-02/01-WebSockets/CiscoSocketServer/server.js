var nodejsSocket = require("nodejs-websocket");
var server = nodejsSocket.createServer(function(connection){
    console.log("a new connection is established");
    var timer = setInterval(function(){
        connection.sendText(new Date().toString());
    },5000);
    connection.on("text",function(msg){
        if (msg === "end") {
            clearInterval(timer);
        } else {
            console.log("Unknown message - ", msg);
        }
    });
});
server.listen(9090);
console.log("Socket server listening on port 9090!");
