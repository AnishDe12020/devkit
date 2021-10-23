import type { NextPage } from "next";
import Head from "next/head";
import { Heading } from "@chakra-ui/react";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About - DevKit</title>
        <meta
          name="description"
          content="Tools for developers, by developers"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading>About Page</Heading>
    </div>
  );
};

export default About;
