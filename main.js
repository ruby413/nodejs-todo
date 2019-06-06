const Login = require('./login');
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
        login.signUp([name, id, pw])
    }

    login([name, id, pw]){
        login.checkLogin([id, pw])
        //console.log(`${id} 님 게임시작합니다.`)
    }
}

const askforLogin = new AskforLogin();

const startGame = () => {
    order( "명령하세요 : ", (answer) => {
        if(answer === "회원가입"){
            return askforLogin.askName().then(askforLogin.askId).then(askforLogin.askPw).then(askforLogin.signUp)
        }
        if(answer === "로그인"){
            return askforLogin.askId().then(askforLogin.askPw).then(askforLogin.login)
        }
        startGame()
    } )
}
 
startGame()


