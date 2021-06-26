import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { Link } from "react-router-dom";
import { IUserReducer } from "../../reducers/UserReducers";
import { useSelector } from "react-redux";
import { IState } from "../../reducers";

const LeftMenuWrapper = styled.div`
  display: block;
  margin: 20px;
  color: ${Colors.blue};
`;

const Panel = styled.div`
  margin-bottom: 15px;
  border-radius: 5px;
  width: 270px;
  display: block;
  text-align: center;
  background-color: ${Colors.white};
  box-shadow: 0px 1px 3px ${Colors.gray};
`;

const MenuOptionsWrapper = styled.div`
  text-align: left;
  font-size: 20px;

  ul {
    li {
      display: flex;
      align-items: center;
      padding: 5px;
      a {
        color: ${Colors.black};
        text-decoration: none;
        transition: 0.2s;

        :hover {
          color: ${Colors.blue};
          transition: 0.2s;
        }
      }
    }
  }
`;

const UserInfoContainer = styled.div`

`

const UserImage = styled.img`
  width: 75px;
  margin: 10px;
  border-radius: 50%;
`;

const UserName = styled.span`
  color: ${Colors.black};
  font-size: 20px;
`;

const UserJobTitle = styled.p`
  color: ${Colors.gray};
  font-size: 15px;
`;

const Line = styled.hr`
  background-color: ${Colors.gray};
  color: ${Colors.gray};
  width: 95%;
  height: 1px;
  border-width: 0px;
`;

const MenuIcon = styled.img`
  margin: 10px;
`;

const UserMenuIcon = styled.img`
  border: 1px solid ${Colors.gray};
  padding: 5px 15px;
  border-radius: 5px;
  margin: 10px;
  margin-left: auto;
  box-shadow: 0px 1px 3px ${Colors.gray};
`;

export const LeftMenu: FC = () => {
  const users = useSelector<IState, IUserReducer>((state) => ({
    ...state.users,
  }));
  
  return (
    <LeftMenuWrapper>
      <Panel>
        <UserImage src="https://via.placeholder.com/200/b02631?text=profile+pic" />
        <Link to="/profile" >
          <UserInfoContainer>
          <UserName>{users.userList[0]?.name}</UserName>
          <UserJobTitle>{users.userList[0]?.company.name}</UserJobTitle>
          </UserInfoContainer>
        </Link>
        <Line />
        <MenuOptionsWrapper>
          <ul>
            <li>
              <MenuIcon src="./media/icons/network.png" />
              <Link to="/test">Your Network</Link>
              <UserMenuIcon src="./media/icons/user-plus.svg" />
            </li>
            <li>
              <MenuIcon src="./media/icons/publications.svg" />
              <Link to="/test">Your Publications</Link>
              <UserMenuIcon src="./media/icons/plus.svg" />
            </li>
          </ul>
        </MenuOptionsWrapper>
      </Panel>
      <MenuOptionsWrapper>
        <ul>
          <li>
            <MenuIcon src="./media/icons/publications.svg" />
            <Link to="/test">Publications</Link>
          </li>
          <li>
            <MenuIcon src="./media/icons/ecosystem.svg" />
            <Link to="/test">Ecosystem</Link>
          </li>
          <li>
            <MenuIcon src="./media/icons/entities.svg" />
            <Link to="/entities">Entities</Link>
          </li>
        </ul>
      </MenuOptionsWrapper>
    </LeftMenuWrapper>
  );
};

export default LeftMenu;