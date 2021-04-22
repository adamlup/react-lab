import React, { FC } from 'react';
import styled from 'styled-components';

import { TopNav } from '../TopNav/TopNav';
import { LeftMenu } from  '../LeftMenu/LeftMenu';

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
            </Content>
        </>
    );
};

export default HomePage;