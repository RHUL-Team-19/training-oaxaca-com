class readTxt {
    private fs = require('fs');
    constructor() { }
    showFile(filename:string) {

        this.fs.readFile(filename, function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log(data.toString());
        });
    }
    splitFile(filename:string){
        this.fs.readFile(filename, function (err, data) {
            if (err) {
                return console.error(err);
            }
            let textByLine = data.toString('utf-8').split("\n");
            return textByLine[0];
        });
    }
}

let rt = new readTxt();
//rt.showFile('sampleMenu.txt');
console.log(rt.splitFile('sampleMenu.txt'));