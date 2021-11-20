import {
  Button,
  Link,
  ButtonProps,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
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
    >
      <chakra.dt fontSize="lg" fontWeight="bold" lineHeight="6">
        {toolName}
      </chakra.dt>
    </Button>
  </NextLink>
);

export default Tool;
