import { Button as AriaButton } from "ariakit/button";
import styled from "styled-components";

export const Button = styled(AriaButton)`
  width: fit-content;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[4]};
  border: 0;

  &:hover {
    cursor: pointer;
  }

  &:disabled,
  &[disabled] {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;
