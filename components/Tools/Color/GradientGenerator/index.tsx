import { Box, Center, Heading, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";

const Gradient = (): JSX.Element => {
  const [gradientCSS, setGradientCSS] = useState<string>(
    "linear(to-r, green.200, pink.500)"
  );
  return (
    <Box>
      <Center>
        <Flex flexDir="column">
          <Heading>Gradient Generator</Heading>
          <Box w="100%" h="200px" bgGradient={gradientCSS} mt={12} />
          <Input
            mt={8}
            placeholder="Enter raw css"
            onChange={e => setGradientCSS(e.target.value)}
          />
        </Flex>
      </Center>
    </Box>
  );
};

export default Gradient;
