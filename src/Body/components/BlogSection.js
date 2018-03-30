import React, {Component} from 'react'

import styled from 'styled-components'
import {viewport} from 'utils/viewport'
import {mainColors} from 'utils/theme'

import Divider from 'Body/components/Divider'

const StyledBlogSection = styled.div `

  p {
    color: white;
  }
`;

const BlogSection = (props) => {
  return (
    <StyledBlogSection>
      <p>Medium Blog under construction.</p>
      <p>Medium Blog under construction.</p>
      <p>Medium Blog under construction.</p>
      <p>Medium Blog under construction.</p>
      <p>Medium Blog under construction.</p>
      <p>Medium Blog under construction.</p>
      <p>Medium Blog under construction.</p>
      <p>Medium Blog under construction.</p>
      <p>Medium Blog under construction.</p>
      <p>Medium Blog under construction.</p>
    </StyledBlogSection>
  );
}

export default BlogSection;