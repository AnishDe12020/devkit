import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Sidebar from "@/components/Sidebar";
import categories from "@/data/categories";
import dynamic from "next/dynamic";
import capitalize from "@/utils/capitalize";
import { Flex, Box } from "@chakra-ui/react";

interface ToolsPageProps {
  category: string;
  tool: string;
}

const Tools: NextPage<ToolsPageProps> = ({ category, tool }) => {
  const ToolComponent = dynamic(
    () => import(`../components/Tools/${category}/${tool}`)
  );

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
        <Box w="80vw">
          <ToolComponent />
        </Box>
      </Flex>
    </div>
  );
};

export const getStaticProps: GetStaticProps<
  ToolsPageProps,
  { slug: string[] }
> = async ({ params }) => {
  const category = capitalize(params!.slug[0]);
  const tool = capitalize(params!.slug[1]);

  return {
    props: {
      category,
      tool,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  let paths = categories
    .map(category =>
      category.children
        .map(tool => ({
          params: {
            slug: [category.slug, tool.slug],
          },
        }))
        .flat()
    )
    .flat();

  return {
    paths,
    fallback: false,
  };
};

export default Tools;
