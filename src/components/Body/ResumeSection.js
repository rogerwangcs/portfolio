import React, {Component} from 'react'

import styled from 'styled-components'
import {viewport} from 'utils/viewport'
import {mainColors} from 'utils/theme'

import ResumeGraphic from 'images/ResumeGraphic.png'
import Divider from 'components/Body/Divider'

const StyledResumeSection = styled.div `
  overflow: hidden;
  position: relative;
  h3 {
    text-align: center;
  }

  @media (max-width: ${viewport.MOBILE}) {
    height: 250px;
  }
  @media (min-width: ${viewport.MOBILE}) {
    height: 50vw;
  }
  @media (min-width: ${viewport.DESKTOP}) {
    height: 500px;
  }
`;

const StyledResumeGraphic = styled.img `
  position: absolute;

  margin: auto;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 3px 3px 20px -10px;

  transition: transform 300ms ease-in-out;
  transform-origin: bottom;
  transform: ${props => props.hover === false
  ? 'scale(1)'
  : 'scale(1.05)'};

  @media (max-width: ${viewport.MOBILE}) {
    width: 90vw;
    box-shadow: 2px 2px 10px -6px;
  }
  @media (min-width: ${viewport.MOBILE}) {
    width: 75vw;
  }
  @media (min-width: ${viewport.DESKTOP}) {
    width: 800px;
    right: 50px;
  }
`;

const StyledResumeButton = styled.div `

  transition: background-color 300ms ease-in-out;
  width: 300px;
  height: 100px;
  background-color: ${props => props.hover === false
  ? mainColors.darkblue
  : mainColors.hoverblue};

  border-radius: 50px;

  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  text-align: center;
  margin-top: 50px;

  > h3 {
    display: inline-block;
    color: white;
  }
  :hover {
    cursor: pointer;
  }

  @media (max-width: ${viewport.MOBILE}) {
    width: 200px;
    height: 50px;

    margin-top: 25px;

    > h3 {
      line-height: 10px;
      font-size: 20px;
  }
  }

`;

const StyledBlueBg = styled.div `
  transition: all 300ms ease-in-out;
  position: absolute;


  width: 225px;
  height: 115px;
  border-radius: 25px;

  margin: auto;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: ${props => props.hover === false
  ? mainColors.darkblue
  : mainColors.hoverblue};
  transform: ${props => props.hover === false
    ? 'scale(1)'
    : 'scale(10)'};
`;

class ResumeSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
  }

  handleHover = (hoverState) => {
    this.setState({hover: hoverState});
  }

  render() {
    return (
      <StyledResumeSection>
        <StyledBlueBg hover={this.state.hover}/>
        <a
          href='https://drive.google.com/file/d/1h4cmZ8r2e2Kyj5ACfgXDe7Amiv6SVSN7/view?usp=sharing'
          target="_blank">
          <StyledResumeButton
            onClick={() => this.handleHover(true)}
            onMouseEnter={() => this.handleHover(true)}
            onMouseLeave={() => this.handleHover(false)}
            hover={this.state.hover}>
            <h3>View Full Resume</h3>
          </StyledResumeButton>
        </a>
        <StyledResumeGraphic src={ResumeGraphic} hover={this.state.hover}/>
      </StyledResumeSection>
    );
  }
}

export default ResumeSection;