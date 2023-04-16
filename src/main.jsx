import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";

/*
Redux:
- store: Single Source of Truth (where state lives)
- dispatch(action): called when we need to update state
- subscribe: called when we want to listen for updates to state
- reducer: a pure function that takes state + an action and returns a new state
- action: an object describing how we want to change state

Redux Toolkit:
- createSlice: a helpful function for creating a reducer, initializing state, and creating actions
- configureStore: a helpful function for setting up the store with one or more reducers

React-Redux:
-provider- special component that  takes the store as a prop and allows child components to access the store ?
-useSelector-custom hook that takes a selector function and returns whatever we want from the store (read)
?
*/
console.log(store.getState());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
