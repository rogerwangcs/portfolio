import styled from "styled-components";
import { viewport } from "constants/viewport";
import FadeIn from "components/common/FadeIn";
import { animationTimings } from "constants/animationTimings";
import { header } from "constants/content";

const StyledText = styled(FadeIn)`
  margin-top: -50px;
  text-align: center;
  > * {
    display: block;
    color: white;
  }

  @media (max-width: ${viewport.MOBILE}) {
    margin-top: -10px;
    width: 80%;
    > h1 {
      font-size: 3em;
    }
    > h4 {
      margin-top: 25px;
      font-size: 18px;
    }
  }
  @media (min-width: ${viewport.MOBILE}) {
    width: 80%;
    > h1 {
      font-size: 5em;
    }
    > h4 {
      font-size: 24px;
      margin-top: 40px;
    }
  }
  @media (min-width: ${viewport.DESKTOP}) {
    width: 75%;
    > h1 {
      font-size: 8em;
    }
    > h4 {
      font-size: 28px;
      margin-top: 50px;
    }
  }
`;

const HeaderText = (props) => {
  return (
    <StyledText delay={animationTimings.loadDelay + 550}>
      <h1>{header.title}</h1>
      <h4>{header.subtitle}</h4>
    </StyledText>
  );
};

export default HeaderText;
