import {
  Flex,
  Icon,
  Link,
  FlexProps,
  useColorModeValue,
} from "@chakra-ui/react";
import { SiGithub, SiTwitter } from "react-icons/si";

const Socials = (props: FlexProps): JSX.Element => (
  <Flex {...props}>
    <Link isExternal href="https://github.com/AnishDe12020/devkit">
      <Icon
        as={SiGithub}
        w="5"
        h="5"
        _hover={{
          opacity: 0.7,
        }}
        display="block"
        color={useColorModeValue("gray.700", "gray.400")}
      />
    </Link>
    <Link isExternal href="https://twitter.com/DevKitHQ">
      <Icon
        as={SiTwitter}
        w="5"
        h="5"
        _hover={{
          opacity: 0.7,
        }}
        display="block"
        color={useColorModeValue("gray.700", "gray.400")}
        ml={4}
      />
    </Link>
  </Flex>
);

export default Socials;
