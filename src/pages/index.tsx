import { GetServerSideProps } from "next";

import HomeTemplate from "@/templates/Home/Home";
import { DefaultLayout } from "@/layouts/Default/Default";
import { NextPageWithLayout } from "src/@types/next";
import { api } from "@/api";

interface IndexProps {
  animes: any;
}

const Index: NextPageWithLayout<IndexProps> = ({ animes }) => {
  console.log(animes);
  return <HomeTemplate data={animes} />;
};

export default Index;

Index.getLayout = function getLayout(page: React.ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api("/top/anime");

  const animes = response.data.data.map((anime: any) => anime.title);

  return {
    props: {
      animes,
    },
  };
};
