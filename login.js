const ControlData = require('./control_data');

const data = new ControlData();

class Login {

  alreadyExistData(inputDataArray){
    let clientData = data.readClientData()
    let sameDataArray = [];
    inputDataArray.forEach((info)=>{
      let sameData = clientData.match(new RegExp(info,'g'))
      if(sameData !== null){
        sameDataArray.push(sameData[0]);
      }
    })
    return JSON.stringify(inputDataArray) === JSON.stringify(sameDataArray) ? true : false
  }

  signUp(inputDataArray){
    if(!data.existDataFile() || !this.alreadyExistData(inputDataArray)){
      data.makeClientData(inputDataArray) 
      console.log("회원가입이 완료되었습니다.")
    }else{
      console.log("이미 사용하고 계시는 정보입니다.")
    }
  }

  checkLogin(inputDataArray){
    this.alreadyExistData(inputDataArray) ? console.log("로그인 되었습니다.") : console.log("잘못입력하셨습니다.")
  }

    
  }
  

module.exports = Login;