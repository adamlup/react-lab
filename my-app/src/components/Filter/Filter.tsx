import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";

const Card = styled.div`
  display: block;
  box-shadow: 0px 1px 3px ${Colors.gray};
  padding: 20px;
  border-radius: 5px;
  background-color: ${Colors.white};

  p {
    color: ${Colors.gray};
  }
`;

const FiltersBarContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  span {
    margin: 0 10px;
  }
`;

const Search = styled.input`
  padding: 10px;
  margin-left: 20px;
  border: 0px;
  border-radius: 5px;
  background-color: ${Colors.gray};
`;

const Select = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;

  :hover {
    cursor: pointer;
  }
`;

const Icon = styled.img`
  width: 20px;
  margin: auto 15px;

  :hover {
    cursor: pointer;
  }
`;

const SmallIcon = styled.img`
  width: 10px;
  margin-left: 8px;
`;

export const Filter: FC = () => {
  return (
    <Card>
      <p>
        Rows are filtered by the following conditions starting from the top.
      </p>
      <FiltersBarContainer>
        <Icon src="../media/icons/close.svg" />
        Where
        <Select>
          Company
          <SmallIcon src="../media/icons/arrow-down.svg" />
        </Select>
        <Select>
          Contains
          <SmallIcon src="../media/icons/arrow-down.svg" />
        </Select>
        <Search placeholder="Type..."></Search>
      </FiltersBarContainer>
      <FiltersBarContainer>
        <Icon src="../media/icons/close.svg" />
        Where
        <Select>
          Status
          <SmallIcon src="../media/icons/arrow-down.svg" />
        </Select>
        <Select>
          Is
          <SmallIcon src="../media/icons/arrow-down.svg" />
        </Select>
        <Search placeholder="Type..."></Search>
        <Select>
          In
          <SmallIcon src="../media/icons/arrow-down.svg" />
        </Select>
        <Search placeholder="Entity..."></Search>
      </FiltersBarContainer>
      <FiltersBarContainer>
        <Icon src="../media/icons/close.svg" />
        And
        <Select>
          Status
          <SmallIcon src="../media/icons/arrow-down.svg" />
        </Select>
        <Select>
          Ends before
          <SmallIcon src="../media/icons/arrow-down.svg" />
        </Select>
        <Search placeholder="Date..."></Search>
        <Select>
          In
          <SmallIcon src="../media/icons/arrow-down.svg" />
        </Select>
        <Search placeholder="Entity..."></Search>
      </FiltersBarContainer>
      <FiltersBarContainer>
        <Icon src="../media/icons/plus.svg" />
        Add filter
        <Select>
          choose property
          <SmallIcon src="../media/icons/arrow-down.svg" />
        </Select>
      </FiltersBarContainer>
    </Card>
  );
};

export default Filter;
