"use strict";
exports.__esModule = true;
var fs = require("fs");
var menuModels_1 = require("./HTTP-request/menuModels");
//import menuModels = require("./menuModels");
var Main = /** @class */ (function () {
    function Main() {
        var file = fs.readFileSync('menuData.txt', 'utf-8'); //a whole string containing whole menuData.txt
        var textByLine = file.split('\n'); //an array row-wise
        var recordCount = 0;
        var item = new menuModels_1.menuModels();
        menuModels_1.menuModels.init("2", "", 0, "", false, false, false, false, false, false, false, false, "");
        for (var i = 0; i < textByLine.length - 1; ++i) {
            var field_name = textByLine[i].split('\t')[0];
            var data = textByLine[i].split('\t')[1];
            if (field_name.localeCompare("meal_id") == 0) {
                ++recordCount;
                //new record is created
            }
            var str = field_name + ": " + data;
            console.log(str); //inspect data stored in the textfile
        }
        console.log(recordCount); //check number of records
    }
    return Main;
}());
exports.Main = Main;
var main = new Main();
