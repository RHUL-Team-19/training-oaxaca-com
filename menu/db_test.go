package menu

import (
  "testing"
)

// TestCreateMenuMeal tests the CreateMenuMeal db method by creating a fake
// meal record and then trying to retrieve it from the database. If these two
// steps complete without error, we assume the test passes.
func TestCreateMenuMeal(t *testing.T) {

  // ...

}

// TestGetMenuMeal tests the GetMenuMeal db method by creating a fake meal
// record and then retrieving it by its id. If both of these steps complete
// without error, we assume the test passes.
func TestGetMenuMeal(t *testing.T) {

  // ...

}

// TestGetAllMenuMeals tests the GetAllMenuMeals db method by creating multiple
// fake meal records and then retrieving all of those records. If both of these
// steps complete without error, we assume the test passes.
func TestGetAllMenuMeals(t *testing.T) {

  // ...

}

// TestUpdateMenuMeal tests the UpdateMenuMeal db method by creating a fake
// meal record and then updating one of its fields. The updated record is
// then retrieved from the database, and the updated field is checked. If these
// steps complete without error, we assume the test passes.
func TestUpdateMenuMeal(t *testing.T) {

  // ...

}

// TestDeleteMenuMeal tests the DeleteMenuMeal db method by creating a fake
// record and then deleting it. Then tries to re-fetch the deleted record to
// make sure it doesn't exist. If these steps complete without error, we assume
// the test passes.
func TestDeleteMenuMeal(t *testing.T) {

  // ...

}
