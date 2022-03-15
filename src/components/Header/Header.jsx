import styled from "styled-components";
import Background from "components/Header/Background";
import Text from "components/Header/Text";
import NavBar from "components/Navigation/NavBar";
import SocialButtons from "components/Header/SocialButtons";
// import OpenArrow from 'components/Header/OpenArrow'

const HeaderContent = styled.div`
  > * {
    position: absolute;
    top: ${(props) => props.height / 2 + "px"};
    left: 50vw;
    transform: translate(-50%, -50%);
  }
`;

const Header = () => {
  return (
    <>
      <Background />
      <SocialButtons />
      <HeaderContent height={window.innerHeight}>
        <Text />
        <NavBar />
      </HeaderContent>
    </>
  );
};

export default Header;
