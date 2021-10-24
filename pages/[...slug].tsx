import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
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

export const getStaticProps: GetStaticProps<{ slug: string[] }> = async ({
  params,
}) => {
  const category = params?.slug[0];
  const tool = params?.slug[1];

  return {
    props: {},
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = categories
    .map((category) =>
      category.children
        .map((tool) => ({
          params: {
            slug: [category.slug, tool.slug],
          },
        }))
        .flat()
    )
    .flat();

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};

export default Home;
