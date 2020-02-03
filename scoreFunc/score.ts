class Points {
    public points:number;
    constructor (initScore:number=0) {
        this.points = initScore;
    }
    function getPoints():number {
        return this.points;
    }
    function resetPoints():void{
        this.points=0;
    }
    function addPoint(increment:number=0):void{
        this.points+=increment;
    }
    function rmvPoint(decrement:number=0):void{
        this.points-=decrement;
        if (this.points<0){
            this.points=0;
            console.error("The score is negative. It will be reset to 0.");
        }
    }
}