import React, {Component} from 'react';

import styled from 'styled-components';
import {viewport} from 'utils/viewport';

import github from 'images/github.png';
import linkedin from 'images/linkedin.png';
import gmail from 'images/gmail.png';

const StyledSocialButtons = styled.div `
  float: left;

  width: 30%;
  height: 100%;
  margin: auto;

  @media (max-width: ${viewport.MOBILE}) {
    padding-top: 6vh;
  }
  @media (min-width: ${viewport.MOBILE}) {
    padding-top: 10vh;
  }
  @media (min-width: ${viewport.DESKTOP}) {
    padding-top: 12vh;
  }
`;

const StyledIcon = styled.div `

  > div > img {
    vertical-align: middle;
      width: 50px;
      height: 50px;
  }
  >div > h5 {
    margin-left: 10px;
    display: inline;
  }
`;

const SocialButtons = () => {
  return (
    <StyledSocialButtons>
      <StyledIcon href="https://github.com/rogerwangcs">
        <div>
          <img src={github}/>
          <h5>
            <span>Github</span>
          </h5>
        </div>
      </StyledIcon>
      <StyledIcon href="https://www.linkedin.com/in/rogerwangcs/">
        <div>
          <img src={linkedin}/>
          <h5>
            <span>Github</span>
          </h5>
        </div>
      </StyledIcon>
      <StyledIcon href="mailto:rogerwangcs@gmail.com">
        <div>
          <img src={gmail}/>
          <h5>
            <span>Github</span>
          </h5>
        </div>
      </StyledIcon>
    </StyledSocialButtons>
  );
}

export default SocialButtons;
