# React-Budget-App
 
- Digital Crafts November 2019 Cohort
 
- Individual React Project
   - Project Requirements
       - No teams
       - Redux is optional
       - At least 5 components
       - At least 3 piecs of state
       - At least 1 API
 
- For this project, the first thing I researched was API's.
   - I chose the PLAID API (insert link here)
   - In PLAID's own words "The easiest way for users to connect their bank accounts to 
an app"
   - I wanted something that would really help me learn and enforce the concepts we 
went over in class.
   - And that would take me out of my comfort zone
   - PLAID's API documentation is easy to understand, and they make it really easy to 
connect to and use their service.
 
- After setting up a demo app, and successfully retrieving data from the API, I’ve 
decided to use the transaction history data from mock bank accounts to create a 
budget app.
 
Preliminary Ideas for the site
- Making it look as secure as possible
- Creating MERN stack to Authenticate User
- Securely storing sensitive data
- If the user is logged in, they will have access to things they otherwise wouldn’t.
- Need Dashboard
- Once logged in, use PLAID Link to securely connect financial institutions
- Using the transaction data from all of our combined bank accounts and American 	
	Express account, I would like to be able to compare my manual entries with the 	
	Data from each of my accounts. 
 
 
 
1). Build Back-end
- Initialize our backend using npm and install necessary packages
- Set up a MongoDB database using MongoDB Atlas
- Set up a server with Node.js and Express
- Create a database schema to define a User for registration and login purposes
- Set up two API routes, register and login, using passport + jsonwebtokens for
- authentication and validator for input validation
- Test our API routes using Postman
 
- Packages to Install:

bcryptjs: used to hash passwords before we store them in our database
body-parser: used to parse incoming request bodies in a middleware
concurrently: allows us to run our backend and frontend concurrently and on 
different ports
express: sits on top of Node to make the routing, request handling, and 
responding easier to write
is-empty: a global function that will come in handy when we use validator
jsonwebtoken: used for authorization
mongoose: used to interact with MongoDB
passport: used to authenticate requests, which it does through an extensible 
set of plugins known as strategies
passport-jwt: passport strategy for authenticating with a JSON Web Token (JWT); 
lets you authenticate endpoints using a JWT
validator: used to validate inputs (e.g. check for valid email format, 
confirming passwords match)
 
 
 - *** Command to remove file from repository but keep it locally
    git rm --cached somefile.ext

How to add package.json files to .gitignore?
 

Open Postman and
Set the request type to POST
Set the request url to http://localhost:5000/api/users/register
Navigate to the Body tab, select x-www-form-urlencoded, fill in your registration parameters and hit Send

- sets up new user in our database with required credentials

- Testing our Login endpoint
Similar to the above, in Postman
Set the request type to POST
Set the request url to http://localhost:5000/api/users/login
Navigate to the Body tab, select x-www-form-urlencoded, fill in your login parameters and hit Send


# Front-End
- Set up our frontend using create-react-app
- create static components for Navbar, Landing, Login, and Register pages
- Setup Redux for global state management

- install dependencies
   
   npm i axios classnames jwt-decode react-redux react-router-dom redux redux-thunk

axios: promise based HTTP client for making requests to our backend
classnames: used for conditional classes in our JSX
jwt-decode: used to decode our jwt so we can get user data from it
react-redux: allows us to use Redux with React
react-router-dom: used for routing purposes
redux: used to manage state between components (can be used with React or any other view library)
redux-thunk: middleware for Redux that allows us to directly access the dispatch method to make asynchronous calls from our actions
 


