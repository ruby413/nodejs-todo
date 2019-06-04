const Login = require('./login');
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


const startGame = () => {
    order( "명령하세요 : ", (answer) => {doLogin(answer)} )
}


const doLogin = (answer) => {
    const login = new Login();
    if (answer === "s") {
        order( "이름을 입력해주세요 : " , (name) => {login.signUp("name " + name)} );
        // order( "아이디를 입력해주세요 : " , (id) => {login.signUp("id " + id)} );
        // order( "비밀번호를 입력해주세요 : " , (pw) => {login.signUp("pw " + pw)} );
        // Promise.all([
        //     new Promise(resolve => order( "이름을 입력해주세요 : " , (name) => {login.signUp("name " + name)} )), // 1
        //     new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
        //     new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
        //   ]).then(console.log) // [ 1, 2, 3 ]
        //     .catch(console.log);
        //login.signUp();
    }
    if (answer === "로그인") {
        order( "아이디를 입력해주세요 : " , (answer) => {console.log(answer)} )
    }
}

startGame()