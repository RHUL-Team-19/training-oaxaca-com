"use strict";
exports.__esModule = true;
var menuModels = /** @class */ (function () {
    function menuModels(meal_id, name, price, description, is_vegan, is_vegetarian, does_contain_egg, does_contain_soy, does_contain_fish, does_contain_nuts, does_contain_gluten, does_contain_dairy, image_url) {
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
    menuModels.prototype.setMealID = function (meal_id) {
        this.meal_id = meal_id;
    };
    menuModels.prototype.getMealID = function () {
        return this.meal_id;
    };
    menuModels.prototype.setName = function (name) {
        this.name = name;
    };
    menuModels.prototype.getName = function () {
        return this.name;
    };
    menuModels.prototype.setPrice = function (price) {
        this.price = price;
    };
    menuModels.prototype.getPrice = function () {
        return this.price;
    };
    menuModels.prototype.setDescription = function (description) {
        this.description = description;
    };
    menuModels.prototype.getDescription = function () {
        return this.description;
    };
    menuModels.prototype.setVegan = function (is_vegan) {
        this.is_vegan = is_vegan;
    };
    menuModels.prototype.getVegan = function () {
        return this.is_vegan;
    };
    menuModels.prototype.setVegetarian = function (is_vegetarian) {
        this.is_vegetarian = is_vegetarian;
    };
    menuModels.prototype.getVegetarian = function () {
        return this.is_vegetarian;
    };
    menuModels.prototype.setContainEgg = function (does_contain_egg) {
        this.does_contain_egg = does_contain_egg;
    };
    menuModels.prototype.getContainEgg = function () {
        return this.does_contain_egg;
    };
    menuModels.prototype.setContainSoy = function (does_contain_soy) {
        this.does_contain_soy = does_contain_soy;
    };
    menuModels.prototype.getContainSoy = function () {
        return this.does_contain_soy;
    };
    menuModels.prototype.setContainFish = function (does_contain_fish) {
        this.does_contain_fish = does_contain_fish;
    };
    menuModels.prototype.getContainFish = function () {
        return this.does_contain_fish;
    };
    menuModels.prototype.setContainNuts = function (does_contain_nuts) {
        this.does_contain_nuts = does_contain_nuts;
    };
    menuModels.prototype.getContainNuts = function () {
        return this.does_contain_nuts;
    };
    menuModels.prototype.setContainGluten = function (does_contain_gluten) {
        this.does_contain_gluten = does_contain_gluten;
    };
    menuModels.prototype.getContainGluten = function () {
        return this.does_contain_gluten;
    };
    menuModels.prototype.setContainDairy = function (does_contain_dairy) {
        this.does_contain_dairy = does_contain_dairy;
    };
    menuModels.prototype.getContaindairy = function () {
        return this.does_contain_dairy;
    };
    menuModels.prototype.setImageURL = function (image_url) {
        this.image_url = image_url;
    };
    menuModels.prototype.getImageURL = function () {
        return this.image_url;
    };
    return menuModels;
}());
exports.menuModels = menuModels;
