import { FC } from "react";
import styled from "styled-components";
import { Workspace } from "../../entities/Workspace";
import { WorkspaceRepo } from "../../entities/WorkspaceRepo";
import { Repository } from "../../entities/Repository";
import { Colors } from "../../styledHelpers/Colors";

const Container = styled.div`
  display: block;
`;

const WorkspacesWrapper = styled.div`
  display: flex;
  padding: 20px 0px;
`;

const WorkspaceCard = styled.div`
  margin-right: 20px;
  border-radius: 5px;
  display: flex;
  width: 100%;
  box-shadow: 0px 1px 3px ${Colors.gray};
  padding: 20px;

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
`;

const Icon = styled.img`
  width: 15px;
  vertical-align: middle;
  margin: 0 5px;
`;

function workspaces(): Workspace[] {
  let data: Repository<Workspace> = new WorkspaceRepo();
  return data.getAll();
}

export const Workspaces: FC = () => {
  return (
    <Container>
      <Title>Workspaces</Title>
      <WorkspacesWrapper>
        {workspaces().map((w, i) => (
          <WorkspaceCard>
            <Image src="./placeholder350.png" />
            <CardDetails>
              <Title>{w.title}</Title>
              <CardFooter>
                <p>
                  <Icon src="./media/icons/entities.png" />
                  {w.type} &bull; {w.numberOfUsers} &bull; {w.lastUpdated}
                </p>
              </CardFooter>
            </CardDetails>
          </WorkspaceCard>
        ))}
      </WorkspacesWrapper>
    </Container>
  );
};