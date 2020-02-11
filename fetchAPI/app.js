// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

var url = 'https://api-oaxaca-com.wsantos.net/menu/'; //api url

// Open a new connection, using the GET request on the URL endpoint
request.open('GET',url, true);

