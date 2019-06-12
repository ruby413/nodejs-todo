const fs = require('fs');
const csv = require('csvtojson')

class ControlData {
    constructor() {
        this.dataURL = './../data/client_data.csv'
        this.dataJSON = [];
    }

    makeClientData(information){
        const signUpColumn = "name,ID,PW" + "\n"
        const [name, ID, PW] = information
        let contents = name + "," + ID + "," + PW + "\n";
        if( this.existDataFile() ) {
            fs.appendFileSync(this.dataURL, contents) 
        }else{
            fs.writeFileSync(this.dataURL, signUpColumn + contents, 'utf8');
        }
        
    }

    existDataFile(){
        return fs.existsSync(this.dataURL);
    }

    readClientData(){
        return new Promise((resolve)=>{
            csv().fromFile(this.dataURL).then((jsonObj)=>{
                resolve(jsonObj)
            })
        })
    }
}

module.exports = ControlData;