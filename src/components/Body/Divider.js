import styled from 'styled-components'
import {viewport} from 'utils/viewport'
import {mainColors} from 'utils/theme'

const StyledDivider = styled.div `
  background-color: ${mainColors.lightblue};
  height: 4px;
  width: 100px;

  /* border-bottom: ${ '4px solid ' + mainColors.lightblue}; */
  
  display: block;
  margin-bottom: 15px;

  margin: ${props => props.align === 'center'
  ? '10px auto 15px auto'
  : '0px'};

  @media (max-width: ${viewport.MOBILE}) {
    margin: ${props => props.mobileAlign === 'center'
    ? '10px auto 15px auto'
    : '0px'};
  }
`;

export default StyledDivider;