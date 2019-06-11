const Setting = require('./setting');
// const Player = require('./player');

class Ship {
    constructor() {
        this.sea = Player.sea   
        this.ship = Setting.ships;    //[ 5, 4, 3, 3, 2 ]
    }

    // sunkShip(size){
    //     let tempArr = []
    //     console.log(this.sea)
    //     this.sea.forEach((row)=>{
    //         this.sea[row].forEach((place)=>{
    //             if(place === size){
    //                 tempArr.push(size)
    //             }
    //         })
    //     })
    //     if(tempArr.length === 0){
    //         return console.log(`size ${size} 인 잠수함이 격추되었습니다.`)
    //     }
    // }

}
// module.exports = Ship;