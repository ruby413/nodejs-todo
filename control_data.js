const fs = require('fs');

class ControlData {

    // constructor(description) {
    //     this.description = description;
    //   }

    makeDataFile(description){
        console.log(description)
        fs.writeFile('./client_data.csv', description, 'utf8' , function(err) {
            console.log(description)
            if(err) throw err;
            console.log('File write completed');
        });
    }
}

module.exports = ControlData;