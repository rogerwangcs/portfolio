import React, {Component} from 'react'

import styled from 'styled-components'
import {viewport} from 'utils/viewport'
import {mainColors} from 'utils/theme'

import BlogCard from 'components/Body/BlogCard'
import Jupyter from 'components/Body/Jupyter'

const StyledBlogSection = styled.div `
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center; */

  margin-top: 40px;
`;

const BlogSection = (props) => {
  return (
    <StyledBlogSection>
      <BlogCard
        image='http://via.placeholder.com/350x150'
        title='Test Title'
        date='Mar 30, 2018'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a lorem aliquet, euismod turpis a, euismod ante. Sed non mauris a augue volutpat dictum. In vitae eleifend magna. Maecenas vitae lacus et purus vestibulum fringilla suscipit in leo. Nulla facilisi. Duis ut ultricies enim, non tempus nisl. Morbi mattis eget velit ac accumsan. Aenean vitae ullamcorper dui. Sed in luctus metus. Aliquam eget nisl non erat sodales dignissim. Morbi fermentum odio ac nisl tempor vulputate. Vestibulum a fringilla erat, eget facilisis quam. Curabitur imperdiet ex quis lacinia porttitor. Quisque suscipit aliquam consectetur. Vestibulum porta ex quis dapibus elementum.'
        link=''/>

      {/* <div class="highlight">
        <pre>
                 <code class="language-jsx">
                 {`
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

                 `}
                 </code>
             </pre>
      </div> */}
      <Jupyter></Jupyter>
    </StyledBlogSection>
  );
}

export default BlogSection;