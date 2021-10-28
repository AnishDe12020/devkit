import type { NextPage } from "next";
import Head from "next/head";
import { Heading } from "@chakra-ui/react";
import categories from "@/data/categories";

const About: NextPage = () => {
  const paths = categories
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

  console.log(paths);

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
