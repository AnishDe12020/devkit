import { Category } from "@/data/types";
import { Box, Heading, IconButton, useColorMode, Flex } from "@chakra-ui/react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useRouter } from "next/router";
import HomeLink from "@/components/Sidebar/HomeLink";

import CategoryComponent from "@/components/Sidebar/Category";

interface SidebarProps {
  categories: Category[];
  [x: string]: any;
}

const Sidebar = (props: SidebarProps): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();

  const router = useRouter();

  const { categories, ...otherProps } = props;

  return (
    <Box {...otherProps}>
      <Flex alignItems="center">
        <Heading>DevKit</Heading>
        <IconButton
          ml={4}
          size="md"
          onClick={toggleColorMode}
          icon={colorMode === "light" ? <FiSun /> : <FiMoon />}
          aria-label={"Toggle Color Mode"}
        />
      </Flex>
      <Flex mt={4} flexDir={"column"}>
        <HomeLink active={"/" === router.query?.slug} />
        {categories.map(category => (
          <CategoryComponent key={category.id} category={category} />
        ))}
      </Flex>
    </Box>
  );
};

export default Sidebar;
