import styled from "styled-components";
import Divider from "components/common/Divider";
import { skills } from "constants/content";

const StyledSkillsSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  margin-top: 20px;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SkillBox = styled.div`
  width: 30%;

  padding-left: 10px;
  margin-bottom: 15px;

  text-align: left;

  .items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    > p {
      margin: 6px 15px 6px 0px;
    }
  }

  @media (max-width: 750px) {
    width: 100%;
  }
`;

const SkillsSection = () => {
  return (
    <StyledSkillsSection>
      {skills.map((skillBox, idx1) => (
        <SkillBox key={"skill-box-" + idx1}>
          <Divider>
            <h3>{skillBox.name}</h3>
          </Divider>
          <div className="items">
            {skillBox.items.map((skill, idx2) => (
              <p key={"skill-" + idx2}>{skill}</p>
            ))}
          </div>
        </SkillBox>
      ))}
    </StyledSkillsSection>
  );
};

export default SkillsSection;
