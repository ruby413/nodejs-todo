const Setting = require('./setting');
const Game = require('./game');
const game = new Game;

class Player {
    constructor() {
        this.sea = game.sea
        this.ship = Setting.ships    //[ 5, 4, 3, 3, 2 ]
    }

    placeShip(size, direction, x, y){
        if(direction === "ㅡ"){

        }else if(direction === "ㅣ"){

        }
    }

    placehorizontalShip(size, x, y){
        if(sea[y-1].length - x >= size){
            sea[y-1].forEach((empty, i)=>{
                if((x-1)<= i && i< (x-1)+size){
                    sea[y-1][i] = empty + 1
                }   
            })
        }else{
            sea[y-1].forEach((empty, i)=>{
                if(i >= sea[y-1].length - size){
                    sea[y-1][i] = empty + 1
                }   
            })
        } 
    }
}