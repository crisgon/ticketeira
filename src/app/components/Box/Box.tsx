import * as S from "./styles";

export interface BoxProps {
  children: React.ReactNode;
}
export function Box({ children }: BoxProps) {
  return <S.BoxContainer>{children}</S.BoxContainer>;
}
