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
