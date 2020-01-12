import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../src/actions/counterActions";

const profile=props=> {
  return (
    <div>
      <p>ID = >{props.info[0]}</p>
      <p>FirstName =>{props.info[1]}</p>
      <p>LastnName =>{props.info[2]}</p>
      <p>CardID =>{props.info[3]}</p>
    </div>
  );
}

const mapStateToProps = state => ({
  info: state.Profile.user
});

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(profile);
