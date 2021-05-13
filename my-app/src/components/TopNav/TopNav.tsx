import { FC } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';
import { ExpandedMenu } from './ExpandedMenu';

import useDropdown from "react-dropdown-hook";
import { Link } from "react-router-dom";


const Wrapper2 = styled(Wrapper)`
    display: flex;
    height: 40px;
    background: ${Colors.white};
    box-shadow: 1px 5px 10px lightgrey;
`;

const InnerWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 30px;
    background: ${Colors.white};
`;

const RightIcons = styled.div`
    padding-left: 600px;
    display: flex;
    margin-top: 10px;
`;

const LeftIcons = styled.div`
    margin-left: 15px;
    margin-top: 10px;
`;


const InputWrapper = styled.div`
    display: flex;
    margin-left: 500px;
    margin-top: 5px;
    height: 30px;
`;

const CustomImg = styled.img`
    padding-right: 10px;
`;

const CustomInput = styled.input`
    text-align: center;
    width: 500px;
    background: url(./media/icons/search.png) no-repeat;
    background-position: right;
    border-width: 1px;
    border-color: lightgrey;
`;

const ExpanMenu = styled.div`
    margin-top: 10px;
    margin-left: 100px;
`;

export const TopNav: FC = () =>{
    return(
        <Wrapper2>
            <InnerWrapper>
                <LeftIcons>
                    <CustomImg src="./media/icons/house2.png" />
                </LeftIcons>
                <ExpanMenu>
                        <ExpandedMenu />
                </ExpanMenu>
                <InputWrapper>
                    <CustomInput type="text" placeholder="Search Legalcluster" />
                </InputWrapper>
                <RightIcons>
                    <CustomImg src="./media/icons/house.png" />
                    <CustomImg src="./media/icons/comments.png" />
                    <CustomImg src="./media/icons/bell.png" />
                </RightIcons>
            </InnerWrapper>
        </Wrapper2>
    );
};