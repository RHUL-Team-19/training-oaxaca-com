# importing the requests library 
import requests
import urllib.request

# api-endpoint 
URL = "https://api-oaxaca-com.wsantos.net/menu/"

# inspect a response of http request
response = requests.get(URL)

contents = urllib.request.urlopen("https://api-oaxaca-com.wsantos.net/menu/").read()
print(contents)

if response.status_code == 200:
    print(response.status_code,': Success!')
elif response.status_code == 404:
    print(response.status_code,': Not Found.')
