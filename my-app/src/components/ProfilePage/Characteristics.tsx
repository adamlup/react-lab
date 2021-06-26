import { FC, useState } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";

const Wrapper = styled.div`
  border-top: solid 1px ${Colors.gray};
  padding-top: 10px;
`;

const Title = styled.p`
  color: ${Colors.black};
`;

const Tag = styled.select`
  background-color: ${Colors.gray};
  color: ${Colors.black};
  border: 0;
  padding: 5px 10px;
  margin: 10px;
  border-radius: 5px;
  transition: 0.2s;

  :enabled {
    color: ${Colors.blue};
    background-color: ${Colors.gray};
    transition: 0.2s;

    :hover {
      background-color: ${Colors.gray};
      color: ${Colors.black};
      transition: 0.2s;
    }
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  float: right;

  :hover {
    cursor: pointer;
  }
`;

const TagsContainer = styled.div``;

export const Characteristics: FC = () => {
  const [editable, setEnabled] = useState(true);

  const handleEdit = () => {
    setEnabled(function changeValue(value) {
      return !value;
    });
  };

  return (
    <Wrapper>
      <TagsContainer>
        <Icon src="./media/icons/settings.svg" onClick={handleEdit}></Icon>
        <Title>Expertise</Title>
        <Tag disabled={editable}>
          <option>Mergers and acquisition</option>
          <option>Option</option>
          <option>Option</option>
          <option>Option</option>
          <option>Option</option>
        </Tag>
      </TagsContainer>
      <TagsContainer>
        <Title>Specialties</Title>
        <Tag disabled={editable}>
          <option>Cross border operation</option>
          <option>Option</option>
          <option>Option</option>
          <option>Option</option>
          <option>Option</option>
        </Tag>
        <Tag disabled={editable}>
          <option>Transaction over 500M€/$</option>
          <option>Option</option>
          <option>Option</option>
          <option>Option</option>
          <option>Option</option>
        </Tag>
      </TagsContainer>
      <TagsContainer>
        <Title>Admission to practice law</Title>
        <Tag disabled={editable}>
          <option>Paris bar association</option>
          <option>Option</option>
          <option>Option</option>
          <option>Option</option>
          <option>Option</option>
        </Tag>
        <Tag disabled={editable}>
          <option>Tunissian bar association</option>
          <option>Option</option>
          <option>Option</option>
          <option>Option</option>
          <option>Option</option>
        </Tag>
      </TagsContainer>
      <TagsContainer>
        <Title>Counties</Title>
        <Tag disabled={editable}>
          <option>Tunisia</option>
          <option>Option</option>
          <option>Option</option>
          <option>Option</option>
          <option>Option</option>
        </Tag>
      </TagsContainer>
    </Wrapper>
  );
};

export default Characteristics;