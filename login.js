const ControlData = require('./control_data');

const data = new ControlData();

class Login {
    constructor() {
      this.clientData = data.readClientData()
    }

    checkData(informationArray){
      let checkArray = [];
      informationArray.forEach((info)=>{
        let checkData = this.clientData.match(new RegExp(info,'g'))
        if(checkData !== null){
          checkArray.push(checkData[0]);
        }
      })
      if(JSON.stringify(informationArray) === JSON.stringify(checkArray)){
        return true
      }else{
        return false
      }
    }

    signUp(information){
      if(this.checkData(information)) {
        console.log("이미 사용하고 계시는 정보입니다.")
      }else{
        data.makeClientData(information) 
        console.log("회원가입이 완료되었습니다.")
      }
    }

    checkLogin(information){
      this.checkData(information) ? console.log("로그인 되었습니다.") : console.log("잘못입력하셨습니다.")
    }

    
  }
  

module.exports = Login;