import { FC } from 'React';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';
import { ExpandedMenu } from './ExpandedMenu';

const Wrapper2 = styled(Wrapper)`
    display: flex;
    height: 50px;
    background: lightblue;
    justify-content: center;
`;

const InnerWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 25px;
    background: lightblue;
`;

const RightIcons = styled.div`
    padding-left: 600px;
    display: flex;
`;

const LeftIcons = styled.div`
`;


const InputWrapper = styled.div`
    display: flex;
    padding-left: 500px;
`;

const CustomImg = styled.img`
    padding-right: 10px;
`;

const CustomInput = styled.input`
    text-align: center;
    width: 500px;
    background: ${Colors.white};
`;


export const TopNav: FC = () =>{
    return(
        <Wrapper2>
            <InnerWrapper>
                <LeftIcons>
                    <CustomImg src="./media/icons/house2.png" />
                </LeftIcons>
                <div>
                    <ExpandedMenu />
                </div>
                <InputWrapper>
                    <CustomInput type="text" value="Search Legalcluster" />
                    <CustomImg src="./media/icons/search.png" alt="" title="" />
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