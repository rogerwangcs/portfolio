import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.components,
      active: this.props.active,
      direction: ""
    };
  }

  componentDidMount() {
    this.carouselTimer = setInterval(() => this.moveRight(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.carouselTimer);
  }

  restartTimer = () => {
    clearInterval(this.carouselTimer);
    this.carouselTimer = setInterval(() => this.moveRight(), 5000);
  };

  generateItems() {
    var carouselItems = [];
    var level;
    let items = [...this.state.items, ...this.state.items, ...this.state.items];
    for (var i = this.state.active - 1; i < this.state.active + 2; i++) {
      var index = i;
      if (i < 0) {
        index = items.length + i;
      } else if (i >= items.length) {
        index = i % items.length;
      }
      level = this.state.active - i;
      carouselItems.push(
        <CarouselItem
          key={index}
          className={"carousel-item level" + level}
          id={index}
          level={level}
          component={items[index]}
          moveLeft={this.moveLeft}
          moveRight={this.moveRight}
        ></CarouselItem>
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
      direction: "left"
    });
  };

  moveRight = () => {
    var newActive = this.state.active;
    this.setState({
      active: (newActive + 1) % this.state.items.length,
      direction: "right"
    });
  };

  render() {
    return (
      <div id="carousel" className="noselect">
        {/* <div className="arrow arrow-left" onClick={this.leftClick}>
          <i className="fi-arrow-left"></i>
        </div> */}
        <ReactCSSTransitionGroup transitionName={this.state.direction}>
          {this.generateItems()}
        </ReactCSSTransitionGroup>
        {/* <div className="arrow arrow-right" onClick={this.rightClick}>
          <i className="fi-arrow-right"></i>
        </div> */}
      </div>
    );
  }
}

class CarouselItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: this.props.level
    };
  }

  moveItem = level => {
    if (level > 0) this.props.moveLeft();
    if (level < 0) this.props.moveRight();
  };

  render() {
    return (
      <div
        className={"carousel-item level" + this.props.level}
        onClick={() => this.moveItem(this.props.level)}
      >
        {this.props.component}
      </div>
    );
  }
}

export default Carousel;
