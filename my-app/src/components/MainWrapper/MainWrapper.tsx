import { FC, useEffect } from "react";
import styled from "styled-components";
import TopNav from "../TopNav/TopNav";
import LeftMenu from "../LeftMenu/LeftMenu";
import HomePage from "../HomePage/HomePage";
import ProfilePage from "../ProfilePage/ProfilePage";
import EntitiesPage from "../EntitiesPage/EntitiesPage";
import WorkspacePage from "../WorkspacePage/WorkspacePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GetAlbums } from "../../actions/AlbumActions";
import { GetComments } from "../../actions/CommentActions";
import { GetPhotos } from "../../actions/PhotoActions";
import { GetPosts } from "../../actions/PostActions";
import { GetUsers } from "../../actions/UserActions";
import { GetTodos } from "../../actions/TodoActions";

const ContentWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: 70%;
`;

type GetAlbums = ReturnType<typeof GetAlbums>;
type GetComments = ReturnType<typeof GetComments>;
type GetPhotos = ReturnType<typeof GetPhotos>;
type GetPosts = ReturnType<typeof GetPosts>;
type GetUsers = ReturnType<typeof GetUsers>;
type GetTodos = ReturnType<typeof GetTodos>;

export const MainWrapper: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<GetAlbums>(GetAlbums());
    dispatch<GetComments>(GetComments());
    dispatch<GetPhotos>(GetPhotos());
    dispatch<GetPosts>(GetPosts());
    dispatch<GetUsers>(GetUsers());
    dispatch<GetTodos>(GetTodos());
  }, []);

  return (
    <Router>
      <TopNav />
      <ContentWrapper>
        <LeftMenu />
        <Switch>
          <Route path="/" exact>
            <HomePage />
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
    </Router>
  );
};

export default MainWrapper;
