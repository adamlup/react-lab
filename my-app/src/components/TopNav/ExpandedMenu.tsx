import { FC } from "React";
import useDropdown from "react-dropdown-hook";
import styled from "styled-components";

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

  return (
    <div>
      <div ref={wrapperRef}>
        <div onClick={toggleDropdown}>
          <button style={styledButton}>
            <p>Home</p>
            <img src="./media/icons/arrow-down.png" alt="arrow down" />
          </button>
        </div>
        {dropdownOpen && (
          <>
            {
              <StyledUl>
                <StyledLi>
                  <StyledLink>1</StyledLink>
                </StyledLi>
                <StyledLi>
                  <StyledLink>2</StyledLink>
                </StyledLi>
                <StyledLi>
                  <StyledLink>3</StyledLink>
                </StyledLi>
              </StyledUl>
            }
          </>
        )}
      </div>
      <div onClick={closeDropdown}></div>
    </div>
  );
};