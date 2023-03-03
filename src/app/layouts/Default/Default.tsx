import * as S from "./styles";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <S.Header>Ticketeira Header xddd</S.Header>
      <S.Content>{children}</S.Content>
      <S.Footer>Rodapé</S.Footer>
    </>
  );
}
