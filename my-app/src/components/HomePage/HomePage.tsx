import { FC } from 'react';
import styled from 'styled-components';
import { Colors } from "../../styledHelpers/Colors";
import { TopNav } from '../TopNav/TopNav';
import { LeftMenu } from  '../LeftMenu/LeftMenu';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
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

const MainContent = styled.div`
    width: 100%;
    margin-left: 15px;
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
