import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";

import categories from "@/data/categories";
import dynamic from "next/dynamic";
import { Category, Tool } from "@/data/types";
import WithSidebar from "@/layouts/WithSidebar";

interface ToolsPageProps {
  categoryFolderName: string;
  toolFileName: string;
  toolName: string;
  toolDescription: string;
  path: string;
}

const Tools: NextPage<ToolsPageProps> = ({
  categoryFolderName,
  toolFileName,
  toolName,
  toolDescription,
  path,
}: ToolsPageProps) => {
  const ToolComponent = dynamic(
    () => import(`@/components/Tools/${categoryFolderName}/${toolFileName}`)
  );

  return (
    <>
      <NextSeo
        title={`${toolName} | DevKit`}
        description={toolDescription}
        openGraph={{
          url: `https://www.devkit.one/${path}`,
          title: `${toolName} | DevKit`,
          description: toolDescription,
          site_name: toolName,
          type: "website",
          locale: "en_US",
          images: [
            {
              url: "https://i.imgur.com/Opo96rx.png",
              width: 1200,
              height: 627,
              alt: "DevKit OG Image",
              type: "image/png",
            },
          ],
        }}
        twitter={{
          handle: "@DevKitHQ",
          site: "@DevKitHQ",
          cardType: "summary_large_image",
        }}
      />
      <WithSidebar title={toolName}>
        <ToolComponent />
      </WithSidebar>
    </>
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
  const toolDescription: string = toolObject.description;
  const path: string = `${params!.slug[0]}/${params!.slug[1]}`;

  return {
    props: {
      categoryFolderName,
      toolFileName,
      toolName,
      toolDescription,
      path,
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
