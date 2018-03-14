import React, {Component} from 'react';

import styled from 'styled-components'

const StyledPageSection = styled.div `
  background-color: ${props => props.color};
  width: 100%;
  margin-top: 0;

  h2 {
    text-align: center;
  }
`;

export default StyledPageSection;