import React from "react";
import styled, { css, keyframes } from "styled-components";

const animation = keyframes`
  from {
    opacity: 0;
    transform: scale(0) translateY(-100px);
  }

  to {
    opacity: 1;
    transform: scale(1) translateY(0px);
  }
`;

const animationRule = css`
  ${animation} 600ms;
`;

const FadeIn = styled.div`
  > * {
    backface-visibility: hidden;
    opacity: 0;
    transform-origin: center;
    animation: ${animationRule};
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-delay: ${(props) => props.delay + "ms"};
    animation-fill-mode: forwards;
  }
`;

export default FadeIn;
