const Setting = require('./setting');

class Game {
    constructor() {
        this.sea = this.makeSea(Setting.gridRows, Setting.gridCols)
    }

    makeSea(rows, cols) {
        return Array(rows).fill([]).map(() => this.makeArr(cols));
    }

    makeArr(cols){
        let array = new Array();
        for(let i=0; i<cols; i++){
            array[i] = 0;
        }
        return array
    }

    win(ship){
        if(ship.length === 0){
            return console.log(`승리하셨습니다.`)
        }
    }

}

// const game = new Game
module.exports = Game;