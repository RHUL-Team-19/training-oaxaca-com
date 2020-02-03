package menu

import (
  "strconv"
  "net/http"
  "github.com/gin-gonic/gin"
)

// patchHandler is called when a HTTP PATCH request is made to /menu.
func (r *Resource) patchHandler(c *gin.Context) {
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

  // unmarshaled JSON will be put here
  var input updateInput

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
  if err := r.db.UpdateMenuMeal(id, &input); err != nil {
    c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
    return
  }

  // return 201 status
  c.Status(http.StatusCreated)
}
