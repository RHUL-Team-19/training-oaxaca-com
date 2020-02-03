package menu

import (
  "net/http"
  "strconv"
  "github.com/gin-gonic/gin"
)

// deleteHandler is called when a HTTP DELETE request is sent to /menu.
func (r *Resource) deleteHandler(c *gin.Context) {
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

  // delete record and handle error
  if err := r.db.DeleteMenuMeal(id); err != nil {
    c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
    return
  }

  // return 204 status
  c.Status(http.StatusNoContent)
}
