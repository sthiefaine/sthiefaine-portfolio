import styled from "styled-components";

export const SVGStyled = styled.span`
  & > svg {
    stroke: ${({ theme }) => theme.colorText};
  }
`;
