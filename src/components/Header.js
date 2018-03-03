import React, {Component} from 'react';

import backdrop from 'images/Flamarrion Woodcut.png';
import 'components/Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const bgStyles = {
      width: '100vw',
      height: '300px',
      backgroundColor: 'black',
    }
    return (
      <div>
        <div style={bgStyles}/>
      </div>
    );
  }
}
export default Header;