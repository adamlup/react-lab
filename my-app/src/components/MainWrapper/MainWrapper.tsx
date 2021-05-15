import { FC } from "react";
import styled from "styled-components";
import TopNav from "../TopNav/TopNav";
import LeftMenu from "../LeftMenu/LeftMenu";
import MainPage from "../HomePage/HomePage";
import ProfilePage from "../ProfilePage/ProfilePage";
import EntitiesPage from "../EntitiesPage/EntitiesPage";
import WorkspacePage from "../WorkspacePage/WorkspacePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Wrapper = styled.div`
  display: block;
`;

const ContentWrapper = styled.div`
  display: flex;
`;

export const MainWrapper: FC = () => {
  return (
    <Router>
      <Wrapper>
        <TopNav />
        <ContentWrapper>
          <LeftMenu />
          <Switch>
            <Route path="/" exact>
              <MainPage />
            </Route>
            <Route path="/profile" exact>
              <ProfilePage />
            </Route>
            <Route path="/entities" exact>
              <EntitiesPage />
            </Route>
            <Route path="/workspace" exact>
              <WorkspacePage />
            </Route>
          </Switch>
        </ContentWrapper>
      </Wrapper>
    </Router>
  );
};

export default MainWrapper;
