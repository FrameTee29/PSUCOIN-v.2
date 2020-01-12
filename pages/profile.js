import React from "react";
import styled from 'styled-components';
import { connect } from "react-redux";
import Subprofile from '../src/components/subprofile'
import Menubar from '../src/components/menubar'
const profile = props => {
  const StyledWrapper = styled.div`
  width:100%;
  height: 100vh;
  background-image:url("/static/images/money2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

    .container-profile{
      display:flex;
      width:100%;
      justify-content: center;
    }
  `
  return (
    <StyledWrapper>
      <Menubar />
      <div className="container-profile">
        <Subprofile />
      </div>
    </StyledWrapper>
  );
}



export default profile;
