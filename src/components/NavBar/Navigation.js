import React, { Component } from "react";

const Navigation = props => {
  return (
    <NavbarButtons navSticky={props.navSticky}>
      <StyledButton onClick={() => props.handleRoute("/")}>
        <h4>Home</h4>
      </StyledButton>
      <StyledButton onClick={() => props.handleRoute("/Projects")}>
        <h4>Projects</h4>
      </StyledButton>
      <StyledButton onClick={() => props.handleRoute("/Blog")}>
        <h4>Blog</h4>
      </StyledButton>
      <StyledButton onClick={() => props.handleRoute("/About")}>
        <h4>About Me</h4>
      </StyledButton>
      <NavUnderline sticky={props.sticky} nav={props.nav} />
    </NavbarButtons>
  );
};

export default Navigation;
