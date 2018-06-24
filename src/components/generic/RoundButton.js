import React from "react";
import { withRouter } from "react-router-dom";

import styled from "styled-components";
import theme from "constants/theme";

const StyledButton = styled.div`
  display: inline-block;
  background-color: ${theme.colors.buttonblue};

  padding: 12px 28px;
  border-radius: 25px/50%;
  text-align: center;

  h3 {
    color: white;
  }

  transition: background-color ease-out 200ms;
  :hover {
    cursor: pointer;
    background-color: ${theme.colors.hoverblue};
  }
`;

const RoundButton = props => {
  return (
    <StyledButton onClick={() => props.history.push(props.link)}>
      <h3>{props.text}</h3>
    </StyledButton>
  );
};

export default withRouter(RoundButton);
