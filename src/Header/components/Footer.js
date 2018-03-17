import React, {Component} from 'react';

import styled from 'styled-components';
import {mainColors} from 'utils/theme'
import MediaQuery from 'react-responsive';
import {viewport} from 'utils/viewport';

import github from 'images/github.png';
import linkedin from 'images/linkedin.png';
import gmail from 'images/gmail.png';

const StyledFooter = styled.div `
  user-select: none;
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

  padding: 10px;

  margin: 15px;
  img {
    transition: all 200ms ease-in-out;
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
`;
const SocialButtons = () => {
  return (
    <StyledSocialButtons>
      <StyledIcon href="https://github.com/rogerwangcs" target="_blank">
        <img src={github}/>
      </StyledIcon>
      <StyledIcon href="https://www.linkedin.com/in/rogerwangcs/" target="_blank">
        <img src={linkedin}/>
      </StyledIcon>
      <StyledIcon href="mailto:rogerwangcs@gmail.com">
        <img src={gmail}/>
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