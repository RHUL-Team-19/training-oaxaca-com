# menu
This resource defines a New function that takes a database and returns a pointer
to a new instance of Resource. This can then be passed to a module
api-oaxaca-com/packages/server.New function.

### models
```
menuMeal {
  meal_id: ID!
  name: String!
  price: Float!
  description: String!
  is_vegan: Boolean!
  is_vegetarian: Boolean!
  does_contain_egg: Boolean!
  does_contain_soy: Boolean!
  does_contain_fish: Boolean!
  does_contain_lactose: Boolean!
  does_contain_wheat: Boolean!
  does_contain_nuts: Boolean!
  does_contain_gluten: Boolean!
  does_contain_dairy: Boolean!
  image_url: String!
}
```
This package defines a menu meal model - which represents a meal (which is on
the restaurant's menu) record within the database.

### inputs and input validation
```
create_input {
  name: String! // 5 <= length <= 50; non-nullable field
  price: Float! // 0 <=; non-nullable field
  description: String! // 10 <= length <= 256; non-nullable field
  is_vegan: Boolean! // non-nullable field
  is_vegetarian: Boolean! // non-nullable field
  does_contain_egg: Boolean! // non-nullable field
  does_contain_soy: Boolean! // non-nullable field
  does_contain_fish: Boolean! // non-nullable field
  does_contain_lactose: Boolean! // non-nullable field
  does_contain_wheat: Boolean! // non-nullable field
  does_contain_nuts: Boolean! // non-nullable field
  does_contain_gluten: Boolean! // non-nullable field
  does_contain_dairy: Boolean! // non-nullable field
  image_url: String! // 5 <= length <= 256; non-nullable field
}

update_input {
  name: String // 5 <= length <= 50; nullable field
  price: Float // 0 <=; nullable field
  description: String // 10 <= length <= 256; nullable field
  is_vegan: Boolean // nullable field
  is_vegetarian: Boolean // nullable field
  does_contain_egg: Boolean // nullable field
  does_contain_soy: Boolean // nullable field
  does_contain_fish: Boolean // nullable field
  does_contain_lactose: Boolean // nullable field
  does_contain_wheat: Boolean // nullable field
  does_contain_nuts: Boolean // nullable field
  does_contain_gluten: Boolean // nullable field
  does_contain_dairy: Boolean // nullable field
  image_url: String // 5 <= length <= 256; nullable field
}
```
When POSTing to the server, a create_input must be provided. When updating an
existing record in the database, an update_input must be provided along with
the record's id.

### HTTP POST
```
POST /menu
```
Creates a new menu meal record.

### HTTP GET
```
GET /menu
GET /menu/{id}
```
Fetch all menu meal records or fetch one meal by ID.

### HTTP PATCH
```
PATCH /menu/{id}
```
Partial update for an existing menu meal record.

### HTTP DELETE
```
DELETE /meal/{id}
```
Delete a meal record by its ID.
