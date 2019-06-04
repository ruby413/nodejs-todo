const Login = require('./login');
const readline = require('readline');
let r = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
r.setPrompt('명령하세요 : ');
r.prompt();
r.on('line', (answer) => {
    const login = new Login(answer);
    login.signUp()
})
