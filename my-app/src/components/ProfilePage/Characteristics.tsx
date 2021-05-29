import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";

const Wrapper = styled.div``;

const Title = styled.p`
  color: ${Colors.gray};
`;

const Tag = styled.button`
  background-color: ${Colors.gray};
  color: ${Colors.gray};
  border: 0;
  padding: 3px 10px;
  margin: 10px;
  border-radius: 5px;
`;

const TagsContainer = styled.div``;

export const Characteristics: FC = () => {
  return (
    <Wrapper>
      <TagsContainer>
        <Title>Expertise</Title>
        <Tag>Mergers and acquisition</Tag>
      </TagsContainer>
      <TagsContainer>
        <Title>Specialties</Title>
        <Tag>Cross border operation</Tag>
        <Tag>Transaction over 500M€/$</Tag>
      </TagsContainer>
      <TagsContainer>
        <Title>Admission to practice law</Title>
        <Tag>Paris bar association</Tag>
        <Tag>Tunissian bar association</Tag>
      </TagsContainer>
      <TagsContainer>
        <Title>Counties</Title>
        <Tag>Tunisia</Tag>
      </TagsContainer>
    </Wrapper>
  );
};

export default Characteristics;