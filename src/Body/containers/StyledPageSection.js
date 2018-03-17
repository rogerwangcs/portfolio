import React, {Component} from 'react';

import styled from 'styled-components'

const StyledPageSection = styled.div `
  background-color: ${props => props.color};
  width: 100%;
  padding-top: 20px;
  padding-bottom: 50px;
`;

export default StyledPageSection;