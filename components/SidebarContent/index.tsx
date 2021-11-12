import { Box, Flex, BoxProps } from "@chakra-ui/react";

import { useRouter } from "next/router";
import HomeLink from "@/components/SidebarContent/HomeLink";
import categories from "@/data/categories";

import CategoryComponent from "@/components/SidebarContent/Category";

const SidebarContent = (props: BoxProps): JSX.Element => {
  const router = useRouter();

  return (
    <Box
      as="nav"
      pos="fixed"
      zIndex="sticky"
      h="full"
      overflowX="hidden"
      overflowY="auto"
      ml={8}
      p={2}
      {...props}
    >
      <Flex mt={4} flexDir={"column"}>
        <HomeLink active={undefined === router.query?.slug} />
        {categories.map(category => (
          <CategoryComponent key={category.id} category={category} />
        ))}
      </Flex>
    </Box>
  );
};

export default SidebarContent;
