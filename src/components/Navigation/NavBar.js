import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import theme from "constants/theme";
import { viewport } from "constants/viewport";
import { animationTimings } from "constants/animationTimings";

import { animateScroll } from "react-scroll";
import FadeIn from "components/generic/FadeIn";

const NavAnimateC = styled(FadeIn)`
  text-align: center;
  @media (max-width: ${viewport.MOBILE}) {
    margin-top: 125px;
  }
  @media (min-width: ${viewport.MOBILE}) {
    margin-top: 150px;
  }
  @media (min-width: ${viewport.DESKTOP}) {
    margin-top: 200px;
  }
`;

const SNavBar = styled.div`
  white-space: nowrap;
`;

const NavButton = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  > h3 {
    user-select: none;
    line-height: 44px;
    color: white;
    font-weight: 300;
  }
  @media (max-width: ${viewport.MOBILE}) {
    padding: 0 15px;
  }
  @media (min-width: ${viewport.MOBILE}) {
    padding: 0 28px;
  }
`;

const NavButtonBG = styled.div`
  z-index: -1;
  position: absolute;
  background-color: ${theme.colors.hoverblue};
  width: 100%;
  height: 44px;
  border-radius: 20px/50%;

  /* backface-visibility prevents the shaking/flickering effect during transition  */
  backface-visibility: hidden;
  transition: all ease-out 200ms;
  transform: scale(0.8);
  opacity: 0;

  top: 0px;
  left: 0px;

  ${NavButton}:hover & {
    cursor: pointer;
    transform: scale(1);
    opacity: 1;
  }
`;

const NavBar = (props) => {
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);

  const handleNavigate = (url) => {
    navigate(url);
    if (window.scrollY < window.innerHeight) {
      animateScroll.scrollTo(window.innerHeight);
    }
  };

  const handleScroll = () => {
    const navPos = navRef.current.getBoundingClientRect().top;
    if (navPos < 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavAnimateC delay={animationTimings.loadDelay + 750}>
      <div ref={navRef}>
        <SNavBar isSticky={isSticky}>
          <NavButton onClick={() => handleNavigate("/")}>
            <h3>About</h3>
            <NavButtonBG className="navButtonBG" />
          </NavButton>
          <NavButton onClick={() => handleNavigate("/projects")}>
            <h3>Projects</h3>
            <NavButtonBG className="navButtonBG" />
          </NavButton>
        </SNavBar>
      </div>
    </NavAnimateC>
  );
};

export default NavBar;
