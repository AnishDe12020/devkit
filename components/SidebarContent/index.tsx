import {
  Box,
  Flex,
  CloseButton,
  BoxProps,
  useBreakpointValue,
} from "@chakra-ui/react";

import { useRouter } from "next/router";
import { RefObject } from "react";
import categories from "@/data/categories";

import CategoryComponent from "@/components/SidebarContent/CategoryComponent";
import SidebarLink from "@/components/SidebarContent/SidebarLink";
import ChangeColorModeButton from "@/components/Common/ChangeColorModeButton";
import Socials from "@/components/Common/Socials";
import SearchModal from "@/components/SearchModal";

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
        alignItems="center"
        mr={6}
        mt={2}
      >
        <Socials />
        <ChangeColorModeButton
          aria-label={"Toggle Color Mode"}
          size={useBreakpointValue({ base: "sm", md: "md" })}
          mr={4}
          ml={4}
        />
        <CloseButton onClick={onClose} ref={closeButtonRef} />
      </Flex>
      <Flex mt={2} mb={8} flexDir={"column"}>
        <SidebarLink
          href="/"
          active={undefined === router.query?.slug}
          ml={0}
          fontSize={["lg", "xl"]}
          onClose={onClose}
        >
          Home
        </SidebarLink>

        <SearchModal />
        {categories.map(category => (
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
