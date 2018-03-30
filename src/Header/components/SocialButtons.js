import React, {Component} from 'react'

import styled from 'styled-components'
import {mainColors} from 'utils/theme'
import MediaQuery from 'react-responsive'
import {viewport} from 'utils/viewport'

import github from 'images/github.png'
import linkedin from 'images/linkedin.png'
import gmail from 'images/gmail.png'

const StyledSocialButtons = styled.div `
  z-index: 100;
  
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
      background-color: ${mainColors.hoverblue}
    }
    > a {
      text-decoration: none;
    }
    @media (max-width: ${viewport.MOBILE}) {
      display: inline;
      margin: 15px;
      > a {
        display: inline;
      }
      > a > img {
        vertical-align: middle;
        width: 50px;
        height: 50px;
      }
      > a > h5 {
        margin-left: 8px;
        display: inline;
      }
    }
    @media (min-width: ${viewport.MOBILE}) {
      > a > img {
        vertical-align: middle;
        width: 40px;
        height: 40px;
      }
      > a > h5 {
        margin-left: 8px;
        display: inline;
      }
    }
    @media (min-width: ${viewport.DESKTOP}) {
      > a > img {
        vertical-align: middle;
        width: 50px;
        height: 50px;
      }
      > a > h5 {
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
        <a
          href='https://drive.google.com/file/d/1h4cmZ8r2e2Kyj5ACfgXDe7Amiv6SVSN7/view?usp=sharing'
          target="_blank">
          <img src={github}/>
          <MediaQuery query={'(min-width: ' + viewport.MOBILE + ')'}>
            <h5>
              <span>Github</span>
            </h5>
          </MediaQuery>
        </a>
      </StyledIcon>
      <StyledIcon href="https://www.linkedin.com/in/rogerwangcs/">
        <a
          href='https://drive.google.com/file/d/1h4cmZ8r2e2Kyj5ACfgXDe7Amiv6SVSN7/view?usp=sharing'
          target="_blank">
          <img src={linkedin}/>
          <MediaQuery query={'(min-width: ' + viewport.MOBILE + ')'}>
            <h5>
              <span>LinkedIn</span>
            </h5>
          </MediaQuery>
        </a>
      </StyledIcon>
      <StyledIcon href="mailto:rogerwangcs@gmail.com">
        <a
          href='https://drive.google.com/file/d/1h4cmZ8r2e2Kyj5ACfgXDe7Amiv6SVSN7/view?usp=sharing'
          target="_blank">
          <img src={gmail}/>
          <MediaQuery query={'(min-width: ' + viewport.MOBILE + ')'}>
            <h5>
              <span>Email</span>
            </h5>
          </MediaQuery>
        </a>
      </StyledIcon>
    </StyledSocialButtons>
  );
}

export default SocialButtons;
