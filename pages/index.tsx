import type { NextPage } from "next";
import Head from "next/head";
import { Heading } from "@chakra-ui/react";

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

      <Heading>DevKit</Heading>
    </div>
  );
};

export default Home;
