var net = require('net');
var port = 5000;
var server = net.createServer(function(client){
   // console.log(client.remotePort + '가 접속되었습니다.');
    console.log('local = %s:%s', client.localAddress, client.localPort);
    console.log('remote = %s:%s', client.remoteAddress, client.remotePort);
});

var waitingRoom = []; 
var gameRoom = []; 

const goToGameRoom = (waitingRoom, gameRoom) => {
    waitingRoom.forEach((player, i)=>{
        let battleRoom = [];
        if(i%2===0 || i===0){
            battleRoom.push(player)
            battleRoom.push(waitingRoom[i+1])
            gameRoom.push(battleRoom)
        }
    })
    waitingRoom.splice(0);
    return gameRoom
}

server.on('connection', function(socket){
    waitingRoom.push(socket);
    if(waitingRoom.length%2 === 0){
        goToGameRoom(waitingRoom, gameRoom)  //return [Array(2), Array(2)...]
    }
    if(waitingRoom.length !== 0){
        waitingRoom[0].write("user의 짝이 맞지 않아 waiting 중 입니다.");
    }
    // socket.on('data', function(data){
    //     //console.log(socket._peername.port +" : "+ data.toString())
    //     //waitingRoom.forEach(function(waitingPlayer){
    //         //if(otherSocket!=socket){
    //         waitingRoom[0].write("user의 짝이 맞지 않아 waiting 중 입니다.");
    //         //}
    //     //});
    // });
    
    // console.log("gameRoom"+gameRoom)
    // console.log("gameRoom 1"+gameRoom[0])
    // console.log("gameRoom 2"+gameRoom[1])
    // console.log("waitingRoom"+waitingRoom)

    // if(waitingRoom.length%2 === 0){
    //     waitingRoom.forEach((player, i)=>{
    //         let battleRoom = [];
    //         if(i%2===0 || i===0){
    //             battleRoom.push(player)
    //             battleRoom.push(waitingRoom[i+1])
    //             gameRoom.push(battleRoom)
    //         }
    //     })
    //     waitingRoom = [];
    // }

        socket.on('data', function(data){
            //console.log(socket._peername.port +" : "+ data.toString())
            waitingRoom.forEach(function(otherSocket){
                //if(otherSocket!=socket){
                    otherSocket.write("waiting 중 입니다.");
                //}
            });
        });
    socket.on('close', function(){
        console.log(waitingRoom[waitingRoom.length-1]._peername.port+"의 접속이 끊겼습니다.");
        var index = waitingRoom.indexOf(socket);
        if(index != -1){
            waitingRoom.splice(index, 1);
        }
    })
   // socket.end();
});

server.listen(port);