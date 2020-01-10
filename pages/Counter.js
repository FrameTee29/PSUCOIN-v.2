import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../src/actions/counterActions";

const Counter=props=> {
  return (
    <div>
      <p>{props.co}</p>
      {/* <button onClick={props.increment}>INCREMENT</button>
      <button onClick={props.decrement}>DECREMENT</button>
      <button onClick={props.reset}>RESET</button> */}
    </div>
  );
}

const mapStateToProps = state => ({
  co: state.counterReducer.counter
});

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
