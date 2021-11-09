import { Box, Heading, Center, Text } from "@chakra-ui/react";

interface HomeComponentProps {
  [x: string]: any;
}

const HomeComponent = (props: HomeComponentProps): JSX.Element => (
  <Box {...props}>
    <Center>
      <Heading>Welcome to DevKit</Heading>
      <Text>Developer tools at your fingertips</Text>
    </Center>
  </Box>
);

export default HomeComponent;
