const Setting = require('./setting');
const Game = require('./game');
const game = new Game;

    /* 
     * 0: 빈 자리
     * size: size 
     * -1 : 잠수함 부분 폭파
     * -2 : 빈공간 격추
     */

class Player {

    constructor() {
        this.sea = game.sea;
        this.ship = Setting.ships;    // [ 5, 4, 3, 3, 2 ]
    }

    // place ship

    placeShip(size, direction, x, y){
        if(direction === "h" && this.checkShip(size, direction, x, y)){
            return this.placeHorizontalShip(size, x, y)  // return ship
        }else if(direction === "v" && this.checkShip(size, direction, x, y)){
            return this.placeVerticalShip(size, x, y)   // return ship
        }else{
            console.log("이미 배가 위치하고 있습니다.") 
        }
    }

    checkShip(size, direction, x, y){
        if(direction === "h"){
            for(let i=0; i<size; i++){
                if(this.sea[y-1][x-1+i] > 1){
                    return false;
                }
            }
        }else{
            for(let i=0; i<size; i++){
                if(this.sea[y-1+i][x-1] > 1){
                    return false;
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
        let size = this.sea[y-1][x-1]
        if(this.sea[y-1][x-1] > 1) {
            arr.splice(x-1, 1, -1);
            this.sunkShip(size)
        }else{
            arr.splice(x-1, 1, -2);
            console.log("공간이 비어있습니다.")
        }
        return this.sea;
    }

    sunkShip(size){
        let checkNum = 0;
        this.sea.forEach((row)=>{
            if(row.indexOf(size) === -1) {
                checkNum += 1
            } 
            if(checkNum === Setting.gridRows){
                console.log(`크기가 ${size} 인 잠수함이 격추되었습니다.`)
                this.ship.splice(this.ship.indexOf(size), 1)
                console.log(this.ship)
                //return size;
            }
        })
    }
    
}

const player = new Player;


// console.log(player.placeShip(5, "h", 2, 3))
// console.log(player.placeShip(5, "h", 1, 3))
console.log(player.placeShip(3, "v", 1, 2))
console.log(player.shootShip(1, 2))
console.log(player.shootShip(1, 3))
console.log(player.shootShip(1, 4))
game.win(player.ship)


