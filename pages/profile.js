import React from "react";
import { connect } from "react-redux";

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


export default connect(mapStateToProps)(profile);
