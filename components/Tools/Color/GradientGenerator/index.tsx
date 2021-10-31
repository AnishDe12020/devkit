import { Box, Center, Heading, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";

const Gradient = (): JSX.Element => {
  const [gradientCSS, setGradientCSS] = useState<string>(
    "linear(to right, green.200, pink.500)"
  );
  return (
    <Box>
      <Center>
        <Flex flexDir="column" w="4xl">
          <Heading>Gradient Generator</Heading>
          <Box
            w="100%"
            h="400px"
            bgGradient={gradientCSS}
            mt={12}
            borderRadius={16}
          />
          <Input
            mt={8}
            placeholder="Enter raw css. E.g: linear(to right, green.200, pink.500)"
            onChange={e => setGradientCSS(e.target.value)}
          />
        </Flex>
      </Center>
    </Box>
  );
};

export default Gradient;
