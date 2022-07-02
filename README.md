# jwtsimpledemo
# Introduction:

This is simple demo how to use JWT Token with Express nodes module.
Purpose of this is to have very simple as possible and WORKING 100% example. 
It is based on 2 blogs:
A) https://jsramblings.com/authentication-with-node-and-jwt-a-simple-example/   - installing express, init,...etc. up to login
B) https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs  - from get request validation 
Case A) is ok up to verifying via curl get method. Then B) was introduced.

# Description:

Simple start endpoint with "node serverdo.js"

then we can test with CURL or Postman.

A) CURL

In one CMD shell:

![image](https://user-images.githubusercontent.com/35866757/176990940-d32a822e-3a15-49f3-8402-c325bbe07dc2.png)

In second CMD shell:
1) Logon with creation of token (it is not rocket sience but lacking good simple documentation of kind W3SCHOOLS)
![image](https://user-images.githubusercontent.com/35866757/176990975-6b400faa-54aa-414d-81a0-99eecad4482c.png)

c:\Users\mik49\expressjs\mikapp>curl -X POST http://localhost:3001/login --header "Content-Type: application/json" --data "{ \"username\": \"admin\", \"password\": \"admin\" }"
{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJpYXQiOjE2NTY3NDY1NzYsImV4cCI6MTY1Njc0ODE3Nn0.xy8sE2H4FqqSOEjZG7rgV8nzaMfMJsgHj0X7VCkUm1U"}

2) Call get request with token verification:
![image](https://user-images.githubusercontent.com/35866757/176991058-f10855d4-6c95-4814-a3fb-bba288c60ade.png)

curl -i localhost:3001/super-secure-resource --Header "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJpYXQiOjE2NTY3NDY1NzYsImV4cCI6MTY1Njc0ODE3Nn0.xy8sE2H4FqqSOEjZG7rgV8nzaMfMJsgHj0X7VCkUm1"

You can play and wait up to end of validity of Token or
e.g. change Token 
![image](https://user-images.githubusercontent.com/35866757/176991152-783421ee-a89c-4449-b2a3-d92234510c69.png)

B) Postman  (download desktop agent from https://www.postman.com/downloads/)
1) Login  with POST:
![image](https://user-images.githubusercontent.com/35866757/176991228-ad586588-19bc-4e9e-8951-0f57a1e377d0.png)
![image](https://user-images.githubusercontent.com/35866757/176991250-54fd347f-7576-4f28-bf75-3e082930ec55.png)
![image](https://user-images.githubusercontent.com/35866757/176991521-d6312344-692f-41da-bfb9-06a66c4d42c4.png)

2) Send GET with Token authorisation

![image](https://user-images.githubusercontent.com/35866757/176991325-15456b72-7f6f-411d-b5d7-78f5fb39d61a.png)

We play a bit and change token:
![image](https://user-images.githubusercontent.com/35866757/176991695-fa478587-b62e-4d72-a0bc-d797da7f9143.png)

play with { expiresIn: '1600s' }  set short etc...


