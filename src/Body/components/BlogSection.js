import React, {Component} from 'react'

import styled from 'styled-components'
import {viewport} from 'utils/viewport'
import {mainColors} from 'utils/theme'

import BlogCard from 'Body/components/BlogCard'

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
      <BlogCard image='http://via.placeholder.com/350x150' title='Pace of our Society' date='Mar 30, 2018' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a lorem aliquet, euismod turpis a, euismod ante. Sed non mauris a augue volutpat dictum. In vitae eleifend magna. Maecenas vitae lacus et purus vestibulum fringilla suscipit in leo. Nulla facilisi. Duis ut ultricies enim, non tempus nisl. Morbi mattis eget velit ac accumsan. Aenean vitae ullamcorper dui. Sed in luctus metus. Aliquam eget nisl non erat sodales dignissim. Morbi fermentum odio ac nisl tempor vulputate. Vestibulum a fringilla erat, eget facilisis quam. Curabitur imperdiet ex quis lacinia porttitor. Quisque suscipit aliquam consectetur. Vestibulum porta ex quis dapibus elementum.' link='https://css-tricks.com/snippets/css/a-guide-to-flexbox/'/>
    </StyledBlogSection>
  );
}

export default BlogSection;