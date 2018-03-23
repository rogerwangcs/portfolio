import styled from 'styled-components'
import {viewport} from 'utils/viewport'
import {mainColors} from 'utils/theme'

const StyledDivider = styled.div `
  background-color: ${mainColors.lightblue};
  height: 4px;
  width: 100px;

  /* border-bottom: ${ '4px solid ' + mainColors.lightblue}; */
  
  display: block;
  margin-top: 5px;



  @media (max-width: ${viewport.MOBILE}) {
    margin: ${props => props.align === 'center'
    ? 'auto'
    : '0px'};
  }
`;

export default StyledDivider;