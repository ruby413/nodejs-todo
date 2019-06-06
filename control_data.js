const fs = require('fs');

class ControlData {

    makeClientData(information){
        const signUpColumn = "name,ID,PW" + "\n"
        const [name, ID, PW] = information
        let contents = name + "," + ID + "," + PW + "\n";
        fs.exists('./data/client_data.csv', function (exists) { 
            if(exists){
                fs.appendFile('./data/client_data.csv', contents, function (err) { 
                    if (err) throw err; 
                });
            }else{
                fs.writeFile('./data/client_data.csv', signUpColumn + contents, 'utf8' , function(err) {
                    if(err) throw err;
                });
            }
        });
    }

    readClientData(){
       return fs.readFileSync('./data/client_data.csv', 'utf8');
    }

}

module.exports = ControlData;