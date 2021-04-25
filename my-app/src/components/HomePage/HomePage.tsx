import React, { FC } from 'react';
import styled from 'styled-components';

import { TopNav } from '../TopNav/TopNav';
import { LeftMenu } from  '../LeftMenu/LeftMenu';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import { RouteTest } from '../TopNav/RouteTest';


const Content = styled.div`
    max-width: 1200px;
    align-items: center;
    display: flex;
`;

const HomePage: FC = () => {
    return(
        <>
            <TopNav />
            <Content>
                <LeftMenu />
                <Router>
                <Switch>
                  <Route path="/about">
                    <RouteTest />
                  </Route>
                  <Route path="/users">
                    <Users />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
                </Router>
            </Content>
        </>
    );
};

export default HomePage;

function Home() {
    return <h2>Home</h2>;
  }
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
    return <h2>Users</h2>;
  }