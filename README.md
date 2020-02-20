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
 
# Back-end
 
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
 

- created static components
   - Navbar - Landing - Register - Login

- Use react-router-dom in App.js to setup routes
- linking pages to App.js

- Setting up Redux for state management
   - import { Provider } from "react-redux";
   - import store from "./store";
   - wrap with <Provider>
   -       <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
        </Router>
      </Provider>
   
- Setup Redux file structure
   - create store.js file

- Made directories for actions and reducers

- store.js

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
const initialState = {};
const middleware = [thunk];
const store = createStore(
  () => [],
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;

- REDUCERS
   - import actions from types.js
   - define initialState
   - define how state should change based on actions with a switch statement.

- Actions
   - import dependenciees and action definitiions from types.js
   - use axios to make http requests
   - use dispatch to send actions to our reducers

# Linking Redux with our React components and using axios to fetch data from Server
- Link Redux to our Components
- Display errors from our backend in our React forms
- create protected routes (pages only certain users can access based on their authentication)
- keep a user looged when they refresh or leave the page (they either logged out or the jwt expires)

- using connect()
- Used withRouter from react-router-dom, wrapping our component in our export withRouter()
- Will add a parameter to this.props.history within our call to this.props.registerUser(newUser, this.props.history) in our onSubmit event so we can easily access it within our action
- mapStateToProps allows us to get our state from Redux and map it to props which we can use inside components.

- We’ll add the following above our export at the bottom of Register.js.
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

- This allows us to call this.props.auth or this.props.errors within our Register component.

- Connecting components

- Creating Dashboard
 - user can only reach dashboard if successfully logged in

- Tying it all together in App.js
   - Check localStorage for a token to keep the user logged in even if they close or refresh the app (e.g. until they log out or the token expires)
   - Pull in our Dashboard component and define it as a PrivateRoute


# Bringing in PLAID API

- We’ll be using Plaid to allow users to link their accounts and to gain access to their transactional data.
- User links a bank account within app, causing our app’s public key to be sent to Plaid
- Plaid responds with a public token, which is unique for each sign in and expires in 30 minutes
- We send our public token to our back-end server, exchanging it for an access token and item id (each bank account has a unique access token and item id)
- We’ll save this access token, item id and a few other fields in our database (while checking for duplicate accounts)
- We’ll send our access token, client id, and client secret to Plaid to get the user’s transactions

# Adding Accounts

Our flow for adding accounts will go as follows.

Parse PUBLIC_TOKEN and other data from request
Exchange PUBLIC_TOKEN for an ACCESS_TOKEN; we don’t need to save our PUBLIC_TOKEN in the database (expires after 30 minutes), but we will store the ACCESS_TOKEN so we can get transactions and other account-specific data
Check if the account already exists for that specific user using userId and institutionId
If the account doesn’t already exist, save it to our database