import { FC } from "react";
import styled from "styled-components";
import useDropdown from "react-dropdown-hook";
import ExpandedMenu from "./ExpandedMenu";
import { Colors } from "../../styledHelpers/Colors";
import { Link } from "react-router-dom";

const NavWrapper = styled.div`
  background-color: ${Colors.white};
  margin-bottom: 15px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  box-shadow: 0px 1px 3px ${Colors.gray};
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin: 10px;
`;

const SmallIcon = styled.img`
  margin: 10px;
`;

const MenuArrowIcon = styled.img`
  margin: 10px;
  margin-left: 185px;
`;

const NavMenu = styled.p`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const NavMenuContainer = styled.div`
  color: ${Colors.black};
  font-size: 20px;

    a {
    text-decoration: none;
    color: ${Colors.black};
    transition: 0.2s;

    :hover {
      color: ${Colors.blue};
      transition: 0.2s;
    }
  }
`

const SearchBoxContainer = styled.div`
  margin: auto;
  border: 1px solid ${Colors.gray};
  border-radius: 5px;
  padding: 10px;
  width: 30%;
  height: 25px;
  display: flex;
  align-items: center;
`

const SearchBoxInput = styled.input`
  border: 0;
  text-align: center;
  width: 100%;
  outline: none;
  font-size: 18px;
  color: ${Colors.gray};
`;

const Icon = styled.img`
  margin: 10px;
  width: 25px;
  height: 25px;

  :hover {
    cursor: pointer;
  }
`;

const IconContainer = styled.div`
  background-color: ${Colors.gray};
  border-radius: 50%;
  display: flex;
  padding: 5px;
  margin: 10px;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
`

export const TopNav: FC = () => {
  const [
    wrapperRef,
    dropdownOpen,
    toggleDropdown,
    closeDropdown,
  ] = useDropdown();

  return (  
    <NavWrapper>
      <Link to="/test">
        <Logo src="./logo192.png" />
      </Link>
      <NavMenuContainer ref={wrapperRef}>
      {dropdownOpen && <>{<ExpandedMenu />}</>}
      <NavMenu>
      <SmallIcon src="./media/icons/house.png" />
      <div onClick={toggleDropdown}>
        <span>Menu</span>
        <MenuArrowIcon src="./media/icons/arrow-down.svg" />
      </div>
      </NavMenu>
      </NavMenuContainer>
      <SearchBoxContainer>
      <SearchBoxInput placeholder="Search Legalcluster" />
      <SmallIcon src="./media/icons/search.svg" />
      </SearchBoxContainer>
      <IconsContainer>
      <Link to="/test">
        <Icon src="./media/icons/house.svg" />
      </Link>
      <Link to="/test">
        <IconContainer>
          <Icon src="./media/icons/comments.svg" />
        </IconContainer>
      </Link>
      <Link to="/test">
        <IconContainer>
          <Icon src="./media/icons/bell.svg" />
        </IconContainer>
      </Link>
      </IconsContainer>
    </NavWrapper>
  );
};

export default TopNav;
