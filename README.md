This app has 4 main components

-   App
-   Navbar
-   Counters
-   Counter

App is the root Component which contains Navbar and Counters. It also contains the source of truth state and all the state handling methods.

Navbar is a Stateless Functional Component that receives its state data from App and renders the number of Counter components that have a non-zero value.

Counters will render the multiple Counter components with data from state or display specific text if there are no Counter component data in state

Counter uses state data manage its own display and to callback to App to update the state data

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
