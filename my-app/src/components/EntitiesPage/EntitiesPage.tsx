import { FC, useState, ChangeEvent } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { Filter } from "../Filter/Filter";
import { useSelector } from "react-redux";
import { IState } from "../../reducers";
import { ITodoReducer } from "../../reducers/TodoReducers";
import { ISingleTodo } from "../../entities/ISingleTodo";
import ReactPaginate from "react-paginate";

const Wrapper = styled.div`
  width: 100%;
  margin: 20px;
  transition: 0.2s;

  &.expanded {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    margin: 0;
    overflow: auto;
    height: 100%;
    background-color: ${Colors.white};
    transition: 0.2s;
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Header = styled.div`
  color: ${Colors.black};
  display: flex;
  justify-content: center;
  font-size: 22px;
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 15px;
  margin-top: 20px;

  &.list {
    display: block;
  }
`;

const Card = styled.div`
  display: flex;
  box-shadow: 0px 1px 3px ${Colors.black};
  padding: 20px;
  margin: 3px 0;
  border-radius: 5px;
  background-color: ${Colors.white};

  div {
    display: block;
  }
`;

const Title = styled.p`
  color: ${Colors.black};
  font-size: 20px;
`;

const CardDetails = styled.div`
  display: table-cell;
  position: relative;
  padding: 10px;
  width: 100%;
  color: ${Colors.black};
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

const Select = styled.div`
  padding: 10px 15px 10px 10px;
  border: 0px;
  border-radius: 3px;
  background-color: ${Colors.gray};
  color: ${Colors.black};
  display: flex;
  justify-content: center;

  :hover {
    cursor: pointer;
  }
`;

const SelectBorder = styled(Select)`
  border: 2px solid ${Colors.gray};
  background-color: ${Colors.white};
  border-radius: 3px;
`;

const SelectLeft = styled(Select)`
  margin: 0;
  background-color: ${Colors.gray};
`;

const Icon = styled.img`
  width: 20px;
  margin: auto 10px;

  :hover {
    cursor: pointer;
  }
`;

const SmallIcon = styled.img`
  width: 10px;
  margin: auto 10px;
`;

const MosaicButton = styled.div`
  padding: 10px 15px 10px 10px;
  border: 0px;
  border-radius: 3px;
  background-color: ${Colors.gray};
  color: ${Colors.blue};
  display: flex;
  justify-content: center;
  margin-left: auto;
  transition: 0.1s;

  :hover {
    cursor: pointer;
    background-color: ${Colors.gray};
    transition: 0.1s;
  }
`;

const ListButton = styled.div`
  padding: 10px 15px 10px 10px;
  border: 0px;
  border-radius: 3px;
  background-color: ${Colors.gray};
  color: ${Colors.black};
  display: flex;
  justify-content: right;
  transition: 0.1s;

  :hover {
    cursor: pointer;
    background-color: ${Colors.gray};
    transition: 0.1s;
  }
`;

const VerticalLine = styled.div`
  border-left: 1px solid ${Colors.gray};
  height: 30px;
  margin: 0px 10px;
`;

const Search = styled.input`
  padding: 10px;
  border: 1px solid ${Colors.gray};
  border-radius: 5px;
  margin-left: auto;
`;

const FiltersContainer = styled.div`
  max-height: 0;
  transition: 0.1s;

  &.open {
    transition: 0.1s;
    max-height: 230px;
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

export const EntitiesPage: FC = () => {
  const todos = useSelector<IState, ITodoReducer>((state) => ({
    ...state.todos,
  }));

  const [filters, setFilters] = useState(false);
  const [list, setList] = useState(false);
  const [sort, setSort] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [phrase, setFilterPhrase] = useState("");

  const showFilters = () => {
    setFilters(function changeValue(value) {
      return !value;
    });
  };

  const useList = () => {
    setList(function changeValue() {
      return true;
    });
  };

  const useMosaic = () => {
    setList(function changeValue() {
      return false;
    });
  };

  const handlePageChange = (data: any) => {
    const selected = data.selected;
    setCurrentPage(selected);
  };

  const handleFilterInput = (e: ChangeEvent<HTMLInputElement>) => {
    const phrase = e.target.value;
    setFilterPhrase(phrase);  
  };
  
  function getSortedTodos(array: any): ISingleTodo[] {
    if (sort) {
      return array.sort((a: ISingleTodo, b: ISingleTodo) => a.title.localeCompare(b.title));
    } else {
      return array.sort((b: ISingleTodo, a: ISingleTodo) => a.title.localeCompare(b.title));
    }
  }

  const handleSortClick = () => {
    setSort(function changeValue(value) {
      return !value;
    });
  };

  const copyURLToClipboard = () => {
    var dummy = document.createElement('input'),
    text = window.location.href;

    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document!.body.removeChild(dummy);

    alert(`Current page URL has been copied`)
  }

  return (
    <Wrapper >
      <HeaderWrapper>
        <Header>Entities</Header>
        <Icon src="../media/icons/settings2.svg"></Icon>
        <MosaicButton onClick={useMosaic}>
          <Icon src="../media/icons/mosaic.svg"></Icon>
          Mosaic
        </MosaicButton>
        <ListButton>
          <Icon onClick={useList} src="../media/icons/list.svg"></Icon>
        </ListButton>
      </HeaderWrapper>
      <HeaderWrapper>
        <SelectLeft>
          <Icon src="../media/icons/signal.svg"></Icon>
          All
          <SmallIcon src="../media/icons/arrow-down.svg"></SmallIcon>
        </SelectLeft>
        <Icon src="../media/icons/more.svg"></Icon>
        <VerticalLine />
        <Icon src="../media/icons/sort.svg" onClick={handleSortClick}></Icon>
        <span>Sort</span>
        <Icon onClick={showFilters} src="../media/icons/filter.svg"></Icon>
        <span>Filters</span>
        <VerticalLine />
        <Icon src="../media/icons/expand.svg"></Icon>
        <VerticalLine />
        <Icon src="../media/icons/share.svg" onClick={copyURLToClipboard}></Icon>
        <span>Share</span>
        <Search
          placeholder="Search by title..."
          onChange={handleFilterInput}
        ></Search>
        <VerticalLine />
        <SelectBorder>
          <Icon src="../media/icons/signal.svg"></Icon>
          Followed
          <SmallIcon src="../media/icons/arrow-down.svg"></SmallIcon>
        </SelectBorder>
      </HeaderWrapper>
      <FiltersContainer className={filters ? "open" : ""}>
        {filters && <Filter />}  
      </FiltersContainer>
      <CardsWrapper className={list ? "list" : ""}>
        {getSortedTodos(todos.todosList.slice(currentPage, currentPage + 30))
          .filter((todo) => todo.title.includes(phrase))
          .map((todo, index) => (
            <Card>
              <Image src="https://via.placeholder.com/150x150/e4e6a8?text=entity" />
              <CardDetails>
                <Title>{todo.title.slice(0, 35)}</Title>
                <CardFooter>
                  <span>Caracas 1050, Distrito Capital, Venezuela</span>
                </CardFooter>
              </CardDetails>
            </Card>
          ))}
      </CardsWrapper>
      <PaginationContainer>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={todos.todosList.length}
          marginPagesDisplayed={3}
          pageRangeDisplayed={3}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </PaginationContainer>
    </Wrapper>
  );
};

export default EntitiesPage;