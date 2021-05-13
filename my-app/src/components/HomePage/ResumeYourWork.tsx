import { FC } from "react";
import styled from "styled-components";
import { WorkRepo } from "../../entities/WorkRepo";
import { Repository } from "../../entities/Repository";
import { Work } from "../../entities/Work";
import { Colors } from "../../styledHelpers/Colors";

const ResumeYourWorkWrapper = styled.div``;

const YourWorkCard = styled.div`
  border-radius: 5px;
  display: flex;
  box-shadow: 0px 1px 3px ${Colors.gray};
  padding: 20px;
  margin: 20px 0px;

  div {
    display: block;
  }
`;

const Title = styled.p`
  color: ${Colors.blue};
  font-size: 20px;
`;

const ResumeYourWorkItemsWrapper = styled.div`
  display: flex;
`;

const Elements = styled.div`
  display: flex;
  margin-left: auto;
`;

const CardDetails = styled.div`
  display: table-cell;
  position: relative;
  padding: 10px;
  width: 100%;
`;

const FilterWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  align-items: center;
  justify-content: center;

  input {
    width: 200px;
    padding: 10px;
    border: 1px solid ${Colors.gray};
    border-radius: 5px;
    outline: none;
    margin-right: 10px;
  }
`;

const SelectWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  align-items: center;
  justify-content: center;

  select {
    width: 200px;
    padding: 10px;
    border: 0;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    color: ${Colors.blue};
  }
`;

function works(): Work[] {
  let data: Repository<Work> = new WorkRepo();
  return data.getAll();
}

export const ResumeYourWork: FC = () => {
  return (
    <ResumeYourWorkWrapper>
      <ResumeYourWorkItemsWrapper>
        <Title>Resume Your Work</Title>
        <Elements>
          <FilterWrapper>
            <input type="text" placeholder="Filter by title..."></input>
          </FilterWrapper>
          <SelectWrapper>
            <select>
              <option value="followed">Followed</option>
            </select>
          </SelectWrapper>
        </Elements>
      </ResumeYourWorkItemsWrapper>
      {works().map((w, i) => (
        <YourWorkCard>
          <CardDetails>
            <Title>{w.title}</Title>
            <p>{w.contents}</p>
            <p>
              {w.type} &bull; {w.lastUpdated}
            </p>
          </CardDetails>
        </YourWorkCard>
      ))}
    </ResumeYourWorkWrapper>
  );
};

export default ResumeYourWork;
