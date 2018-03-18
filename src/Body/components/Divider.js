import styled from 'styled-components'
import {viewport} from 'utils/viewport'
import {mainColors} from 'utils/theme'

const StyledDivider = styled.div `
  background-color: ${mainColors.lightblue};
  width: 100px;
  height: 3px;
  
  margin-top: -20px;
  margin-bottom: 10px;


  @media (max-width: ${viewport.MOBILE}) {
    margin: auto;
  }
`;

export default StyledDivider;