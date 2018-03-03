import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'semantic-ui-react';
import styled from "styled-components";
import {viewport} from 'utils/viewport';

import {Link, withRouter} from 'react-router-dom';

const Navbar = styled.div `
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  width: 100vw;
  height: 56px;
  text-align: center;
  top: 0px;
  position: fixed;
  /* position: ${props => props.position}; */
  background-color: black;
  z-Index: 100;

`;

// const NavbarPlaceholder = styled.div `
//   width: 100vw;
//   height: 56px;
//   top: 0px;
//   position: ${props => props.position === 'fixed'
//   ? 'relative'
//   : 'fixed'};
//   visibility: hidden;
// `;

const NavbarButtons = styled.div `
  width: 780px;
  margin: auto;
  @media (max-width: ${viewport.DESKTOP}) {
    width: 100vw;
    padding: 0;
  }
`;

const StyledButton = styled(Button)`
  > a {
    color: white;
  }
  @media (max-width: ${viewport.DESKTOP}) {
    > a {
      font-size: 3vw;
    }
    width: 18vw;
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
            <StyledButton
              className='ui button'
              color='black'
              onClick={() => this.toRoute('')}>
              <a>Home</a>
            </StyledButton>
            <StyledButton
              className='ui button'
              color='black'
              onClick={() => this.toRoute('Ancients')}>
              <a>Ancients</a>
            </StyledButton>
            <StyledButton
              className='ui button'
              color='black'
              onClick={() => this.toRoute('Medieval')}>
              <a>Mediavel</a>
            </StyledButton>
            <StyledButton
              className='ui button'
              color='black'
              onClick={() => this.toRoute('Renaissance')}>
              <a>Rennaisance</a>
            </StyledButton>
            <StyledButton
              className='ui button'
              color='black'
              onClick={() => this.toRoute('Modern')}>
              <a>Modern</a>
            </StyledButton>
          </NavbarButtons>
        </Navbar>
        {/* <NavbarPlaceholder position={this.state.position}/> */}
      </div>
    )
  }
}

export default withRouter(Nav);