import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import theme from "constants/theme";

const StyledButton = styled.div`
  display: inline-block;
  background-color: ${theme.buttonblue};

  padding: ${(props) => (props.small ? "10px 18px" : "12px 28px")};
  border-radius: ${(props) => (props.small ? "20px/50%" : "25px/50%")};
  text-align: center;

  h3 {
    color: white;
    font-weight: 300;
    font-size: ${(props) => (props.small ? "18px" : "auto")};
  }

  transition: background-color ease-out 200ms;
  :hover {
    cursor: pointer;
    background-color: ${theme.hoverblue};
  }
`;

const RoundButton = (props) => {
  const navigate = useNavigate();

  const handleNavigate = (url) => {
    navigate(url);
    if (props.scroll) window.scrollTo(0, window.innerHeight);
  };

  return (
    <StyledButton
      className="RoundButton"
      {...props}
      onClick={() => handleNavigate(props.link)}
    >
      <h3>{props.text}</h3>
    </StyledButton>
  );
};

export default RoundButton;
