import { FC } from 'React';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';
import { ExpandedMenu } from './ExpandedMenu';

const Wrapper2 = styled(Wrapper)`
    height: 100px;
`;

const InnerWrapper = styled.div`
    width: 100%;
    height: 80px;
    background: ${Colors.white};
`;

const RightIcons = styled.div`
    display: flex;
`;

const InputWrapper = styled.div`

`;

const CustomImg = styled.img``;

const CustomInput = styled.input`
    background: ${Colors.white};
`;

export const TopNav: FC = () =>{
    return(
        <Wrapper2>
            <InnerWrapper>
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