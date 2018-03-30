import React, {Component} from 'react';

import styled from 'styled-components'

const StyledPageSection = styled.div `
  background-color: ${props => props.color};
  width: 100%;
  padding-top: ${props => props.paddingTop + 'px'};
  padding-bottom: ${props => props.paddingBottom + 'px'};
`;

export default StyledPageSection;