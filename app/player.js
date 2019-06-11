const Setting = require('./setting');
const Game = require('./game');
const game = new Game;

    /* 
     * 0: 빈 자리
     * size: size 
     * -1 : 잠수함 부분 폭파
     * -2 : 잠수함 격추
     * -3 : 빈공간 격추
     */

class Player {

    constructor() {
        this.sea = game.sea;
        this.ship = Setting.ships;    // [ 5, 4, 3, 3, 2 ]
        this.shipInfo = {}
    }

    // place ship

    placeShip(size, direction, x, y){
        if(direction === "h" && this.checkShip(size, direction, x, y)){
            return this.placeHorizontalShip(size, x, y)  // return ship
        }else if(direction === "v" && this.checkShip(size, direction, x, y)){
            return this.placeVerticalShip(size, x, y)   // return ship
        }
    }

    checkShip(size, direction, x, y){
        if(direction === "h"){
            for(let i=0; i<size; i++){
                if(this.sea[y-1][x-1+i] > 1){
                    throw "이미 배가 위치하고 있습니다."
                }
            }
        }else{
            for(let i=0; i<size; i++){
                if(this.sea[y-1+i][x-1] > 1){
                    throw "이미 배가 위치하고 있습니다."
                }
            }
        }
        return true
    } 

    placeHorizontalShip(size, x, y){ //(3,2,3)
        if(this.sea[y-1].length - x >= size){
            this.sea[y-1].forEach((empty, i)=>{
                if((x-1)<= i && i< (x-1)+size){
                    this.sea[y-1][i] = empty + size;

                }   
            })
        }else{
            this.sea[y-1].forEach((empty, i)=>{
                if(i >= this.sea[y-1].length - size){
                    this.sea[y-1][i] = empty + size;
                }   
            })
        } 
        return this.sea;
    }

    placeVerticalShip(size, x, y){
        if(this.sea.length - y >= size){
            this.sea.forEach((empty, i)=>{
                if((y-1) <= i && i < (y-1) + size){
                    this.sea[i][x-1] = empty[x-1] + size;
                }
            })
       }else{
            this.sea.forEach((empty, i)=>{
                if(i >= this.sea.length - size){
                    this.sea[i][x-1] = empty[x-1] + size;
                }
            })
       }
       return this.sea;
    }


    //shoot ship
    shootShip(x, y){
        let arr = this.sea[y-1];
        if(this.sea[y-1][x-1] > 1) {
            arr.splice(x-1, 1, -1);
        }else{
            arr.splice(x-1, 1, -3);
            console.log("공간이 비어있습니다.")
        }
        return this.sea;
    }

    
}

const player = new Player;

try {
    console.log(player.placeShip(5, "h", 2, 3))
    // console.log(player.placeShip(5, "h", 1, 3))
    // console.log(player.placeShip(2, "v", 1, 2))
    console.log(player.shootShip(2, 3))
    console.log(player.shootShip(2, 4))
}
catch(e) {
    console.log(e);
}

