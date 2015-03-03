var nodejsSocket = require("nodejs-websocket");
var server = nodejsSocket.createServer(function(connection){
    console.log("a new connection is established");
    connection.on("text", function(msg){
        server.connections
            .filter(function(con){
                return con !== connection;
            }).forEach(function(con){
                con.sendText(msg);
            });
    });
});
server.listen(9090);
console.log("Socket server listening on port 9090!");
