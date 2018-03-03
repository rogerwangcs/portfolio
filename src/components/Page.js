import React, {Component} from 'react';
import MediaQuery from 'react-responsive';
import styled from "styled-components";
import {viewport} from 'utils/viewport';

const Page = (Comp) => {

  const PageSpacer = styled.div `
    width: 100vw;
    height: 25px;
    background-color: white;
  `;
  const HeaderCover = styled.div `
    width: 100vw;
    height: 100vh;
    background-color: white;
  `;
  const PageStyle = styled.div `
    width: ${viewport.DESKTOP};
    margin: auto;
    background-color: white;
    
    @media (max-width: ${viewport.DESKTOP}) {
      padding: 0px 0.5vw;
      width: 100vw;
    }
  `;

  return class extends Component {
    render() {
      return (
        <div>
          <PageSpacer/>
          <HeaderCover>
            <PageStyle>
              <Comp {...this.props}/>
            </PageStyle>
          </HeaderCover>
        </div>
      );
    }
  }
}

export default Page;