This app has 4 main components

-   CounterApp
-   Navbar
-   Counters
-   Counter

CounterApp contains the source-of-truth state and the definitions for functions that can modify state. It also contains the source of truth state and all the state handling methods.

Navbar is a Stateless Functional Component that receives its state data from CounterApp and renders the number of Counter components that have a non-zero value as well as the total number of items.

Counters will render the multiple Counter components with data from state or display specific text if there are no Counter component data in state. It is also passed functions to increment, decrement and delete counters.

Counter uses state data manage its own display and to callback to CounterApp state to update the state data.
