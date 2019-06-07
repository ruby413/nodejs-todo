var net = require('net');
var port = 5000;
var server = net.createServer(function(client){
   // console.log(client.remotePort + '가 접속되었습니다.');
    console.log('   local = %s:%s', client.localAddress, client.localPort);
    console.log('   remote = %s:%s', client.remoteAddress, client.remotePort);
});

var clientSockets = []; 

server.on('connection', function(socket){
    clientSockets.push(socket);
    console.log(clientSockets.length + "번째 접속자입니다.")
    socket.on('data', function(data){
        console.log(socket._peername.port +" : "+ data.toString())
        clientSockets.forEach(function(otherSocket){
            if(otherSocket!=socket){
                otherSocket.write(data);
            }
        });
    });
    socket.on('close', function(){
        console.log(clientSockets[clientSockets.length-1]._peername.port+"의 접속이 끊겼습니다.");
        var index = clientSockets.indexOf(socket);
        if(index != -1){
            clientSockets.splice(index, 1);
        }
    })
   // socket.end();
});

server.listen(port);