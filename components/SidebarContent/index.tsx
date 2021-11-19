import {
  Box,
  Flex,
  CloseButton,
  Input,
  BoxProps,
  useBreakpointValue,
} from "@chakra-ui/react";

import { useRouter } from "next/router";
import { useState, RefObject, ChangeEvent } from "react";
import categories from "@/data/categories";
import tools from "@/data/tools";
import Fuse from "fuse.js";

import CategoryComponent from "@/components/SidebarContent/CategoryComponent";
import SidebarLink from "@/components/SidebarContent/SidebarLink";
import ChangeColorModeButton from "../Common/ChangeColorModeButton";

interface SidebarContentProps extends BoxProps {
  onClose: () => void;
  closeButtonRef?: RefObject<HTMLButtonElement>;
}

const SidebarContent = ({
  onClose,
  closeButtonRef,
  ...otherProps
}: SidebarContentProps): JSX.Element => {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>): void => {
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
        mr={6}
        mt={2}
      >
        <ChangeColorModeButton
          aria-label={"Toggle Color Mode"}
          size={useBreakpointValue({ base: "sm", md: "md" })}
          mr={2}
        />
        <CloseButton onClick={onClose} ref={closeButtonRef} />
      </Flex>
      <Flex mt={2} flexDir={"column"}>
        <SidebarLink
          href="/"
          active={undefined === router.query?.slug}
          ml={0}
          fontSize={["lg", "xl"]}
          onClose={onClose}
        >
          Home
        </SidebarLink>
        <Input
          value={query}
          onChange={handleQueryChange}
          mt={{ base: 2, md: 4 }}
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
                onClose={onClose}
              >
                {tool.item.name}
              </SidebarLink>
            ))
          : categories.map(category => (
              <CategoryComponent
                key={category.id}
                category={category}
                onClose={onClose}
              />
            ))}
      </Flex>
    </Box>
  );
};

export default SidebarContent;
