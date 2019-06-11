const Setting = require('./setting');
const Game = require('./game');
const game = new Game;

class Player {
    constructor() {
        this.sea = game.sea;
        this.ship = Setting.ships;    //[ 5, 4, 3, 3, 2 ]
    }

    placeShip(size, direction, x, y){
        if(direction === "h" && this.checkShip(size, x, y)){
            return this.placeHorizontalShip(size, x, y)  // return ship
        }else if(direction === "v" && this.checkShip(size, x, y)){
            return this.placeVerticalShip(size, x, y)   // return ship
        }
    }

    checkShip(size, x, y){
        this.sea.forEach((row, j)=>{
            row.forEach((place, i)=>{
                if(place === 1){
                    for(let check = 0; check < size; check++){
                        if(x+check === i+1 && y === j+1){
                            throw "이미 배가 위치하고 있습니다."
                        }
                    }
                }
            })
        })
        return true
    } 

    placeHorizontalShip(size, x, y){ //(3,2,3)
        if(this.sea[y-1].length - x >= size){
            this.sea[y-1].forEach((empty, i)=>{
                if((x-1)<= i && i< (x-1)+size){
                    this.sea[y-1][i] = empty + 1
                }   
            })
        }else{
            this.sea[y-1].forEach((empty, i)=>{
                if(i >= this.sea[y-1].length - size){
                    this.sea[y-1][i] = empty + 1
                }   
            })
        } 
        return this.sea;
    }

    placeVerticalShip(size, x, y){
        if(this.sea.length - y >= size){
            this.sea.forEach((empty, i)=>{
                if((y-1) <= i && i < (y-1)+size){
                    this.sea[i][x-1] = empty[x-1] + 1;
                }
            })
       }else{
            this.sea.forEach((empty, i)=>{
                if(i >= this.sea.length - size){
                    this.sea[i][x-1] = empty[x-1] + 1;
                }
            })
       }
       return this.sea;
    }
}

const player = new Player;

try {
    console.log(player.placeShip(5, "h", 8, 3))
    console.log(player.placeShip(5, "h", 7, 2))
    console.log(player.placeShip(2, "h", 8, 2))
  }
  catch(e) {
    console.log(e);
  }
// console.log(player.placeHorizontalShip(3, 2, 3))