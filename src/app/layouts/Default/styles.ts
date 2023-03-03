import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;

export const Footer = styled.div`
  width: 100%;
  height: 50px;
  background-color: red;
  color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`;
