# hackerbayAPi

This is a Node.js micro service Api  that is used for implementation of login authentication , image thumbnail generation and jason patching.

After cloning this project, open your code editor terminal or command prompt and follow the process bellow.

## This is how it works

* First thing to do is to cd into the project folder and run the command "npm install" to install all dependencies required to run the code.

* After that you Create a .env file then add a jwt secret eg secret = hackemenot. This secrete can be any text of your choice.
* At this point when all dependencies have been installed, we can now start the project with the command "npm start"

## HOW TO RUN PROCCESS IN THIS PROJECT

## For login

In other to be logged in successfully , you need to provide a user detail of username and password via a POST request to this url http://localhost:3000/user/login , if on successful login , it would return a jsonwebtoken.


## To access the protected routes

To be able to access the protected routes while making a GET, POST or PATCH request , we need the token we got from logIn for validating the user, so you need to input this token gotten on login via header for any request to the protected route.


## Making JSON patch request

To make a PATCH request you need to provide a token via header to the url http://localhost:3000/user/jsonpatch

```
'token', 'bearer <token>'

```
This json patch request takes two parameters which has a key : userDoc , value:'must be a JSON object' and key : patch, value:'must be a JSON object'


## For thumbnail

In order to create the thumbnail , you need to make a POST request with the token provided via header to the url http://localhost:3000/user/thumbnail. Also an image url is to be provided via the full image part with key : source and the value :"image-path-here" e.g key:"source", value:"C:\Users\User\Desktop\hackeybayApi\thumbnail/index.jpg". this will created our thumbnail.

## For unit testing

* In other to run unit test , run the command "npm test"


* To check for code coverage run the command "npm run coverage"

##  Development dependencies used 

* jsonwebtoken: Used for generating token
* Jsonpatch: Used for making JSON patch request
* node-thumbnail: Used for image thumbnail generation
* Chai: Used for unit testing
* nyc: Used for test coverage


## Author
**Bosah Arthur** 