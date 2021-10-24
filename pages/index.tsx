import type { NextPage } from "next";
import Head from "next/head";
import { Heading, IconButton, useColorMode } from "@chakra-ui/react";
import { FiSun, FiMoon } from "react-icons/fi";
import Sidebar from "@/components/Sidebar";
import categories from "@/data/categories";

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
        icon={colorMode === "light" ? <FiSun /> : <FiMoon />}
        variant={"ghost"}
        ml={8}
        aria-label={"Toggle Color Mode"}
      />
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
