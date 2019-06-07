const net = require('net');
// const crypto = require('crypto');
// const shasum = crypto.createHash('sha256');
const Login = require('./app/login');
const login = new Login();
const readline = require('readline');
let r = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


const order = (order, callback) => {
    r.setPrompt(order);
    r.prompt();
    r.on('line', callback)
}

class AskforLogin {
    askName(){
        return new Promise((resolve) => {
            r.question("이름을 입력해주세요 : ", (name) => { resolve(name) })
        })
    }
    askId(name){
        return new Promise((resolve) => {
            r.question("아이디를 입력해주세요 : ", (id) => { resolve([name, id]) })
        })
    }
    askPw([name, id]){
        return new Promise((resolve) => {
            r.question("비밀번호를 입력해주세요 : ", (pw) => { resolve([name, id, pw]) })
        })
    }
    signUp([name, id, pw]){
        //let cryptoPW = shasum.update(pw);
        login.signUp([name, id, pw])
    }

    login([name, id, pw]){
        //let cryptoPW = shasum.update(pw);
        return login.checkLogin([id, pw])

    }
}

const connectedServer = (loginStatus) => {
    if(loginStatus){
        const client = net.connect(
            {host:'localhost', port:5000},
            function(){
                console.log(`게임에 접속했습니다.`);
        }); 
        client.on('data', function(data){   
            console.log(data.toString());
        });
        
    }
    
   
    // let answer = ""
    //     client.on('data', function(data){   
    //         console.log("someone : " + data.toString());
    //         r.prompt();
    //     });
        
    //     r.on('line', function(line){
    //         if (line == 'exit'){
    //             console.log('request disconnect');
    //             client.write(line);
    //             r.close()
    //         }else{
    //             answer = line;
    //             client.write(line);
    //         }
    //         r.prompt()
    //     });
    //     console.log(answer)
}

const askforLogin = new AskforLogin();

const startGame = () => {
    order( "명령하세요 : ", (answer) => {
        if(answer === "회원가입"){
            return askforLogin.askName().then(askforLogin.askId).then(askforLogin.askPw).then(askforLogin.signUp)
        }
        if(answer === "로그인"){
            return askforLogin.askId().then(askforLogin.askPw).then(askforLogin.login).then(connectedServer);
        }
        startGame()
    } )
}
 
startGame()


