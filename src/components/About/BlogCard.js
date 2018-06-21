import React, {Component} from 'react'

import styled from 'styled-components'
import {viewport} from 'constants/viewport'
import theme from 'constants/theme.js'

import Button from 'components/About/Button'

const StyledBlogCard = styled.div `
  position: relative;
  z-index: 10;
  background-color: ${theme.colors.creme};

  width: 700px;
  height: 450px;

  margin: 0px auto 25px auto;

  > img {
    width:100%;
    height: 200px;
  }
  > .card_body {
    padding: 10px;

    > .header_block {
      display: flex;
      justify-content: space-between;
      > * {
        margin-top: 10px;
      }
    }
    > .desc_container {
      white-space: normal;
      text-overflow: ellipsis;
      overflow: hidden;
      height: 130px;
        >p {
        }
    }
    > a {
      margin-top: 5px;
      float: right;
    }
  }

  @media (max-width: ${viewport.MOBILE}) {
    width: 100%;
  }
  @media (min-width: ${viewport.MOBILE}) {
    width: 85%;
  }
  @media (min-width: ${viewport.DESKTOP}) {
    width: 700px;
  }

`;

const CardBG = styled.div `
  position: absolute;
  background-color: ${theme.colors.fadedblue};

  width: 700px;
  height: 450px;

  margin: -10px auto 25px auto;
  left: -30px;
  right: 0;

  @media (max-width: ${viewport.MOBILE}) {
    width: 95vw;
    margin: -8px auto 25px auto;
    left: -10px;
    right: 0;
  }
  @media (min-width: ${viewport.MOBILE}) {
    width: 87%;
    margin: -10px auto 25px auto;
    left: -30px;
    right: 0;
  }
  @media (min-width: ${viewport.DESKTOP}) {
    width: 700px;
  }
`;

const BlogCard = (props) => {
  return (
    <div>
      <CardBG/>
      <StyledBlogCard>
        <img src={props.image}/>
        <div class='card_body'>
          <div class='header_block'>
            <h3>{props.title}</h3>
            <p>{props.date}</p>
          </div>
          <div class='desc_container'>
            <p>{props.description}</p>
          </div>
          <a href={props.link}><Button type='solid' width='175px' height='35px'><p>Continue Reading</p></Button></a>
        </div>
      </StyledBlogCard>
    </div>
  );
}

export default BlogCard;