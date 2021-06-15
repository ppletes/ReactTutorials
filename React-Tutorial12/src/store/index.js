import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

//export const INCREMENT = "increment";

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   }

//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

//const store = createStore(counterSlice.reducer); --> if app is bigger this would be a problem because of more reducers - problem resolve: use configure store --> merge multiple reducers into one reducer

//const store = configureStore({ reducer: counterSlice.reducer }); //use this as a global main reducer OR if there are multiple slices in bigger aplications use:
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
}); //merge all reducers into one reducer

export default store;
