import {
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { RefObject } from "react";

interface GradientPreviewProps {
  gradientCSS: string;
  gradientComponentRef: RefObject<HTMLDivElement>;
}

const GradientPreview = ({
  gradientCSS,
  gradientComponentRef,
}: GradientPreviewProps): JSX.Element => (
  <Tabs variant="solid-rounded">
    <TabList>
      <Tab>Box</Tab>
      <Tab>Text</Tab>
    </TabList>

    <TabPanels>
      <TabPanel>
        <Box
          w="100%"
          h="400px"
          bgGradient={gradientCSS}
          mt={4}
          borderRadius={16}
          ref={gradientComponentRef}
        />
      </TabPanel>
      <TabPanel>
        <Text
          w="100%"
          h="400px"
          bgGradient={gradientCSS}
          fontSize={250}
          fontWeight="extrabold"
          bgClip="text"
          mt={4}
          textAlign="center"
        >
          Text
        </Text>
      </TabPanel>
    </TabPanels>
  </Tabs>
);
export default GradientPreview;
