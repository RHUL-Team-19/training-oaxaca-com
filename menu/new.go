package menu

import (
  "api-oaxaca-com/packages/db"
)

// New creates and returns a pointer to a new instance of Resource and passes in
// a pointer to a new instance of dbWrapper - containing a pointer to a
// database connection.
func New(db *db.DB) *Resource {
  return &Resource{
    db: &dbWrapper{
      db: db,
    },
  }
}
