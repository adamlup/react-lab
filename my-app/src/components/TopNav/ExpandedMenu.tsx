import { FC, useState, ChangeEvent } from "react";
import useDropdown from "react-dropdown-hook";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { RouteTest } from '../TopNav/RouteTest';

export const ExpandedMenu: FC = () => {
  const [
    wrapperRef,
    dropdownOpen,
    toggleDropdown,
    closeDropdown,
  ] = useDropdown();

  const StyledLink = styled.a`
    text-decoration: none;
    color: black;
  `;

  const styledButton = {
    width: "150px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "transparent",
    border: "none",
  };

  const StyledUl = styled.ul`
    width: 138px;
    padding: 1px 6px;
    background: lightgrey;
    border-radius: 15px;
    margin-top: 5px;
  `;

  const StyledLi = styled.li`
    padding: 10px 0;
    text-align: center;
  `;

  const [inputText, setInputText] = useState<string>('');

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text);
  }

  return (
    <div>
      <div ref={wrapperRef}>
        <div onClick={toggleDropdown}>
          <button style={styledButton}>
            <p>Home</p>
            <img src="./media/icons/arrow-down.png" alt="arrow down" />
          </button>
          <input type="text" value={inputText} onChange={inputHandler} />
              {'Home'.toLowerCase().includes(inputText.toLowerCase()) &&
                <div>Home</div>
              }
              {'Publication'.toLowerCase().includes(inputText.toLowerCase()) &&
                <div>Publication</div>
              }
        </div>
        {dropdownOpen && (
          <>
            {
              <Router>
              <StyledUl>
                <StyledLi>
                  <Link to ="/">Home</Link>
                </StyledLi>
                <StyledLi>
                  <Link to ="/about">about</Link>
                </StyledLi>
                <StyledLi>
                  <Link to ="/users">users</Link>
                </StyledLi>
                <StyledLi>
                  <Link to ="/test">test</Link>
                </StyledLi>
                <StyledLi>
                  <StyledLink>5</StyledLink>
                </StyledLi>
              </StyledUl>
              </Router>
            }
          </>
        )}
      </div>
      <div onClick={closeDropdown}></div>
    </div>
  );
};