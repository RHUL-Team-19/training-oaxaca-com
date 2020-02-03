package menu

import (
  "github.com/gin-gonic/gin"
)

// type Resource wraps a database connection and implements the
// api-oaxaca-com/packages/server.resource interface.
type Resource struct {
  db *dbWrapper
}

// AttachRoutes mounts requests handlers to the gin engine.
func (m *Resource) AttachRoutes(e *gin.Engine) {
  // URL group
  g := e.Group("/menu")

  // attach POST handler
  g.POST("/", m.postHandler)

  // attach GET handlers
  g.GET("/", m.getAllHandler)
  g.GET("/:id", m.getOneHandler)

  // attach PATCH handlers
  g.PATCH("/:id", m.patchHandler)

  // attach DELETE handelrs
  g.DELETE("/:id", m.deleteHandler)
}

// CreateTables takes all models and creates tables for them in the database.
func (m *Resource) CreateTables() error {
  return m.db.db.CreateTablesFor(
    new(menuMeal),
  )
}

// CreateDefaultRecords does nothing here, and simply exists to satisfy the
// resource interface.
func (m *Resource) CreateDefaultRecords() error {
  return nil
}
