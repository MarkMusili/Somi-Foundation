# Generate an authorization key
# https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials
import requests
import base64

decoded_key = 'cKAziEEDKEfdIOC6V4OsjDzuBaZ6wnaN3iGhPQzJ3DbBROHY:kamWb1KeiSoAPJnJ8wNmV2WfYBbYgPAO8wqW0oDWdv0Hzvwid7nxqKTnOCJGfGW1'
encoded_key = base64.b64encode(decoded_key.encode()).decode()
print(encoded_key)

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Basic {}'.format(encoded_key)
}

response = requests.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', headers=headers)
print(response.json()['access_token'])
access_token = response.json()['access_token']

new_headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer {}'.format(access_token)
}

payload = {
    "BusinessShortCode": 174379,
    "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjQwNzMwMjExMjMx",
    "Timestamp": "20240730211231",
    "TransactionType": "CustomerPayBillOnline",
    "Amount": 1,
    "PartyA": 254799606135,
    "PartyB": 174379,
    "PhoneNumber": 254799606135,
    "CallBackURL": "https://mydomain.com/path",
    "AccountReference": "Send tiktok or nakata! lmao",
    "TransactionDesc": "Send tiktok"
  }

response = requests.request("POST", 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', headers = new_headers, json = payload)
print(response.text.encode('utf8'))