import type { NextPage } from "next";
import Head from "next/head";
import { Heading, IconButton, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

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
      <IconButton
        onClick={toggleColorMode}
        icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        variant={"ghost"}
        ml={8}
        aria-label={"Toggle Color Mode"}
      />
    </div>
  );
};

export default Home;
