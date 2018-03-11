import React, {Component} from 'react'

import {viewport} from 'utils/viewport'
import styled, {css} from "styled-components"

import HeaderBg from 'Header/components/HeaderBg'
import HeaderText from 'Header/components/HeaderText'
import Nav from 'Header/components/Nav'
import HeaderCover from 'Header/components/HeaderCover'
import SocialButtons from 'Header/components/SocialButtons'
import OpenArrow from 'Header/components/OpenArrow'

const HeaderGroup = styled.div `
  transition: transform 300ms ease;

  transform: ${props => props.nav === true
  ? 'translateY(100px)'
  : 'translateY(0px)'};

  :after {
    clear:both;
    content:" ";
    display:block;
}
`;

const StyledHeader = styled.div `

  @media (max-width: ${viewport.MOBILE}){
    width: 90vw;
    left: 5vw;
    right: 5vw;
    margin: auto;
  }
  @media (min-width: ${viewport.MOBILE}){
    width: 80vw;
    margin: auto;
  }
  @media (min-width: ${viewport.DESKTOP}){
    width: ${viewport.DESKTOP_CONTENT_WIDTH + 'px'};
    left: 0;
    right: 0;
    margin: auto;
  }
  @media (max-height: ${viewport.MIN_HEIGHT}){
   
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);
    if (window.scrollY > 0) 
      this.setState({nav: false})
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleDrawer = () => {
    this.props.nav === true
      ? this.props.updateNav(false)
      : this.props.updateNav(true)
  }

  handleScroll = () => {
    if (window.scrollY <= 300) {
      console.log(window.scrollY);
      console.log(this.props.nav);
      if (window.scrollY > 0) {
        this.props.updateNav(false)
      } else {
        this.props.updateNav(true)
      }
    }

  }

  render() {
    return (
      <StyledHeader nav={this.props.nav}>
        <HeaderBg/>
        <HeaderGroup nav={this.props.nav}>
          <HeaderText nav={this.props.nav}/>
          <SocialButtons/>
        </HeaderGroup>
        <Nav nav={this.props.nav}/>
        <HeaderCover nav={this.props.nav}/>
        <OpenArrow handleDrawer={this.handleDrawer} nav={this.props.nav}/>
      </StyledHeader>
    );
  }
}

export default Header;