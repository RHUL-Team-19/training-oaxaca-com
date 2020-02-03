package menu

import (
  "strconv"
  "net/http"
  "github.com/gin-gonic/gin"
)

// getAllHandler is called when a HTTP GET request is made to /menu.
func (r *Resource) getAllHandler(c *gin.Context) {
  // fetch all from database
  meals, err := r.db.GetAllMenuMeals()
  if err != nil {
    c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
    return
  }

  // return result as JSON
  c.JSON(http.StatusOK, meals)
}

// getOneHandler is called when a HTTP GET request is made to /menu/{id}.
func (r *Resource) getOneHandler(c *gin.Context) {
  // parse ID from URL
  id, err := strconv.ParseInt(
    c.Param("id"),
    10,
    64,
  )
  if err != nil {
    c.JSON(http.StatusBadRequest, gin.H{"error": "Bad ID"})
    return
  }

  // fetch one from database by ID
  meal, err := r.db.GetMenuMeal(id)
  if err != nil {
    c.JSON(http.StatusBadRequest, gin.H{"error": "ID does not exist"})
    return
  }

  // return result 200 as JSON
  c.JSON(http.StatusOK, meal)
}
