import React, {Component} from 'react';

import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import {viewport} from 'utils/viewport';

import github from 'images/github.png';
import linkedin from 'images/linkedin.png';
import gmail from 'images/gmail.png';

const StyledSocialButtons = styled.div `
  @media (max-width: ${viewport.MOBILE}) {
    padding-top: none;
    float: none;
    text-align: center;
  }
  @media (min-width: ${viewport.MOBILE}) {
    padding-top: 5vw;
    float: right;
    width: 25%;
  }
  @media (min-width: ${viewport.DESKTOP}) {
    padding-top: 50px;
    float: right;
    width: 25%;
  }
`;

const StyledIcon = styled.div `
    :hover {
      cursor: pointer;
    }
    @media (max-width: ${viewport.MOBILE}) {
      display: inline;
      margin: 15px;
      > div {
        display: inline;
      }
      > div > img {
        vertical-align: middle;
        width: 50px;
        height: 50px;
      }
      > div > h5 {
        margin-left: 8px;
        display: inline;
      }
    }
    @media (min-width: ${viewport.MOBILE}) {
      > div > img {
        vertical-align: middle;
        width: 40px;
        height: 40px;
      }
      > div > h5 {
        margin-left: 8px;
        display: inline;
      }
    }
    @media (min-width: ${viewport.DESKTOP}) {
      > div > img {
        vertical-align: middle;
        width: 50px;
        height: 50px;
      }
      > div > h5 {
        margin-left: 10px;
        display: inline;
      }
    }
  }
`;

const SocialButtons = () => {
  return (
    <StyledSocialButtons>
      <StyledIcon href="https://github.com/rogerwangcs">
        <div>
          <img src={github}/>
          <MediaQuery query={'(min-width: ' + viewport.MOBILE + ')'}>
            <h5>
              <span>Github</span>
            </h5>
          </MediaQuery>
        </div>
      </StyledIcon>
      <StyledIcon href="https://www.linkedin.com/in/rogerwangcs/">
        <div>
          <img src={linkedin}/>
          <MediaQuery query={'(min-width: ' + viewport.MOBILE + ')'}>
            <h5>
              <span>LinkedIn</span>
            </h5>
          </MediaQuery>
        </div>
      </StyledIcon>
      <StyledIcon href="mailto:rogerwangcs@gmail.com">
        <div>
          <img src={gmail}/>
          <MediaQuery query={'(min-width: ' + viewport.MOBILE + ')'}>
            <h5>
              <span>Email</span>
            </h5>
          </MediaQuery>
        </div>
      </StyledIcon>
    </StyledSocialButtons>
  );
}

export default SocialButtons;
