import { FC, useState, ChangeEvent } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { ICommentReducer } from "../../reducers/CommentReducers";
import { IUserReducer } from "../../reducers/UserReducers";
import { ITodoReducer } from "../../reducers/TodoReducers";
import { useSelector } from "react-redux";
import { IState } from "../../reducers";
import ReactPaginate from "react-paginate";

const Wrapper = styled.div`
  padding: 20px;
`;

const HeaderWrapper = styled.div`
  margin-bottom: 20px;
`;

const HeaderPhoto = styled.div`
  background-image: url("https://via.placeholder.com/950x350/00fff9?text=WORKSPACE");
  border-radius: 5px 5px 0 0;
  height: 300px;
`;

const Header = styled.div`
  height: 150px;
  background-color: ${Colors.white};
  display: flex;
  border-radius: 0 0 5px 5px;
`;

const HeaderIcon = styled.img`
  width: 80px;
  margin: 20px;
`;

const HeaderDetails = styled.div`
  margin: 20px;
`;

const HeaderTitle = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
`;

const WorkspaceCard = styled.div`
  border-radius: 5px;
  display: flex;
  box-shadow: 0px 1px 3px ${Colors.gray};
  padding: 20px;
  margin: 20px 0px;
  background-color: ${Colors.white};

  div {
    display: block;
  }
`;

const WorkspaceItemsWrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const ButtonsContainer = styled.div`
  display: flex;
`;

const Button = styled("button")<{ bgColor: string; txtColor: string }>`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.txtColor};
  border: 0;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 0 10px;
`;

const ButtonIcon = styled.img`
  width: 15px;
  margin-right: 10px;

  :hover {
    cursor: pointer;
  }
`;

const InfoCard = styled.div`
  border-radius: 5px;
  box-shadow: 0px 1px 3px ${Colors.gray};
  padding: 20px;
  background-color: ${Colors.white};
  width: 100%;
  margin: 10px;
`;

const InfoCardsContainer = styled.div`
  display: flex;
  margin: 20px 0;
`;

const InfoCardIcon = styled.img`
  width: 45px;
  margin: 20px;
`;

const ResumeYourWorkWrapper = styled.div`
  color: ${Colors.blue};
`;

const YourWorkCard = styled.div`
  border-radius: 5px;
  display: flex;
  box-shadow: 0px 1px 3px ${Colors.gray};
  padding: 20px;
  margin: 20px 0px;
  background-color: ${Colors.white};
`;

const Title = styled.p`
  color: ${Colors.black};
  font-size: 20px;
`;

const CardTitle = styled.p`
  color: ${Colors.black};
  font-size: 20px;
`;

const Elements = styled.div`
  display: flex;
  margin-left: auto;
`;

const CardDetails = styled.div``;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 5px;
  margin-left: 5px;
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
    color: ${Colors.black};
  }
`;

export const PaginationContainer = styled.div`
  color: ${Colors.black};
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    li {
      float: left;
      margin: 20px;
      transition: 0.5s;
      :hover {
        transition: 0.5s;
        cursor: pointer;
        color: ${Colors.gray};
      }
    }
  }
`;

