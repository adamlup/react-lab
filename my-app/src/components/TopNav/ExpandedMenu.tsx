import { FC, useState, ChangeEvent } from "react";
import useDropdown from "react-dropdown-hook";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Colors } from "../../styledHelpers/Colors";

const Wrapper = styled.div`
  position: absolute;
  background-color: ${Colors.white};
  border-radius: 0 0 4px 4px;
  border: solid ${Colors.gray};
  box-shadow: 0px 1px 3px ${Colors.gray};
  border-width: 0 1px 1px 1px;
  width: 300px;
  height: 25px;
`;

const SectionTitle = styled.span`
  font-size: 15px;
`;

const FilterWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  justify-content: center;
  background-color: ${Colors.white};
`;

const OptionsWrapper = styled.div`
  height: 350px;
  overflow: auto;
  padding: 10px;
  background-color: ${Colors.white};
`;

const AccountOptionsWrapper = styled.div`
  padding: 10px;
`;

const LogoutButtonWrapper = styled.span`
  position: relative;

  img {
    position: absolute;
    margin-top: 23px;
    margin-left: 90px;
  }
`;

const LogoutButton = styled.span`
  display: flex;
  justify-content: center;
  padding: 20px;
`;


const StyledButton = styled.button`
  width: 300px;
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border: none;

  img{
    align-items: right;
  }
`;

const StyledUl = styled.ul`
  width: 138px;
  padding: 1px 6px;
  background: lightgrey;
  border-radius: 15px;
  margin-top: 5px;
`;

const StyledLi = styled.li`
  padding: 7px;
  display: flex;
`;

export const ExpandedMenu: FC = () => {
  const [
    wrapperRef,
    dropdownOpen,
    toggleDropdown,
    closeDropdown,
  ] = useDropdown();

  const [inputText, setInputText] = useState<string>('');

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text);
  }

  return (
    <Wrapper>
      <div ref={wrapperRef}>
         <div onClick={toggleDropdown}>
          <StyledButton>
            <p>Home</p>
            <img src="./media/icons/arrow-down.png" alt="arrow down" />
          </StyledButton>
         </div>
         {dropdownOpen && (
           <>
      <FilterWrapper>
        <input type="text" value={inputText} onChange={inputHandler} placeholder="Filter..."></input>
      </FilterWrapper>
      <Router>
      <OptionsWrapper>
        <SectionTitle>Platform</SectionTitle>
          <StyledUl>
            <StyledLi>
            {'Home'.toLowerCase().includes(inputText.toLowerCase()) &&
              <Link to="/">
                <img src="./media/icons/house.svg" />
                Home
              </Link>}
            </StyledLi>
            <StyledLi>
            {'Publications'.toLowerCase().includes(inputText.toLowerCase()) &&
              <Link to="/test">
                <img src="./media/icons/publications.svg" />
                Publications
              </Link>}
            </StyledLi>
            <StyledLi>
            {'People'.toLowerCase().includes(inputText.toLowerCase()) &&
              <Link to="/test">
                <img src="./media/icons/people.svg" />
                People
              </Link>}
            </StyledLi>
            <StyledLi>
            {'Entities'.toLowerCase().includes(inputText.toLowerCase()) &&
              <Link to="/entities">
                <img src="./media/icons/entities.svg" />
                Entities
              </Link>}
            </StyledLi>
            <StyledLi>
            {'Administration'.toLowerCase().includes(inputText.toLowerCase()) &&
              <Link to="/test">
                <img src="./media/icons/administration.svg" />
                Administration
              </Link>}
            </StyledLi>
          </StyledUl>
          <SectionTitle>Workspaces</SectionTitle>
            <StyledLi>
            {'Client contract'.toLowerCase().includes(inputText.toLowerCase()) &&
              <Link to="/workspace">
                <img src="./media/icons/entities2.svg" />
                Client contract
              </Link>}
            </StyledLi>
            <StyledLi>
            {'Supplier contract'.toLowerCase().includes(inputText.toLowerCase()) &&
              <Link to="/workspace">
                <img src="./media/icons/house2.svg" />
                Supplier contract
              </Link>}
            </StyledLi>
            <StyledLi>
            {'Corporate'.toLowerCase().includes(inputText.toLowerCase()) &&
              <Link to="/workspace">
                <img src="./media/icons/entities.svg" />
                Corporate
              </Link>}
            </StyledLi>
            <StyledLi>
            {'Group Norms'.toLowerCase().includes(inputText.toLowerCase()) &&
              <Link to="/workspace">
                <img src="./media/icons/house.svg" />
                Group Norms
              </Link>}
            </StyledLi>
            <StyledLi>
              {'Real estate contracts'.toLowerCase().includes(inputText.toLowerCase()) &&
              <Link to="/workspace">
                <img src="./media/icons/house.svg" />
                Real estate contracts
              </Link>}
            </StyledLi>
            </OptionsWrapper>
            <AccountOptionsWrapper>
              <SectionTitle>Account</SectionTitle>
              <StyledLi>
              {'User name'.toLowerCase().includes(inputText.toLowerCase()) &&
                <Link to="/profile">
                  <img src="./media/icons/house.svg" />
                  User name
                </Link>}
              </StyledLi>
              <StyledLi>
              {'Privacy'.toLowerCase().includes(inputText.toLowerCase()) &&
                <Link to="/profile">
                  <img src="./media/icons/privacy.svg" />
                  Privacy
                </Link>}
              </StyledLi>
              <StyledLi>
              {'Settings'.toLowerCase().includes(inputText.toLowerCase()) &&
                <Link to="/profile">
                  <img src="./media/icons/settings.svg" />
                  Settings
                </Link>}
              </StyledLi>
            </AccountOptionsWrapper>
              <LogoutButtonWrapper>
                <img src="./media/icons/logout.svg" />
                <LogoutButton>
                  <Link to="/test">Logout</Link>
                </LogoutButton>
              </LogoutButtonWrapper>
              </Router>
              
              </>
              )}
        </div>
              <div onClick={closeDropdown}></div>
    </Wrapper>
  );
};

export default ExpandedMenu;