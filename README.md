This app has 4 main components

-   App
-   Navbar
-   Counters
-   Counter

App is the root Component which contains Navbar and Counters. It also contains the source of truth state and all the state handling methods.

Navbar is a Stateless Functional Component that receives its state data from App and renders the number of Counter components that have a non-zero value.

Counters will render the multiple Counter components with data from state or display specific text if there are no Counter component data in state

Counter uses state data manage its own display and to callback to App to update the state data