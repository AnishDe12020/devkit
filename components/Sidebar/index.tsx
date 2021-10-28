import { Category } from "@/data/types";
import {
  Box,
  Text,
  Heading,
  IconButton,
  useColorMode,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { FiSun, FiMoon } from "react-icons/fi";
import SidebarLink from "@/components/Sidebar/SidebarLink";
import { useRouter } from "next/router";
import HomeLink from "@/components/Sidebar/HomeLink";

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
        <HomeLink />
        {categories.map(category => (
          <Box mt={2} key={category.id}>
            <VStack align="start">
              <Text fontSize="3xl" ml={2} fontWeight="semibold">
                {category.name}
              </Text>
              {category.children.map(tool => (
                <SidebarLink
                  key={tool.id}
                  href={`/${category.slug}/${tool.slug}`}
                  active={tool.slug === router.query?.slug?.[1]}
                >
                  {tool.name}
                </SidebarLink>
              ))}
            </VStack>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Sidebar;
