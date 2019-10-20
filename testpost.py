import os
os.environ['NO_PROXY'] = '127.0.0.1'



# importing the requests library 
import requests
import json
# defining the api-endpoint

headers = {'content-type':'application/json'}




'''
API_ENDPOINT = "http://127.0.0.1:4200/userlogin"

data = {"password":"hello","email":"test@gmail.com"}

r = requests.post(url = API_ENDPOINT, data = json.dumps(data), headers=headers)
''''''
API_ENDPOINT = "http://127.0.0.1:4200/signup"

data = {"password":"hello","email":"test@gmail.com","UserID":"testID"}

r = requests.post(url = API_ENDPOINT, data = json.dumps(data), headers=headers)
'''


#API_ENDPOINT = "http://127.0.0.1:4200/api/users/Emma@gmail.com/Children"
API_ENDPOINT = "http://127.0.0.1:4200/api/children/1234/forms/BrainMapConsentForm"
data = {"values":{"StudentFirstName":"SanFrancisco"},"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyIwIjp7IlVzZXJJRCI6InRlc3RJRCIsIkhhc2giOm51bGwsIklzQWRtaW4iOjAsIlVzZXJGaXJzdE5hbWUiOiIiLCJVc2VyTGFzdE5hbWUiOiIiLCJQYXNzd29yZCI6IjVkNDE0MDJhYmM0YjJhNzZiOTcxOWQ5MTEwMTdjNTkyIiwiRW1haWwiOiJ0ZXN0QGdtYWlsLmNvbSJ9LCJpYXQiOjE1NTIzMjg3MjUsImV4cCI6MTU1MjM0NjcyNX0.D9qrG31roO9i5kasCjbYbKaK72QB09J9n20jsAjgD6Q"}

r = requests.post(url = API_ENDPOINT, data = json.dumps(data), headers=headers)






  
# extracting response text  
pastebin_url = r.text
print("The pastebin URL is:%s"%pastebin_url) 

