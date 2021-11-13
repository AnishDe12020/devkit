import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import categories from "@/data/categories";
import dynamic from "next/dynamic";
import { Category, Tool } from "@/data/types";
import WithSidebar from "@/layouts/WithSidebar";

interface ToolsPageProps {
  categoryFolderName: string;
  toolFileName: string;
  toolName: string;
}

const Tools: NextPage<ToolsPageProps> = ({
  categoryFolderName,
  toolFileName,
  toolName,
}: ToolsPageProps) => {
  const ToolComponent = dynamic(
    () => import(`@/components/Tools/${categoryFolderName}/${toolFileName}`)
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

      <WithSidebar title={toolName}>
        <ToolComponent />
      </WithSidebar>
    </div>
  );
};

export const getStaticProps: GetStaticProps<
  ToolsPageProps,
  { slug: string[] }
> = async ({ params }) => {
  const categoryObject: Category = categories.find(category => {
    return category.slug === params!.slug[0];
  }) as Category;

  const categoryFolderName: string = categoryObject.directory;

  const toolObject: Tool = categoryObject.children.find(tool => {
    return tool.slug === params!.slug[1];
  }) as Tool;

  const toolFileName: string = toolObject.componentFileName;
  const toolName: string = toolObject.name;

  return {
    props: {
      categoryFolderName,
      toolFileName,
      toolName,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
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

  return {
    paths,
    fallback: false,
  };
};

export default Tools;
