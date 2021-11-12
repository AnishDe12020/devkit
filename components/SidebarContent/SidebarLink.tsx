import { Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { ReactNode } from "react";

interface SidebarLinkProps {
  href: string;
  active: boolean;
  children: ReactNode;
  key: any;
}

const SidebarLink = ({
  href,
  active,
  children,
}: SidebarLinkProps): JSX.Element => {
  const primaryColor = useColorModeValue("green.600", "green.400");
  const secondaryBg = useColorModeValue("green.300", "green.700");
  const secondaryColor = useColorModeValue("green.800", "green.200");

  href = href === "///" ? "/" : href;

  return (
    <NextLink href={href} passHref>
      <Link
        fontSize="md"
        rounded="md"
        px={3}
        py={2}
        ml={2}
        w="48"
        bg={active ? secondaryBg : undefined}
        fontWeight={active ? "semibold" : "normal"}
        color={active ? secondaryColor : primaryColor}
        _hover={{
          bg: secondaryBg,
          color: secondaryColor,
        }}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export default SidebarLink;
