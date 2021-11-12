import type { NextPage } from "next";
import Head from "next/head";
import HomeComponent from "@/components/HomeComponent";
import WithSidebar from "@/layouts/WithSidebar";

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

      <WithSidebar title="Home">
        <HomeComponent />
      </WithSidebar>
    </div>
  );
};

export default Home;
