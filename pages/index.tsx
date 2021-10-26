import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "@/components/Sidebar";
import categories from "@/data/categories";
import HomeComponent from "@/components/HomeComponent";
import { Flex } from "@chakra-ui/react";

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

      <Flex ml={8} mt={10}>
        <Sidebar w="20vw" categories={categories} />

        <HomeComponent w="80vw" />
      </Flex>
    </div>
  );
};

// export const getStaticProps = async () => {
//   return {
//     props: {},
//   };
// };

export default Home;
