import styled from "styled-components";

export const ButtonXSStyled = styled.button`
  background: ${({ theme }) => theme.rowColor};
  color: ${({ theme }) => theme.colorText};

  width: 3rem;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 1rem;

  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: baseline;
  font-size: 1.1rem;
`;
