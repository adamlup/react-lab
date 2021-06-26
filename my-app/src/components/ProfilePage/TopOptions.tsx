import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";

const Wrapper = styled.div`
  display: flex;
  justify-content: right;
`;

const Icon = styled.img`
  width: 15px;
  vertical-align: middle;
  margin: 0 5px;
`;

const StyledSpan = styled.span`
  color: ${Colors.black};
`;

export const TopOptions: FC = () => {
  return (
    <Wrapper>
      <Icon src="./media/icons/comments.svg" />
      <StyledSpan>Message</StyledSpan>
      <Icon src="./media/icons/entities.svg" />
      <StyledSpan>Create Request</StyledSpan>
      <Icon src="./media/icons/bell.svg" />
      <StyledSpan>Add to a cluster</StyledSpan>
    </Wrapper>
  );
};

export default TopOptions;