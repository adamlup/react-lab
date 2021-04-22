import { FC } from 'React';
import styled from 'styled-components';

const LowerIcons = styled.div`
    align-items: center;
`;

const CustomImg = styled.img``;

export const LeftMenu: FC = () => {
    return(
            <LowerIcons>
                <CustomImg src="./media/icons/publications.png" />
                <CustomImg src="./media/icons/ecosystem.png" />
                <CustomImg src="./media/icons/entities.png" />
            </LowerIcons>
    );
};