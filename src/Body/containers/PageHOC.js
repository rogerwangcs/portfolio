import React, {Component} from 'react';
import styled from "styled-components";
import {viewport} from 'utils/viewport';

const Page = (Comp) => {

  const PageStyle = styled.div `
    background-color: gray;
    margin: auto;
    margin-top: 50px;
   
    @media (max-width: ${viewport.MOBILE}) {
      width: 96vw;
    }
    @media (min-width: ${viewport.MOBILE}) {
      width: 80vw;
    }
    @media (min-width: ${viewport.DESKTOP}) {
      width: ${viewport.DESKTOP_CONTENT_WIDTH + 'px'};
    }
  `;

  return class extends Component {
    render() {
      return (
        <div>
            <PageStyle>
              <Comp {...this.props}/>
            </PageStyle>
        </div>
      );
    }
  }
}

export default Page;