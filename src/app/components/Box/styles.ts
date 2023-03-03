import styled from "styled-components";

export const BoxContainer = styled.div`
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.gray900};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: ${({ theme }) => theme.space[2]};
`;
