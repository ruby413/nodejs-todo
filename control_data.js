const fs = require('fs');

class ControlData {

    makeClientData(information){
        const signUpColumn = "name,ID,PW" + "\n"
        const [name, ID, PW] = information
        let contents = name + "," + ID + "," + PW + "\n";
        if( this.existDataFile() ) {
            fs.appendFileSync('./data/client_data.csv', contents) 
        }else{
            fs.writeFileSync('./data/client_data.csv', signUpColumn + contents, 'utf8');
        }
        
    }

    existDataFile(){
        return fs.existsSync('./data/client_data.csv');
    }

    readClientData(){
        if(this.existDataFile()){
            return fs.readFileSync('./data/client_data.csv', 'utf8');
        }
    }

}

module.exports = ControlData;