import styled from "styled-components";

export const Home = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray100};

  p {
    width: 500px;
  }
`;
