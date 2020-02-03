package menu

import (
  "net/http"
  "github.com/gin-gonic/gin"
)

// postHandler is called when a HTTP POST request is made to /menu.
func (r *Resource) postHandler(c *gin.Context) {
  // unmarshaled JSON will be put here
  var input createInput

  // parse input
  if err := c.ShouldBindJSON(&input); err != nil {
    c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
    return
  }

  // input validation
  if valid, reason := input.IsValid(); !valid {
    c.JSON(http.StatusBadRequest, gin.H{"error": reason})
    return
  }

  // pass input to DB method
  if err := r.db.CreateMenuMeal(&input); err != nil {
    c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
    return
  }

  // return 201 status
  c.Status(http.StatusCreated)
}
