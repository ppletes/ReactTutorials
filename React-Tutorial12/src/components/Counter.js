import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment()); //execute as a function --> this will access in a full mode method action
  };

  const increaseHandler = () => {
    dispatch(counterActions.increment(10)); //toolkit will automatically create action object {type: SOME_UNIQUE_IDENTIFIER, payload: 10} --> payload is default redux use, it will be any value x that is passed as argument in function counterActions.increment(x)
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter, //this is equivalent to doing it with hooks - useSelector...
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }), //calling dispatch with dispatch 'increment' type action
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// // connect is called higher order component - execute the connect function that returns new function and then execute new function that we pass function Counter
// //first argument that is passing connect function is mapStateToProps, and the second is mapDispatchToProps (equivalent to using dispatch in hooks)
// //arguments are just pointers and they will be execute by react-redux
// export default connect(mapStateToProps, mapDispatchToProps)(Counter); // connect is called higher order component - execute the connect function that returns new function and then execute new function that we pass function Counter
