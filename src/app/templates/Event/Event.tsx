import Image from "next/image";
import Link from "next/link";

import * as S from "./styles";

import partyPNG from "@/assets/party.png";

interface EventProps {
  event: {
    id: string;
  };
}

export function EventTemplate({ event }: EventProps) {
  return (
    <section>
      <S.Banner>
        <Image src={partyPNG} alt="Party" />
      </S.Banner>
    </section>
  );
}
