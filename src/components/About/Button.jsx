import styled from "styled-components";
import theme from "constants/theme";

const StyledButton = styled.div`
  transition: all 300ms ease-in-out;

  background-color: ${(props) =>
    props.type === "outline" ? "white" : theme.fadedblue};

  height: ${(props) => props.height};
  width: ${(props) => props.width};

  border: ${(props) =>
    props === "outline"
      ? "solid 2px" + theme.fadedblue
      : "solid 2px" + theme.fadedblue};

  p {
    font-family: "Raleway", sans-serif;
    font-size: 18px;
    font-weight: 300;

    color: ${(props) => (props.type === "outline" ? theme.fadedblue : "white")};

    text-align: center;
    margin-top: 7px;
    padding-top: 0;
  }

  :hover {
    cursor: pointer;
    border: ${(props) =>
      props === "outline"
        ? "solid 2px" + theme.hoverblue
        : "solid 2px" + theme.hoverblue};
    background-color: ${(props) =>
      props.type === "outline" ? theme.fadedblue : theme.hoverblue};
  }
`;

export default StyledButton;
