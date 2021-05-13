import { FC } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';

const Wrapper2 = styled(Wrapper)`
    height: 100px;
`;

const InnerWrapper = styled.div`
    width: 12%;
    margin-top: 15px;
    background: ${Colors.white};
`;

const LowerIcons = styled.div`
    align-items: center;
    padding-top: 20px;
`;

const CustomImg = styled.img`
    margin-left: 20px;
`;

const Profile = styled.div`
    width: 200px;
    background: white;
    margin-left: 10px;
    box-shadow: 1px 3px 5px lightgrey;
`;

const ProfileImg = styled.img``;


const ProfileLeftIcons = styled.img`
    padding-left: 10px;
`;

const ProfileRightIcons = styled.img`
    float:right;
`;

const ProfileRightIconsContainer = styled.div`
    float:right;
    border: groove;
    margin-right: 5px;
`;

const ProfileImgContainer = styled.div`
    height: 50px;
    width: 50px;
    background: black;
    border-radius: 50%;
    margin-left: 75px;
`;

const ProfileName = styled.div`
    text-align: center;
`;

const ProfileJob = styled.div`
    text-align: center;
`;

export const LeftMenu: FC = () => {
    return(
        <InnerWrapper>
                <Profile>
                    <ProfileImgContainer>
                        
                    </ProfileImgContainer>
                    <ProfileName>Humberta Swift</ProfileName>
                    <ProfileJob>Job title - Company</ProfileJob>
                    <LowerIcons>
                        <ProfileLeftIcons src="./media/icons/network.png" /> 
                        Your Network    
                        <ProfileRightIconsContainer><ProfileRightIcons src="./media/icons/user-plus.png" /></ProfileRightIconsContainer>
                    </LowerIcons>
                    <LowerIcons>
                        <ProfileLeftIcons src="./media/icons/publications.png" /> 
                        Your Publications     
                        <ProfileRightIconsContainer><ProfileRightIcons src="./media/icons/plus.png" /> </ProfileRightIconsContainer>
                    </LowerIcons>
                </Profile>
            <LowerIcons>
                <CustomImg src="./media/icons/publications.png" /> Publications
            </LowerIcons>
            <LowerIcons>
                <CustomImg src="./media/icons/ecosystem.png" /> Ecosystem
            </LowerIcons>
            <LowerIcons>
                <CustomImg src="./media/icons/entities.png" /> Entities
            </LowerIcons>
        </InnerWrapper>
    );
};