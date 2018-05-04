import React, {Component} from 'react';

import styled from 'styled-components';
import {mainColors} from 'utils/theme'
import {viewport} from 'utils/viewport';

import github from 'images/github.png';
import linkedin from 'images/linkedin.png';
import gmail from 'images/gmail.png';

const StyledFooter = styled.div `
  user-select: none;

  z-index: 100;
  position: relative;

  background-color: ${mainColors.darkblue};
  
  padding-top: 30px;

  height: 150px;
  width: 100vw;

  > p {
    color: ${mainColors.textfadedblue};
    text-align: center;
  }
`;

const StyledSocialButtons = styled.div `
  text-align: center;
`;

const StyledIcon = styled.a `
  display: inline-block;
  transition: all 200ms ease-in-out;

  background-color: ${mainColors.fadedblue};

  margin: 15px;
  padding: 10px;
  border-radius: 50%;

  img {
    transition: transform 200ms ease-in-out;
    vertical-align: middle;
    width:40px;
    height: 40px;
  }
  :hover {
    cursor: pointer;
    background-color: ${mainColors.hoverblue};
    transform: scale(0.95);
    img {
      transform: scale(1.3);
    }
  }

  @media (max-width: ${viewport.MOBILE}) {
    padding: 8px;
    img {
      width: 30px;
      height: 30px;
    }
  }
`;
const SocialButtons = () => {
  return (
    <StyledSocialButtons>
      <StyledIcon href="https://github.com/rogerwangcs" target="_blank">
        <img draggable="false" src={github}/>
      </StyledIcon>
      <StyledIcon href="https://www.linkedin.com/in/rogerwangcs/" target="_blank">
        <img draggable="false" src={linkedin}/>
      </StyledIcon>
      <StyledIcon href="mailto:rogerwangcs@gmail.com">
        <img draggable="false" src={gmail}/>
      </StyledIcon>
    </StyledSocialButtons>
  );
}

const Footer = (props) => {
  let date = new Date()

  return (
    <StyledFooter>
      <SocialButtons/>
      <p>
        © Roger Wang {date.getFullYear()}
      </p>
    </StyledFooter>
  );
}

export default Footer;