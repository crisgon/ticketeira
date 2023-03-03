import * as S from "./styles";

type EventLayoutProps = {
  children: React.ReactNode;
};

export function EventLayout({ children }: EventLayoutProps) {
  return (
    <>
      <S.Header>Nome do evento</S.Header>
      <S.Content>{children}</S.Content>
    </>
  );
}
