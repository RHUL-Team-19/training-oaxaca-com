package menu

// type menuMeal represents a meal record in the database, and is used by the
// ORM to create the menu meals table.
type menuMeal struct {
  MealID int64 `pg:",pk" json:"meal_id"`
  Name string `pg:",notnull" json:"name"`
  Price float64 `pg:",notnull,use_zero" json:"price"`
  Description string `pg:",notnull" json:"description"`
  IsVegan bool `pg:",notnull,use_zero" json:"is_vegan"`
  IsVegetarian bool `pg:",notnull,use_zero" json:"is_vegetarian"`
  DoesContainEgg bool `pg:",notnull,use_zero" json:"does_contain_egg"`
  DoesContainSoy bool `pg:",notnull,use_zero" json:"does_contain_soy"`
  DoesContainFish bool `pg:",notnull,use_zero" json:"does_contain_fish"`
  DoesContainLactose bool `pg:",notnull,use_zero" json:"does_contain_lactose"`
  DoesContainWheat bool `pg:",notnull,use_zero" json:"does_contain_wheat"`
  DoesContainNuts bool `pg:",notnull,use_zero" json:"does_contain_nuts"`
  DoesContainGluten bool `pg:",notnull,use_zero" json:"does_contain_gluten"`
  DoesContainDairy bool `pg:",notnull,use_zero" json:"does_contain_dairy"`
  ImageURL string `pg:",notnull,use_zero" json:"image_url"`
}
