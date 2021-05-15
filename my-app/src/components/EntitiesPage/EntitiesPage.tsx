import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { Workspace } from "../../entities/Workspace";
import { WorkspaceRepo } from "../../entities/WorkspaceRepo";
import { Repository } from "../../entities/Repository";

const Wrapper = styled.div`
  width: 100%;
  margin: 20px;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Header = styled.span`
  color: ${Colors.blue};
  font-size: 20px;
  margin: auto 0;
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 15px;
  margin-top: 20px;
`;

const Card = styled.div`
  display: flex;
  box-shadow: 0px 1px 3px ${Colors.gray};
  padding: 20px;
  border-radius: 5px;

  div {
    display: block;
  }
`;

const Title = styled.p`
  color: ${Colors.blue};
  font-size: 20px;
`;

const CardDetails = styled.div`
  display: table-cell;
  position: relative;
  padding: 10px;
  width: 100%;
`;

const CardFooter = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
`;

const Select = styled.select`
  width: 200px;
  padding: 10px;
  border: 0;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  color: ${Colors.blue};
  margin-left: auto;
`;

const Icon = styled.img`
  width: 20px;
  margin: auto 10px;
`;

function workspaces(): Workspace[] {
  let data: Repository<Workspace> = new WorkspaceRepo();
  return data.getAll();
}

export const EntitiesPage: FC = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header>Entities</Header>
        <Icon src="../media/icons/people.svg"></Icon>
        <Select>
          <option>Mosaic</option>
          <option>List</option>
        </Select>
      </HeaderWrapper>
      <CardsWrapper>
        {workspaces().map((w, i) => (
          <Card>
            <Image src="./placeholder350.png" />
            <CardDetails>
              <Title>{w.title}</Title>
              <CardFooter>
                <p>
                  {w.type} &bull; {w.numberOfUsers} &bull; {w.lastUpdated}
                </p>
              </CardFooter>
            </CardDetails>
          </Card>
        ))}
      </CardsWrapper>
    </Wrapper>
  );
};

export default EntitiesPage;
