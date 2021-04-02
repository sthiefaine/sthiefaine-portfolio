import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: block;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
  background: ${({ theme }) => theme.HeaderColor};
  color: ${({ theme }) => theme.colorText};

  &.active {
    box-shadow: 2px 7px 19px -5px rgb(0 0 0 / 21%);
    -webkit-boxshadow: 2px 7px 19px rgba(0, 0, 0, 0.21);
    -moz-boxshadow: 2px 7px 19px -5px rgba(0, 0, 0, 0.21);
  }
`;
