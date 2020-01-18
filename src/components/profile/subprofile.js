import React from "react";
import { connect } from "react-redux";
import styled from 'styled-components';
const profile = props => {
  const StyledWrapper = styled.div`
  display:flex;
  font-family:'Roboto-Black';
  font-size:20px;
  width:100%;
  justify-content: center;
  padding:40px;

  span{
    font-family:'Kanit-Bold';
    color:gray;

  }
  
  .box{
    width:25%;
    box-shadow:0 0 6px 0 rgba(0,0,0,0.15);
    border-radius: 20px;
    padding:10px;
    background:white;
    padding:0px 0px 0px 30px;
  }

  .head{
    font-size:40px;
    margin-left:20px;
  }

  `
  return (
    <StyledWrapper>
      <div className="box">
        <p className="head"><u>Profile</u></p>
        <p>ID : <span><i>{props.info[0]}</i></span></p>
        <p>Name : <span><i>{props.info[1]}</i></span></p>
        <p>Surname : <span><i>{props.info[2]}</i></span></p>
        <p>CardID : <span><i>{props.info[3]}</i></span></p>
      </div>
    </StyledWrapper>
  );
}

const mapStateToProps = state => ({
  info: state.Profile.user
});


export default connect(mapStateToProps)(profile);