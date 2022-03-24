import React from "react";
import styled from "styled-components";

import '../App.css'

const StyledNav = styled.div`
  display: flex;
  justify-content: center;
  padding: 3%;
  background-color: #0B3D91;
  font-size: 1.3rem
`;

const StyledLink = styled.a`

`



const NavBar = () => {
  return (
    <StyledNav>
      <div className="navDiv">
          <a className="NavLinks" href=" ">Home</a>
          <a className="NavLinks" href="#photo">Photo Of The Day</a>
          <a className="NavLinks" href="#fact">Space Fact</a>
          <a className="NavLinks"href="#about">About Us</a>
      </div>
    </StyledNav>

  );
};

export default NavBar;
