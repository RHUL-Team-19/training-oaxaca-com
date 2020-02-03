package menu

import (
  "api-oaxaca-com/packages/db"
)

// type dbWrapper wraps a database connection and provides higher-level
// operations/abstractions on the database.
type dbWrapper struct {
  db *db.DB
}

// CreateMenuMeal takes a pointer to an instance of a createInput struct and
// then creates a new meal model - which is then inserted into the database.
func (w *dbWrapper) CreateMenuMeal(i *createInput) error {
  // construct record
  r := menuMeal{
    Name: i.Name,
    Price: i.Price,
    Description: i.Description,
    IsVegan: i.IsVegan,
    IsVegetarian: i.IsVegetarian,
    DoesContainEgg: i.DoesContainEgg,
    DoesContainSoy: i.DoesContainSoy,
    DoesContainFish: i.DoesContainFish,
    DoesContainLactose: i.DoesContainLactose,
    DoesContainWheat: i.DoesContainWheat,
    DoesContainNuts: i.DoesContainNuts,
    DoesContainGluten: i.DoesContainGluten,
    DoesContainDairy: i.DoesContainDairy,
    ImageURL: i.ImageURL,
  }

  // insert record and handle error
  if _, err := w.db.Conn.
    Model(&r).
    Insert(); err != nil {
      return err
  } else {
    return nil
  }
}

// GetMenuMeal takes an id and fetches the meal record in the database with that
// id.
func (w *dbWrapper) GetMenuMeal(id int64) (*menuMeal, error) {
  // construct empty record
  r := new(menuMeal)

  // run query and handle error
  if err := w.db.Conn.
    Model(r).
    Where("meal_id = ?", id).
    Select(); err != nil {
      return nil, err
  } else {
    return r, nil
  }
}

// GetAllMenuMeals returns a slice containing all meal records in the database.
func (w *dbWrapper) GetAllMenuMeals() ([]menuMeal, error) {
  // define space for result set
  var meals []menuMeal

  // run query and handle error
  if err := w.db.Conn.
    Model(&meals).
    Select(); err != nil {
      return nil, err
  } else {
    return meals, nil
  }
}

// UpdateMenuMeal takes an id and a pointer to an instance of an updateInput
// struct and then fetches the meal record in the database with the
// corresponding id - and updates its fields.
func (w *dbWrapper) UpdateMenuMeal(id int64, i *updateInput) error {
  // construct empty record
  r := menuMeal{
    MealID: id,
  }

  // assign changed fields
  if i.Name != nil { r.Name = *i.Name }
  if i.Price != nil { r.Price = *i.Price }
  if i.Description != nil { r.Description = *i.Description }
  if i.IsVegan != nil { r.IsVegan = *i.IsVegan }
  if i.IsVegetarian != nil { r.IsVegetarian = *i.IsVegetarian }
  if i.DoesContainEgg != nil { r.DoesContainEgg = *i.DoesContainEgg }
  if i.DoesContainSoy != nil { r.DoesContainSoy = *i.DoesContainSoy }
  if i.DoesContainFish != nil { r.DoesContainFish = *i.DoesContainFish }
  if i.DoesContainLactose != nil { r.DoesContainLactose = *i.DoesContainLactose }
  if i.DoesContainWheat != nil { r.DoesContainWheat = *i.DoesContainWheat }
  if i.DoesContainNuts != nil { r.DoesContainNuts = *i.DoesContainNuts }
  if i.DoesContainGluten != nil { r.DoesContainGluten = *i.DoesContainGluten }
  if i.DoesContainDairy != nil { r.DoesContainDairy = *i.DoesContainDairy }
  if i.ImageURL != nil { r.ImageURL = *i.ImageURL }

  // run query and handle error
  if _, err := w.db.Conn.
    Model(&r).
    WherePK().
    UpdateNotZero(); err != nil {
      return err
  } else {
    return nil
  }
}

// DeleteMenuMeal takes an id and deletes the record in the database with
// that id.
func (w *dbWrapper) DeleteMenuMeal(id int64) error {
  // construct record with ID only
  r := menuMeal{
    MealID: id,
  }

  // run query and handle error
  if _, err := w.db.Conn.
    Model(&r).
    WherePK().
    Delete(); err != nil {
      return err
  } else {
    return nil
  }
}
