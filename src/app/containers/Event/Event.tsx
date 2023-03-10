import Image from "next/image";
import Link from "next/link";

import * as S from "./styles";

import partyPNG from "@/assets/party.png";
import { useEventActions } from "./hook";

interface EventContainerProps {
  event: {
    id: string;
  };
}

export function EventContainer({ event }: EventContainerProps) {
  const { loading, handleEventActions } = useEventActions();
  return (
    <section>
      <S.Banner>
        <Image src={partyPNG} alt="Party" />
        {loading}
        <button onClick={() => handleEventActions(event)}>Button</button>
      </S.Banner>
    </section>
  );
}
