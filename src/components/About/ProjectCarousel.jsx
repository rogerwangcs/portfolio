import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { viewport } from "constants/viewport";

const SCarousel = styled.div`
  overflow-y: hidden;
  position: relative;
  height: 350px;
  width: 100%;
  padding: 50px 0px;

  @media (max-width: ${viewport.MOBILE}) {
    height: 250px;
    padding: 20px 0px;
  }
`;

SCarousel.Carousel = styled.div`
  transform-origin: center;
  transform: scale(1);
  @media (max-width: ${viewport.MOBILE}) {
    transform: scale(0.65);
  }
`;

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.components,
      active: this.props.active,
      direction: "left",
    };
  }

  componentDidMount() {
    this.carouselTimer = setInterval(() => {
      if (document.hasFocus()) this.moveLeft();
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.carouselTimer);
  }

  restartTimer = () => {
    clearInterval(this.carouselTimer);
    this.carouselTimer = setInterval(() => {
      if (document.hasFocus()) this.moveLeft();
    }, 5000);
  };

  generateItems() {
    var carouselItems = [];
    var level;
    let items = this.state.items.reverse();
    for (var i = this.state.active - 1; i < this.state.active + 2; i++) {
      var index = i;
      if (i < 0) {
        index = items.length + i;
      } else if (i >= items.length) {
        index = i % items.length;
      }
      level = this.state.active - i;
      carouselItems.push(
        <CSSTransition
          classNames={this.state.direction}
          key={i}
          timeout={{ enter: 0, exit: 500 }}
        >
          <CarouselItem
            key={index}
            className={"carousel-item level" + level}
            id={index}
            level={level}
            component={items[index]}
            handleClick={this.props.handleClick}
            moveLeft={this.moveLeft}
            moveRight={this.moveRight}
          ></CarouselItem>
        </CSSTransition>
      );
    }
    return carouselItems;
  }

  moveLeft = () => {
    this.restartTimer();
    var newActive = this.state.active;
    newActive--;
    this.setState({
      active: newActive < 0 ? this.state.items.length - 1 : newActive,
      direction: "left",
    });
  };

  moveRight = () => {
    this.restartTimer();
    var newActive = this.state.active;
    this.setState({
      active: (newActive + 1) % this.state.items.length,
      direction: "right",
    });
  };

  render() {
    return (
      <SCarousel id="carousel" className="noselect">
        <SCarousel.Carousel>
          <TransitionGroup>{this.generateItems()}</TransitionGroup>
        </SCarousel.Carousel>
      </SCarousel>
    );
  }
}

class CarouselItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: this.props.level,
    };
  }

  handleClick = () => {
    if (this.props.level > 0) this.props.moveLeft();
    else if (this.props.level < 0) this.props.moveRight();
    else this.props.handleClick();
  };

  render() {
    return (
      <div
        className={"carousel-item level" + this.props.level}
        onClick={this.handleClick}
      >
        {this.props.component}
      </div>
    );
  }
}

export default Carousel;
