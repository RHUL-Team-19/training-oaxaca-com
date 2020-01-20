package main

import (
  "net/http"
  "github.com/gin-gonic/gin"
)

func main() {
  r := gin.Default()

  r.Static("/assets", "./build/assets")
  r.Static("/static", "./build/static")
  r.StaticFile("/favicon.ico", "./build/assets/img/favicons/favicon.ico")
  r.StaticFile("/robots.txt", "./build/robots.txt")

  r.LoadHTMLFiles("./build/index.html")

  r.NoRoute(func(c *gin.Context) {
    c.HTML(
      http.StatusOK,
      "index.html",
      gin.H{},
    )
	})

  r.Run()
}
