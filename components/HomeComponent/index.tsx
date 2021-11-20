import { Box, Grid, chakra, useColorModeValue } from "@chakra-ui/react";
import DevKitLogo from "@/styles/icons/DevKitLogo";
import Tool from "./Tool";
import tools from "@/data/tools";

interface HomeComponentProps {
  [x: string]: any;
}

const HomeComponent = (props: HomeComponentProps): JSX.Element => (
  <Box {...props}>
    <Box
      pos="relative"
      pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
      w="full"
    >
      <Box
        mx="auto"
        maxW={{ base: "7xl" }}
        px={{ base: 4, sm: 6, lg: 8 }}
        mt={{ base: 6, md: 8, lg: 10, xl: 12 }}
      >
        <Box
          textAlign="center"
          w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
          mx="auto"
        >
          <DevKitLogo boxSize={32} mb={8} />
          <chakra.h1
            fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
            letterSpacing="tight"
            lineHeight="short"
            fontWeight="extrabold"
          >
            <chakra.span display={{ base: "block", xl: "inline" }}>
              Tools for{" "}
            </chakra.span>
            <chakra.span
              display={{ base: "block", xl: "inline" }}
              color={useColorModeValue("green.500", "green.400")}
            >
              Developers
            </chakra.span>
          </chakra.h1>
          <chakra.h1
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            fontWeight="bold"
            mt={2}
          >
            <chakra.span display={{ base: "block", xl: "inline" }}>
              By the{" "}
            </chakra.span>
            <chakra.span
              display={{ base: "block", xl: "inline" }}
              color={useColorModeValue("green.500", "green.400")}
            >
              Developer Community
            </chakra.span>
          </chakra.h1>
        </Box>
        <Grid
          mt={16}
          justifyItems="center"
          templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        >
          {tools.map(tool => (
            <Tool
              key={tool.name}
              toolName={tool.name}
              href={`${tool.categorySlug}/${tool.slug}`}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  </Box>
);

export default HomeComponent;
