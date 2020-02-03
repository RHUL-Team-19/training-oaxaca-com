module api-oaxaca-com/resources/menu

go 1.13

require (
	api-oaxaca-com/packages/db v0.0.0
	github.com/gin-gonic/gin v1.5.0
)

replace api-oaxaca-com/packages/db => ../../packages/db
