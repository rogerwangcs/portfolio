import React, {Component} from 'react';

import styled from 'styled-components';

const StyledOpenArrow = styled.div `
position: absolute;
top: 70vh;
left: 50%;
width: 100px;
height: 100px;
background-color: white;
transition: all 300ms ease;
opacity: ${props => props.navDrawer === 'open'
  ? 1
  : 0};
transform: translateX(-50%) translateY(${props => props.navDrawer === 'open'
    ? 0
    : '-10vh'});
`;

class OpenArrow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'red',
      display: 'block'
    }
  }

  componentWillReceiveProps = (nextProps) => {
    // console.log('RECIEVED NEW PROPS' + nextProps.navDrawer) this.props.navDrawer
    // === 'closed' && nextProps.navDrawer === 'open'   ? this.setState({display:
    // 'block'})   : this.setState({display: 'none'})
  }

  render() {
    return (
      <div>
        {console.log(this.props.navDrawer)}
        <StyledOpenArrow
          onClick={this.props.handleDrawer}
          navDrawer={this.props.navDrawer}></StyledOpenArrow>
      </div>
    );
  }
}

export default OpenArrow;