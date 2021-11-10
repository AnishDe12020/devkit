import { Category } from "@/data/types";
import {
  Box,
  Heading,
  IconButton,
  Flex,
  Drawer,
  DrawerBody,
  DrawerHeader,
  useDisclosure,
  useColorMode,
  useBreakpointValue,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
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

  const { isOpen, onOpen, onClose } = useDisclosure();

  type SideBarType = "mobile" | "desktop" | undefined;

  const sideBarType: SideBarType = useBreakpointValue({
    base: "mobile",
    md: "desktop",
    default: "desktop",
  });

  return sideBarType === "desktop" ? (
    <Box {...otherProps}>
      <Flex alignItems="center">
        <Heading>DevKit</Heading>
        <IconButton
          ml={4}
          onClick={toggleColorMode}
          icon={colorMode === "light" ? <FiSun /> : <FiMoon />}
          aria-label={"Toggle Color Mode"}
        />
      </Flex>
      <Flex mt={4} flexDir={"column"}>
        <HomeLink active={undefined === router.query?.slug} />
        {categories.map(category => (
          <CategoryComponent key={category.id} category={category} />
        ))}
      </Flex>
    </Box>
  ) : (
    <>
      <IconButton
        icon={<FiMenu />}
        aria-label="Open Sidebar"
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} onClose={onClose} placement="left" size="full">
        <DrawerOverlay />
        <DrawerContent>
          <Box ml={4} mt={4}>
            <Flex alignItems="center" justifyContent="space-between">
              <Flex>
                <Heading>DevKit</Heading>
                <IconButton
                  ml={2}
                  onClick={toggleColorMode}
                  icon={colorMode === "light" ? <FiSun /> : <FiMoon />}
                  aria-label={"Toggle Color Mode"}
                />
              </Flex>

              <IconButton
                mr={4}
                icon={<FiX />}
                aria-label="Close Drawer"
                onClick={onClose}
              />
            </Flex>
            <Flex mt={4} flexDir={"column"}>
              <HomeLink active={undefined === router.query?.slug} />
              {categories.map(category => (
                <CategoryComponent key={category.id} category={category} />
              ))}
            </Flex>
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
