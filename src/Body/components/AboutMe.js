import React, {Component} from 'react'

import styled from 'styled-components'
import {viewport} from 'utils/viewport'
import {mainColors} from 'utils/theme'

import SummarySection from 'Body/components/SummarySection'

const AboutMe = (props) => {
  return (
    <div>
      <h2>About Me</h2>
      <SummarySection/>
    </div>
  );
}

export default AboutMe;