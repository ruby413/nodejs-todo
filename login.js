class Login {
    // constructor(생성자). 이름을 바꿀 수 없다.
    constructor(order) {
      // this는 클래스가 생성할 인스턴스를 가리킨다.
      // _name은 클래스 필드이다.
      this.order = order;
    }

    signUp(){
        console.log(this.order)
    }
  }
  
  // 인스턴스 생성

module.exports = Login;