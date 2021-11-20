import { Button, Link, ButtonProps, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

interface ToolComponentProps extends ButtonProps {
  toolName: string;
  href: string;
}

const Tool = ({ toolName, href, ...otherProps }: ToolComponentProps) => (
  <NextLink href={href} passHref>
    <Button
      ml={4}
      bgColor={useColorModeValue("gray.200", "gray.700")}
      w="250px"
      h="100px"
      borderRadius={8}
      alignContent="center"
      as={Link}
      my={4}
      fontSize="lg"
      fontWeight="bold"
      lineHeight="6"
      {...otherProps}
    >
      {toolName}
    </Button>
  </NextLink>
);

export default Tool;
