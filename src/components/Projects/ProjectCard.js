import React, { Component } from "react";

import { viewport } from "constants/viewport";
import styled from "styled-components";
import Divider from "components/generic/Divider";
import RoundButton from "components/generic/RoundButton";

import { Slide } from "react-slideshow-image";

import writefast1 from "media/writefast1.PNG";
import writefast2 from "media/writefast2.PNG";
import writefast3 from "media/writefast3.PNG";

const images = [writefast1, writefast2, writefast3];

const StyledCard = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  position: relative;
  width: 100%;
  margin-bottom: 75px;

  h6 {
    font-size: 16px;
  }

  p {
    font-size: 16px;
  }

  > .textWrapper {
    white-space: wrap;
    order: 2;
    max-width: 400px;
    margin-right: 25px;
    p + div {
      margin-right: 15px;
    }

    @media (max-width: 950px) {
      padding-top: 30px;
      padding-left: 10px;
      max-width: 100%;
    }
  }
`;

const Picture = styled.img`
  width: 400px;
  height: 250px;
  margin-bottom: 15px;
  object-fit: cover;

  border-radius: 25px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);

  @media (max-width: 950px) {
    width: 450px;
    height: 300px;
  }
  @media (max-width: ${viewport.MOBILE}) {
    width: 90%;
    height: auto;
    border-radius: 15px;
  }
`;
const Card = props => {
  return (
    <StyledCard>
      <div className="textWrapper">
        <Divider>
          <h4>{props.title}</h4>
        </Divider>
        <h6>{props.date}</h6>
        <p>{props.description}</p>
        <a href={props.github} target="_blank">
          <RoundButton small text="See on Github" />
        </a>
        {/* <RoundButton small text="Demo" /> */}
      </div>
      <Picture src={props.image} />
    </StyledCard>
  );
};

export default Card;
