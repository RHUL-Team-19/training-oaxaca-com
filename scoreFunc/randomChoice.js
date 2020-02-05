var readTxt = /** @class */ (function () {
    function readTxt() {
        this.fs = require('fs');
    }
    readTxt.prototype.showFile = function (filename) {
        this.fs.readFile(filename, function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log(data.toString());
        });
    };
    readTxt.prototype.splitFile = function (filename) {
        this.fs.readFile(filename, function (err, data) {
            if (err) {
                return console.error(err);
            }
            var textByLine = data.toString().split("\n");
            return textByLine[0];
        });
    };
    return readTxt;
}());
var rt = new readTxt();
//rt.showFile('sampleMenu.txt');
console.log(rt.splitFile('sampleMenu.txt'));
/*
class randomItem {
    
}
*/ 
