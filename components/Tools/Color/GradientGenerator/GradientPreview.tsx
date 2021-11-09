import EditableControls from "@/components/Common/EditableControls";
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Editable,
  EditablePreview,
  EditableInput,
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
      <Tab borderRadius="md">Box</Tab>
      <Tab borderRadius="md">Text</Tab>
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
        <Editable
          defaultValue="Text"
          textAlign="center"
          mt={4}
          fontWeight="bold"
          fontSize="9xl"
          textOverflow="ellipsis"
          isPreviewFocusable={false}
          wordBreak="break-word"
        >
          <EditablePreview bgGradient={gradientCSS} bgClip="text" />
          <EditableInput />
          <EditableControls />
        </Editable>
      </TabPanel>
    </TabPanels>
  </Tabs>
);
export default GradientPreview;
