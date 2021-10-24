import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "@/components/Sidebar";
import categories from "@/data/categories";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>DevKit</title>
        <meta
          name="description"
          content="Tools for developers, by developers"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar categories={categories} />
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default Home;
