import { Heading, Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { ReactNode } from "react";

interface HomeLinkProps {
  active?: boolean;
  children?: ReactNode;
  [x: string]: any;
}

const HomeLink = (props: HomeLinkProps): JSX.Element => {
  const { active, children, ...otherProps } = props;

  const primaryColor = useColorModeValue("green.600", "green.400");
  const primaryBg = useColorModeValue("green.200", "green.800");
  const secondaryBg = useColorModeValue("green.300", "green.700");
  const secondaryColor = useColorModeValue("green.800", "green.200");

  return (
    <NextLink href="/" passHref>
      <Link
        fontSize="lg"
        rounded="md"
        px={3}
        py={2}
        w="48"
        bg={active ? secondaryBg : primaryBg}
        fontWeight={active ? "semibold" : "normal"}
        color={active ? secondaryColor : primaryColor}
        _hover={{
          bg: secondaryBg,
          color: secondaryColor,
        }}
        {...otherProps}
      >
        {children || "Home"}
      </Link>
    </NextLink>
  );
};

export default HomeLink;
