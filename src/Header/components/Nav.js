import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Button} from 'semantic-ui-react';
import styled from "styled-components";
import {viewport} from 'utils/viewport';

const Navbar = styled.div `
  padding-top: 5vh; 
  width: ${viewport.DESKTOP};
  margin: auto;
  z-Index: 100;

`;

const NavbarButtons = styled.div `
  width: ${viewport.DESKTOP};
`;

const StyledButton = styled.div `
  /* border: solid;
  border-color: red;
  border-width: 1px; */
  height: 48px;
  display: inline-block;
  margin-left: 10px;
  margin-right: 20px;
  > h6 {
    float: left;
  }
`;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 'relative'
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    var rect = ReactDOM
      .findDOMNode(this)
      .getBoundingClientRect()

    rect.top <= 0
      ? this.setState({position: 'fixed'})
      : this.setState({position: 'relative'})
  }

  toRoute = (url) => {
    this
      .props
      .history
      .push('/' + url);
  }

  render() {

    return (
      <div>
        <Navbar position={this.state.position}>
          <NavbarButtons>
            <StyledButton>
              <h6>About Me</h6>
            </StyledButton>
            <StyledButton>
              <h6>My Work</h6>
            </StyledButton>
            <StyledButton>
              <h6>Journal</h6>
            </StyledButton>
            <StyledButton>
              <h6>Resume</h6>
            </StyledButton>
          </NavbarButtons>
        </Navbar>
        {/* <NavbarPlaceholder position={this.state.position}/> */}
      </div>
    )
  }
}

export default Nav;