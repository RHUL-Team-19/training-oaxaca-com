# importing the requests library 
import requests

# api-endpoint 
URL = "https://api-oaxaca-com.wsantos.net/"

# inspect a response of http request
response = requests.get(URL)

if response.status_code == 200:
    print(response.status_code,': Success!')
elif response.status_code == 404:
    print(response.status_code,': Not Found.')
