import { Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { ReactNode } from "react";

interface SidebarLinkProps {
  href: string;
  active: boolean;
  children: ReactNode;
  key?: any;
  onClose: () => void;
  [key: string]: any;
}

const SidebarLink = ({
  href,
  active,
  children,
  onClose,
  ...otherProps
}: SidebarLinkProps): JSX.Element => {
  const primaryColor = useColorModeValue("green.700", "green.300");
  const secondaryBg = useColorModeValue("green.600", "green.400");
  const secondaryColor = useColorModeValue("white", "gray.800");

  return (
    <NextLink href={href} passHref>
      <Link
        fontSize={["sm", "md"]}
        rounded="md"
        px={[2, 3]}
        py={2}
        ml={{ base: 1, md: 2 }}
        w={{ base: 60, md: 48 }}
        bg={active ? secondaryBg : undefined}
        fontWeight={active ? "semibold" : "normal"}
        color={active ? secondaryColor : primaryColor}
        onClick={onClose}
        _hover={{
          bg: secondaryBg,
          color: secondaryColor,
        }}
        {...otherProps}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export default SidebarLink;
