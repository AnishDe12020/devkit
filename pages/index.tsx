import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "@/components/Sidebar";
import categories from "@/data/categories";
import components from "@/data/components";

const Home: NextPage = () => {
  const ToolComponent = components[0].component;
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

      <ToolComponent />
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default Home;
