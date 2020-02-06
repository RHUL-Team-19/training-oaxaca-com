# importing the requests library 
import requests
import urllib.request

# api-endpoint 
URL = "https://api-oaxaca-com.wsantos.net/menu/"

# inspect a response of http request
response = requests.get(URL)

contents = urllib.request.urlopen("https://api-oaxaca-com.wsantos.net/menu/").read()
contents = str(contents,'utf-8')

str_content = ""
for i in contents:
    if i=='[' or i==']' or i=='{' or i=='}' or i=='"' or i=='\n':
        pass
    else:
        str_content += i

record_based = str_content.split(',')

print(record_based)

txtfile = open("menuData.txt","a+")


for k in record_based:
    for j in k.split(':',1):
        txtfile.write(j)
        txtfile.write('\t')
    txtfile.write('\n')

if response.status_code == 200:
    print(response.status_code,': Success!')
elif response.status_code == 404:
    print(response.status_code,': Not Found.')

txtfile.close()
