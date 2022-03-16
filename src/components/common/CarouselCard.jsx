import { useState } from "react";
import { viewport } from "constants/viewport";
import theme from "constants/theme";
import styled from "styled-components";

const SCarouselCard = styled.div`
  .carouselImage {
    width: 460px;
    height: 345px;
    margin-bottom: 15px;
    object-fit: cover;

    border-radius: 25px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);

    :hover {
      cursor: ${(props) => (props.clickable ? "pointer" : "cursor")};
    }
    @media (max-width: 950px) {
      width: 540px;
      height: 360px;
    }
    @media (max-width: ${viewport.MOBILE}) {
      width: 90%;
      height: auto;
      border-radius: 15px;
    }
  }
  .dotsContainer {
    display: flex;
    justify-content: center;
  }
`;

const CarouselDot = styled.div`
  width: 10px;
  height: 10px;
  margin: 3px;
  border-radius: 10px;
  background-color: ${props => props.selected ? theme.buttonblue : theme.gray0};

  :hover {
      cursor: pointer;
      background-color: ${theme.hoverblue}
  }
`;

const CarouselCard = (props) => {
  const images = props.images;
  const clickable = images.length > 1;
  const [selectedIdx, setSelectedIdx] = useState(0);

  const handleClick = (e) => {
    setSelectedIdx((selectedIdx + 1) % images.length);
  };

  const handleDotClick = (e, idx) => {
    setSelectedIdx(idx);
  }

  const dotComponents = images.map((image, idx) => <CarouselDot key={idx} selected={idx === selectedIdx} onClick={(e) => handleDotClick(e, idx)}/>);

  return (
    <SCarouselCard clickable={clickable}>
      <img
        alt="carouselCard"
        className="carouselImage"
        onClick={handleClick}
        src={images[selectedIdx]}
      />
      {clickable ? <div className="dotsContainer">{dotComponents}</div> : <></>}
    </SCarouselCard>
  );
};

export default CarouselCard;
