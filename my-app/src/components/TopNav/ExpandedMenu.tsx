import React, { ChangeEvent, FC, useState } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  position: absolute;
  background-color: ${Colors.white};
  border-radius: 0 0 4px 4px;
  border: solid ${Colors.gray};
  box-shadow: 0px 1px 3px ${Colors.gray};
  border-width: 0 1px 1px 1px;
  margin: 60px 0 0 0;
  width: 300px;
  z-index: 99;

  ul {
    li {
      padding: 7px;
      display: flex;
    }
  }

  img {
    margin-right: 15px;
  }
`;

const SectionTitle = styled.span`
  font-size: 15px;
`;

const FilterWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  align-items: center;
  justify-content: center;

  input {
    width: 100%;
    padding: 10px;
    margin: 10px;
    border: 1px solid ${Colors.gray};
    border-radius: 5px;
    outline: none;
  }
`;

const OptionsWrapper = styled.div`
  height: 350px;
  overflow: auto;
  padding: 10px;
`;

const AccountOptionsWrapper = styled.div`
  border-top: 1px solid ${Colors.gray};
  border-bottom: 1px solid ${Colors.gray};
  padding: 10px;
`;

const LogoutButtonWrapper = styled.span`
  position: relative;
  display: flex;
  align-items: center;

  img {
    margin-left: 70px;
    padding: 20px 0px 20px 20px;
  }
`;

const LogoutButton = styled.span`
  justify-content: center;
`;

export const ExpandedMenu: FC = () => {
  const [inputText, setInputText] = useState<string>("");

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text);
  };

  return (
    <Wrapper>
      <FilterWrapper>
        <input
          type="text"
          value={inputText}
          onChange={inputHandler}
          placeholder="Filter..."
        ></input>
      </FilterWrapper>
      <OptionsWrapper>
        <SectionTitle>Platform</SectionTitle>
        <ul>
          {"Home".toLowerCase().includes(inputText.toLowerCase()) && (
            <li>
              <Link to="/">
                <img src="./media/icons/house.svg" />
                Home
              </Link>
            </li>
          )}
          {"Publications".toLowerCase().includes(inputText.toLowerCase()) && (
            <li>
              <Link to="/test">
                <img src="./media/icons/publications.svg" />
                Publications
              </Link>
            </li>
          )}
          {"People".toLowerCase().includes(inputText.toLowerCase()) && (
            <li>
              <Link to="/test">
                <img src="./media/icons/people.svg" />
                People
              </Link>
            </li>
          )}
          {"Entities".toLowerCase().includes(inputText.toLowerCase()) && (
            <li>
              <Link to="/entities">
                <img src="./media/icons/entities.svg" />
                Entities
              </Link>
            </li>
          )}
          {"Administration".toLowerCase().includes(inputText.toLowerCase()) && (
            <li>
              <Link to="/test">
                <img src="./media/icons/administration.svg" />
                Administration
              </Link>
            </li>
          )}
        </ul>
        <SectionTitle>Workspaces</SectionTitle>
        <ul>
          {"Client contract".toLowerCase().includes(inputText.toLowerCase()) && (
            <li>
              <Link to="/workspace">
                <img src="./media/icons/entities2.svg" />
                Client contract
              </Link>
            </li>
          )}
          {"Supplier contract".toLowerCase().includes(inputText.toLowerCase()) && (
            <li>
              <Link to="/workspace">
                <img src="./media/icons/house2.svg" />
                Supplier contract
              </Link>
            </li>
          )}
          {"Corporate".toLowerCase().includes(inputText.toLowerCase()) && (
            <li>
              <Link to="/workspace">
                <img src="./media/icons/entities.svg" />
                Corporate
              </Link>
            </li>
          )}
          {"Group Norms".toLowerCase().includes(inputText.toLowerCase()) && (
            <li>
              <Link to="/workspace">
                <img src="./media/icons/house.svg" />
                Group Norms
              </Link>
            </li>
          )}
          {"Real estate contracts".toLowerCase().includes(inputText.toLowerCase()) && (
            <li>
              <Link to="/workspace">
                <img src="./media/icons/house.svg" />
                Real estate contracts
              </Link>
            </li>
          )}
        </ul>
      </OptionsWrapper>
      <AccountOptionsWrapper>
        <SectionTitle>Account</SectionTitle>
        <ul>
          {"Profile".toLowerCase().includes(inputText.toLowerCase()) && (
            <li>
              <Link to="/profile">
                <img src="./media/icons/house.svg" />
                User name
              </Link>
            </li>
          )}
          {"Privacy".toLowerCase().includes(inputText.toLowerCase()) && (
            <li>
              <Link to="/profile">
                <img src="./media/icons/privacy.svg" />
                Privacy
              </Link>
            </li>
          )}
          {"Settings".toLowerCase().includes(inputText.toLowerCase()) && (
            <li>
              <Link to="/profile">
                <img src="./media/icons/settings.svg" />
              </Link>
              Settings
            </li>
          )}
        </ul>
      </AccountOptionsWrapper>
      {"Logout".toLowerCase().includes(inputText.toLowerCase()) && (
        <LogoutButtonWrapper>
          <img src="./media/icons/logout.svg" />
          <LogoutButton>
            <Link to="/test">Logout</Link>
          </LogoutButton>
        </LogoutButtonWrapper>
      )}
    </Wrapper>
  );
};
export default ExpandedMenu;
