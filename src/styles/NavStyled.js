import styled from "styled-components";

export const NavStyled = styled.nav`
  display: flex;
  position: relative;
  height: auto;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  margin: 0 auto;

  & > .nav__items {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;

    & > .nav__item {
      margin: 0 0.5rem;
      color: #636363;
      cursor: pointer;
    }
  }
`;
