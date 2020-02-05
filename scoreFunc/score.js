var Points = /** @class */ (function () {
    function Points(initScore) {
        if (initScore === void 0) { initScore = 0; }
        this.points = initScore;
    }
    Points.prototype.getPoints = function () {
        return this.points;
    };
    Points.prototype.resetPoints = function () {
        this.points = 0;
    };
    Points.prototype.addPoint = function (increment) {
        if (increment === void 0) { increment = 0; }
        this.points += increment;
    };
    Points.prototype.rmvPoint = function (decrement) {
        if (decrement === void 0) { decrement = 0; }
        this.points -= decrement;
        if (this.points < 0) {
            this.points = 0;
            console.error("The score is negative. It will be reset to 0.");
        }
    };
    return Points;
}());
var pt1 = new Points();
console.log(pt1.getPoints());
var pt2 = new Points(10);
console.log(pt2.getPoints());
for (var i = 0; i < 5; ++i) {
    pt1.addPoint(1);
}
console.log(pt1.getPoints());
pt1.resetPoints();
console.log(pt1.getPoints());
pt2.rmvPoint(10);
console.log(pt2.getPoints());
