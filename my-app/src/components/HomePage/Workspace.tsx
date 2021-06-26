import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { useSelector } from "react-redux";
import { IState } from "../../reducers/index";
import { ITodoReducer } from "../../reducers/TodoReducers";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin-bottom: 20px;
`;

const WorkspacesWrapper = styled.div`
  display: flexbox;
  padding: 20px 0px;
  width: 1200px;
  overflow: auto;
`;

const CardContainer = styled.div`
  margin-right: 20px;
  border-radius: 5px;
  box-shadow: 0px 1px 3px ${Colors.gray};
  background-color: ${Colors.white};
  width: 400px;
  height: 250px;
  color: ${Colors.black};

  span {
    margin-left: 15px;
  }
`;

const CardBackgroundImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
`;

const CategoryCard = styled.div`
  background-color: ${Colors.white};
  border-radius: 5px;
  position: relative;
  box-shadow: 0px 1px 3px ${Colors.gray};
  margin-top: -35px;
  margin-left: 15px;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
`;

const CategoryIcon = styled.img`
  margin: auto;
  width: 50px;
`;

const Title = styled.p`
  color: ${Colors.black};
  font-size: 20px;
`;

const CardTitle = styled.p`
  color: ${Colors.black};
  font-size: 20px;
  margin-left: 125px;
  margin-top: -55px;
  height: 2ch;
`;

const CardDetails = styled.p`
  margin-top: 50px;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 20px;
  margin: 0 15px;
`;

function getRandomValue(max: number) {
  return Math.ceil(Math.random() * max);
}

export const Workspaces: FC = () => {
  const todos = useSelector<IState, ITodoReducer>((state) => ({
    ...state.todos,
  }));

  return (
    <Container>
      <Title>Workspaces</Title>
      <WorkspacesWrapper>
        {todos.todosList.slice(10, 25).map((todo, index) => (
          <CardContainer>
            <CardBackgroundImage src= "https://via.placeholder.com/350x150/00fff9?text=workspace+card" />
            <CategoryCard>
              <CategoryIcon src="./media/icons/ecosystem.svg" />
            </CategoryCard>
            <Link
              to={"/workspace?id=" + todo.id}
              style={{ textDecoration: "none" }}
            >
              <CardTitle>{todo.title}</CardTitle>
            </Link>
            <CardDetails>
              <Icon src="./media/icons/ecosystem.svg" />
              Contract
              <Icon src="./media/icons/people.svg" />
              {getRandomValue(20)} users
            </CardDetails>
            <br />
            <span>Last update {getRandomValue(10)} days ago</span>
          </CardContainer>
        ))}
      </WorkspacesWrapper>
    </Container>
  );
};

export default Workspaces;