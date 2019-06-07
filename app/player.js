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
        this.sea[y-1][x-1];
        if(this.sea.length - x >= size){
            this.sea[y-1].forEach((empty, i)=>{
                if(i >= (x-1)){
                    sea[y-1][i] = empty + 1
                }   
            })
        }else{
            this.sea[y-1].forEach((empty, i)=>{
                if(i >= this.sea.length - x){
                    sea[y-1][i] = empty + 1
                }   
            })
        } /// x좌표에 따라 sea 를 1로 설정 -> test 필요
    }
}