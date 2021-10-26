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

interface SidebarProps {
  categories: Category[];
}

const Sidebar = ({ categories }: SidebarProps): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box ml={8}>
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
      <Box mt={4}>
        {categories.map((category) => (
          <Box mt={2} key={category.id}>
            <VStack align="start">
              <Text fontSize="3xl" fontWeight="semibold">
                {category.name}
              </Text>
              {category.children.map((tool) => (
                <SidebarLink
                  key={tool.id}
                  href={`/${category.slug}/${tool.slug}`}
                  active={tool.slug === "/" ? true : false}
                >
                  {tool.name}
                </SidebarLink>
              ))}
            </VStack>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
