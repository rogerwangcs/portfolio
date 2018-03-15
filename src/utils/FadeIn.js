import styled, {keyframes} from 'styled-components'

const fadeAnimation = keyframes `
  from {
    opacity: 0;
    transform: translateY(-100px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const FadeIn = styled.div `
  opacity: 0;

  animation: ${fadeAnimation} 600ms ease-in-out;
  animation-delay: ${props => props.delay + 'ms'};
  animation-fill-mode: forwards;
`;

export default FadeIn;