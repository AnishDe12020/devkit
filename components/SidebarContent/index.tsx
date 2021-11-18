import { Box, Flex, CloseButton, Input, BoxProps } from "@chakra-ui/react";

import { useRouter } from "next/router";
import { useState } from "react";
import categories from "@/data/categories";
import tools from "@/data/tools";
import Fuse from "fuse.js";

import CategoryComponent from "@/components/SidebarContent/Category";
import SidebarLink from "@/components/SidebarContent/SidebarLink";

interface SidebarContentProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({
  onClose,
  ...otherProps
}: SidebarContentProps): JSX.Element => {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  const fuse = new Fuse(tools, {
    keys: ["name", "slug", "description"],
  });

  const results = fuse.search(query);

  return (
    <Box
      as="nav"
      pos="fixed"
      zIndex="sticky"
      h="full"
      overflowX="hidden"
      overflowY="auto"
      ml={{ base: 4, md: 8 }}
      p={2}
      {...otherProps}
    >
      <Flex
        display={{ base: "flex", md: "none" }}
        justifyContent="flex-end"
        mr={8}
        mt={2}
      >
        <CloseButton onClick={onClose} />
      </Flex>
      <Flex mt={4} flexDir={"column"}>
        <SidebarLink
          href="/"
          active={undefined === router.query?.slug}
          ml={0}
          fontSize="xl"
        >
          Home
        </SidebarLink>
        <Input
          value={query}
          onChange={handleQueryChange}
          mt={4}
          w={{ base: 60, md: 48 }}
          placeholder="Search Tools"
          mb={results.length > 0 ? 4 : 0}
        />
        {results.length > 0
          ? results.map(tool => (
              <SidebarLink
                active={false}
                href={`${tool.item.categorySlug}/${tool.item.slug}`}
                key={tool.refIndex}
              >
                {tool.item.name}
              </SidebarLink>
            ))
          : categories.map(category => (
              <CategoryComponent key={category.id} category={category} />
            ))}
      </Flex>
    </Box>
  );
};

export default SidebarContent;
