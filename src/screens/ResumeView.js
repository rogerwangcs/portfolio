import React, { Component } from "react";
import { Document, Page } from "react-pdf";

import styled from "styled-components";
import theme from "constants/theme";
import PageSection from "components/generic/PageSection.js";

import Resume from "media/ResumeV2.pdf";

const StyledResumeView = styled.div`
  border-radius: 25px;
  background-color: red;

  .react-pdf__Page {
    border-radius: 25px;

    > * {
      transform: translateX(250px);
    }
  }
`;

class ResumeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1
    };
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <PageSection
        color={theme.colors.gray2}
        paddingBottom="50"
        paddingTop="50"
      >
        <StyledResumeView>
          <Document file={Resume} onLoadSuccess={this.onDocumentLoad}>
            <Page pageNumber={pageNumber} />
          </Document>
        </StyledResumeView>
      </PageSection>
    );
  }
}

export default ResumeView;
