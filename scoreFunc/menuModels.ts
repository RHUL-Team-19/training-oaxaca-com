class menuModels {
    private meal_id:string;
    private name:string;
    private price:number;
    private description:string;
    private is_vegan:boolean;0
    private is_vegetarian:boolean;
    private does_contain_egg:boolean;
    private does_contain_soy:boolean;
    private does_contain_fish:boolean;
    private does_contain_nuts:boolean;
    private does_contain_gluten:boolean;
    private does_contain_dairy:boolean;
    private image_url:string;
    constructor (
        meal_id:string,
        name:string,
        price:number,
        description:string,
        is_vegan:boolean,
        is_vegetarian:boolean,
        does_contain_egg:boolean,
        does_contain_soy:boolean,
        does_contain_fish:boolean,
        does_contain_nuts:boolean,
        does_contain_gluten:boolean,
        does_contain_dairy:boolean,
        image_url:string
    ) {
        this.meal_id = meal_id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.is_vegan = is_vegan;
        this.is_vegetarian = is_vegetarian;
        this.does_contain_egg = does_contain_egg;
        this.does_contain_soy = does_contain_soy;
        this.does_contain_fish = does_contain_fish;
        this.does_contain_nuts = does_contain_nuts;
        this.does_contain_gluten = does_contain_gluten;
        this.does_contain_dairy = does_contain_dairy;
        this.image_url = image_url;
    }
    public setMealID(meal_id:string) {
        this.meal_id = meal_id;
    }
    public getMealID():string {
        return this.meal_id;
    }
    public setName(name:string) {
        this.name = name;
    }
    public getName():string {
        return this.name;
    }
    public setPrice(price:number) {
        this.price = price;
    }
    public getPrice():number {
        return this.price;
    }
    public setDescription(description:string) {
        this.description = description;
    }
    public getDescription():string {
        return this.description;
    }
    public setVegan(is_vegan:boolean){
        this.is_vegan = is_vegan;
    }
    public getVegan():boolean {
        return this.is_vegan;
    }
    public setVegetarian(is_vegetarian:boolean) {
        this.is_vegetarian = is_vegetarian;
    }
    public getVegetarian():boolean {
        return is_vegetarian;
    }
    public setContainEgg(does_contain_egg:boolean) {
        this.does_contain_egg = does_contain_egg;
    }
    public getContainEgg():boolean {
        return this.does_contain_egg;
    }
    public setContainSoy(does_contain_soy:boolean) {
        this.does_contain_soy = does_contain_soy;
    }
    public getContainSoy():boolean {
        return this.does_contain_soy;
    }
    public setContainFish(does_contain_fish:boolean) {
        this.does_contain_fish = does_contain_fish;
    }
    public getContainFish():boolean {
        return this.does_contain_fish;
    }
    public setContainNuts(does_contain_nuts:boolean) {
        this.does_contain_nuts = does_contain_nuts;
    }
    public getContainNuts():boolean {
        return this.does_contain_nuts;
    }
    public setContainGluten(does_contain_gluten:boolean) {
        this.does_contain_gluten = does_contain_gluten;
    }
    public getContainGluten():boolean {
        return this.does_contain_gluten;
    }
    public setContainDairy(does_contain_dairy:boolean) {
        this.does_contain_dairy = does_contain_dairy;
    }
    public getContaindairy():boolean {
        return this.does_contain_dairy;
    }
    public setImageURL(image_url:string) {
        this.image_url = image_url;
    }
    public getImageURL():string {
        return this.image_url;
    }
}