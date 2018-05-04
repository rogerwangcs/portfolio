import React, {Component} from 'react';

import styled from 'styled-components'
import {mainColors} from 'utils/theme'

const StyledButton = styled.div `
  transition: all 300ms ease-in-out;

  background-color: ${props => props.type === 'outline'
  ? 'white'
  : mainColors.fadedblue};

  height: ${props => props.height};
  width: ${props => props.width};

  border: ${props => props === 'outline'
    ? 'solid 2px' + mainColors.fadedblue
    : 'solid 2px' + mainColors.fadedblue};

  p {
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
    font-weight: 300;

    color: ${props => props.type === 'outline'
      ? mainColors.fadedblue
      : 'white'};

    text-align: center;
    margin-top: 7px;
    padding-top: 0;
  }

  :hover {
    cursor: pointer;
    border: ${props => props === 'outline'
      ? 'solid 2px' + mainColors.hoverblue
      : 'solid 2px' + mainColors.hoverblue};
    background-color: ${props => props.type === 'outline'
        ? mainColors.fadedblue
        : mainColors.hoverblue};
  }

`;

export default StyledButton;