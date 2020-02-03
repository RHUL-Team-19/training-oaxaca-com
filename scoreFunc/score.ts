class Points {
    public points:number;
    constructor (initScore:number=0) {
        this.points = initScore;
    }
    public getPoints(){
        return this.points;
    }
    public resetPoints(){
        this.points=0;
    }
    public addPoint(increment:number=0){
        this.points+=increment;
    }
    public rmvPoint(decrement:number=0){
        this.points-=decrement;
        if (this.points<0){
            this.points=0;
            console.error("The score is negative. It will be reset to 0.");
        }
    }
}