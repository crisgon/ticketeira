import Image from "next/image";
import Link from "next/link";

import * as S from "./styles";
import partyPNG from "@/assets/party.png";
import { Box } from "@/components/Box/Box";
import { Button } from "@/components/Button/Button";

interface HomeTemplateProps {
  data: any;
}

export default function HomeTemplate({ data }: HomeTemplateProps) {
  return (
    <S.Home>
      <Button style={{ margin: "1rem" }}>
        <Link href="/event/1">Baile da Santinha</Link>
      </Button>

      <Button style={{ margin: "1rem" }}>
        <Link href="/event/2">Rock in Rio</Link>
      </Button>

      <Box>
        <Image src={partyPNG} alt="Party" width={200} />
        <p style={{ width: "200px" }}>
          Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius.
          Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Em pé
          sem cair, deitado sem dormir, sentado sem cochilar e fazendo
          pose.Praesent vel viverra nisi. Mauris aliquet nunc non turpis
          scelerisque, eget.Per aumento de cachacis, eu reclamis.
        </p>
      </Box>

      <h3>Api Response</h3>

      {data.map((item: any) => (
        <p key={item}>{item}</p>
      ))}
    </S.Home>
  );
}