export const WorkspacePage: FC = () => {
  const comments = useSelector<IState, ICommentReducer>((state) => ({
    ...state.comments,
  }));

  const todos = useSelector<IState, ITodoReducer>((state) => ({
    ...state.todos,
  }));

  const users = useSelector<IState, IUserReducer>((state) => ({
    ...state.users,
  }));

  const [currentPage, setCurrentPage] = useState<number>(0);

  const handlePageChange = (data: any) => {
    const selected = data.selected;
    setCurrentPage(selected);
  };

  function getIdParam() {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(typeof(urlParams.get('id')));
    return urlParams.get('id');
  }

  const [phrase, setFilterPhrase] = useState("");

  const handleFilterInput = (e: ChangeEvent<HTMLInputElement>) => {
    const phrase = e.target.value;
    setFilterPhrase(phrase);
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderPhoto></HeaderPhoto>
        <Header>
          <HeaderIcon src="./media/icons/entities.svg" />
          <HeaderDetails>
            <HeaderTitle>{todos.todosList.find((todo) => String(todo.id) == getIdParam())?.title}</HeaderTitle>
            <p>
              sunt aut facere repellat provident occaecati excepturi optio
              reprehenderit quia et suscipit suscipit recusandae consequuntur
              expedita et cum reprehenderit molestiae ut ut quas totam nostrum
              rerum est autem sunt rem eveniet architecto
            </p>
          </HeaderDetails>
        </Header>
      </HeaderWrapper>
      <Title>Start working on corporate matters</Title>
      <InfoCardsContainer>
        <InfoCard>
          <InfoCardIcon src="./media/icons/entities.svg" />
          <Title>Explore your entities</Title>
          <br />
          <p>
            Take a few minutes to look at the most important elements and
            specificities of your entities.
          </p>
        </InfoCard>
        <InfoCard>
          <InfoCardIcon src="./media/icons/administration.svg" />
          <Title>Structure the ownership</Title>
          <br />
          <p>
            Get a clear view of the ownership by looking at the relations
            between individuals and entities.
          </p>
        </InfoCard>
        <InfoCard>
          <InfoCardIcon src="./media/icons/ecosystem.svg" />
          <Title>Define the calendar</Title>
          <br />
          <p>
            Prepare future events by creating detailed plans around the life of
            your entity.
          </p>
        </InfoCard>
      </InfoCardsContainer>
      <WorkspaceItemsWrapper>
        <Title>Last Updates</Title>
        <Elements>
          <FilterWrapper>
            <input type="text" placeholder="Filter by title..." onChange={handleFilterInput}></input>
          </FilterWrapper>
          <SelectWrapper>
            <select>
              <option value="followed">Followed</option>
            </select>
          </SelectWrapper>
        </Elements>
      </WorkspaceItemsWrapper>
      <ButtonsContainer>
        <Button bgColor={Colors.gray} txtColor={Colors.black}>
          All
        </Button>
        <Button bgColor={Colors.gray} txtColor={Colors.black}>
          <ButtonIcon src="./media/icons/share.svg" />
          SAS
        </Button>
        <Button bgColor={Colors.gray} txtColor={Colors.black}>
          <ButtonIcon src="./media/icons/network.svg" />
          SARL
        </Button>
        <Button bgColor={Colors.gray} txtColor={Colors.black}>
          <ButtonIcon src="./media/icons/ecosystem.svg" />
          Secondary business
        </Button>
        <Button bgColor={Colors.gray} txtColor={Colors.black}>
          <ButtonIcon src="./media/icons/bell.svg" />
          Communities
        </Button>
        <Button bgColor={Colors.gray} txtColor={Colors.black}>
          <ButtonIcon src="./media/icons/house.svg" />
          POA
        </Button>
        <Button bgColor={Colors.white} txtColor={Colors.black}>
          <ButtonIcon src="./media/icons/comments.svg" />
          Survey
        </Button>
        <Button bgColor={Colors.white} txtColor={Colors.black}>
          ...
        </Button>
      </ButtonsContainer>
      {comments.commentsList
        .slice(currentPage, currentPage + 8)
        .filter((comment) => comment.name.includes(phrase))
        .map((comment) => (
          <YourWorkCard>
            <CardDetails>
              <CardTitle>{comment.name}</CardTitle>
              <br />
              <p>{comment.body}</p>
              <br />
              <UserInfo>
                <Icon src={"./media/icons/people.svg"} />
                {
                  users.userList.find((user) => user.id === comment.postId)
                    ?.name
                }{" "}
                &#8226;
                <Icon src={"./media/icons/house.svg"} />
                Corporate &#8226; Updated 3 days ago by{" "}
                {
                  users.userList.find((user) => user.id === comment.postId)
                    ?.name
                }
              </UserInfo>
            </CardDetails>
          </YourWorkCard>
        ))}
      <PaginationContainer>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={comments.commentsList.length}
          marginPagesDisplayed={3}
          pageRangeDisplayed={9}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </PaginationContainer>
    </Wrapper>
  );
};

export default WorkspacePage;