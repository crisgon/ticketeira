import { EventLayout } from "@/layouts/EventLayout/Event";
import { EventTemplate } from "@/templates/Event/Event";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "src/@types/next";

const Event: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;

  return <EventTemplate event={{ id: id as string }} />;
};

export default Event;

Event.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <EventLayout>
      {page}
      <p>Info aleatória</p>
    </EventLayout>
  );
};
