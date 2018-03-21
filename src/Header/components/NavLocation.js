import React, {Component} from 'react';
import ReactDOM from 'react-dom'

class NavLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, {passive: true});
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, {passive: true});
  }

  handleScroll = () => {
    let rect = ReactDOM
      .findDOMNode(this)
      .getBoundingClientRect();
    rect = Math.floor(rect.top)
    if (rect > -100 && rect < 400) {
      this
        .props
        .setSectionID(this.props.sectionID);
    }
  }

  render() {
    return (
      <div/>
    );
  }
}

export default NavLocation;