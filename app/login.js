const ControlData = require('./control_data');
const data = new ControlData();

class Login {

  async alreadyExistData(inputDataArray){
    let [name, ID, PW] = inputDataArray;
    let clientData = await data.readClientData();
    clientData.forEach((infoObj)=>{
      if( infoObj["name"] === name ) {
        return true;
      } 
      if( infoObj["ID"] === ID ) {
        return true;
      } 
      if( infoObj["PW"] === PW ) {
        return true;
      } 
    })
    return false;
   
  }

  async signUp(inputDataArray){
    if(!data.existDataFile() || !await this.alreadyExistData(inputDataArray)){
      console.log("회원가입이 완료되었습니다.")
    }else{
      console.log("이미 사용하고 계시는 정보입니다.")
    }
  }

  async checkLogin(inputDataArray){
    if(await this.alreadyExistData(inputDataArray) ){
      console.log("로그인 되었습니다.") 
      return true
    }else{
      console.log("잘못입력하셨습니다.")
      return false
    } 
  }

    
}
  
module.exports = Login;