const fs = require('fs');

class ControlData {
    constructor() {
        this.dataURL = './data/client_data.csv'
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
        if(this.existDataFile()){
            return fs.readFileSync(this.dataURL, 'utf8');
        }
    }

}

module.exports = ControlData;