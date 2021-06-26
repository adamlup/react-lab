import { FC } from 'react';
import styled from 'styled-components';
import { Colors } from "../../styledHelpers/Colors";
import { LatestPublications } from "./LatestPublications";
import { Workspaces } from "./Workspace";
import { ResumeYourWork } from "./ResumeYourWork";

const Content = styled.div`
  margin: 20px;
  border-radius: 5px;
  width: 100%;
  display: block;
  box-shadow: 0px 1px 3px ${Colors.gray};
  padding: 20px;
`;

const HomePage: FC = () => {
    return(
      <Content>
          <LatestPublications />
          <Workspaces />
          <ResumeYourWork />
      </Content>
    );
};

export default HomePage;
