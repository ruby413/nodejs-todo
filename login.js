const ControlData = require('./control_data');

const data = new ControlData();
let userData = ""

class Login {
    // constructor(생성자). 이름을 바꿀 수 없다.
    constructor(order) {
      // this는 클래스가 생성할 인스턴스를 가리킨다.
      // _name은 클래스 필드이다.
      this.order = order;
    }

    signUp(information){
        let [category, userInfo]= information.match(/[\w\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]+/g)
        userData = category + '\n' + userInfo;
        data.makeDataFile(userData)
    }
  }
  
  // 인스턴스 생성

module.exports = Login;