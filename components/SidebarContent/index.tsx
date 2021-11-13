import { Box, Flex, CloseButton, BoxProps } from "@chakra-ui/react";

import { useRouter } from "next/router";
import categories from "@/data/categories";

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
        {categories.map(category => (
          <CategoryComponent key={category.id} category={category} />
        ))}
      </Flex>
    </Box>
  );
};

export default SidebarContent;
