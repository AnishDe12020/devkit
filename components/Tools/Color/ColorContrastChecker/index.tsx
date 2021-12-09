import {
  Box,
  Grid,
  Input,
  InputGroup,
  Center,
  InputRightAddon,
  Text,
  Editable,
  EditablePreview,
  EditableInput,
  Flex,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import chroma from "chroma-js";
import { useRouter } from "next/router";

interface IWCAGTestResults {
  smallAA: boolean;
  largeAA: boolean;
  smallAAA: boolean;
  largeAAA: boolean;
}

const ColorContrastChecker = (): JSX.Element => {
  const router = useRouter();

  const [color1, setColor1] = useState<string>(
    router?.query.color1 ? "#" + router?.query.color1 : "#000000"
  );
  const [color2, setColor2] = useState<string>(
    router?.query.color2 ? "#" + router?.query.color2 : "#ffffff"
  );

  const [contrastRatio, setContrastRatio] = useState<number>(
    chroma.contrast(color1, color2)
  );

  const [wcagTestResults, setWcagTestResults] = useState<IWCAGTestResults>({
    smallAA: contrastRatio >= 4.5,
    largeAA: contrastRatio >= 3,
    smallAAA: contrastRatio >= 7,
    largeAAA: contrastRatio >= 4.5,
  });

  const handleColor1Update = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setColor1(value);
    handleColorUpdate(value, color2);
  };

  const handleColor2Update = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setColor2(value);
    handleColorUpdate(color1, value);
  };

  const handleColorUpdate = (c1: string, c2: string) => {
    const newContrastRatio = chroma.contrast(c1, c2);
    setContrastRatio(newContrastRatio);
    setWcagTestResults({
      smallAA: newContrastRatio >= 4.5,
      largeAA: newContrastRatio >= 3,
      smallAAA: newContrastRatio >= 7,
      largeAAA: newContrastRatio >= 4.5,
    });
  };

  const wcagTestPassColor = useColorModeValue("green.500", "green.400");
  const wcagTestFailColor = useColorModeValue("red.500", "red.400");

  return (
    <Box>
      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={4}>
        <InputGroup>
          <Input
            type="color"
            value={color1}
            onChange={handleColor1Update}
            cursor="pointer"
            variant="filled"
          />
          <Center>
            <InputRightAddon alignContent="center">{color1}</InputRightAddon>
          </Center>
        </InputGroup>
        <InputGroup>
          <Input
            type="color"
            value={color2}
            onChange={handleColor2Update}
            cursor="pointer"
            variant="filled"
          />
          <Center>
            <InputRightAddon alignContent="center">{color2}</InputRightAddon>
          </Center>
        </InputGroup>
      </Grid>
      <Center mt={16}>
        <Text mt={4} fontSize="4xl">
          {contrastRatio.toFixed(2)}
        </Text>
      </Center>
      <Divider color={useColorModeValue("gray.300", "gray.700")} />
      <Center>
        <Text mt={4} fontSize="2xl">
          WCAG Tests
        </Text>
      </Center>
      <Editable
        bgColor={color2}
        textColor={color1}
        defaultValue="Normal Text. Size 18pt"
        p={4}
        borderRadius={8}
        mt={4}
        fontSize="18pt"
      >
        <EditablePreview />
        <EditableInput />
      </Editable>
      <Flex mt={2} justifyContent="space-around">
        <Text
          fontSize="lg"
          color={
            wcagTestResults.smallAA ? wcagTestPassColor : wcagTestFailColor
          }
        >
          AA-level: {wcagTestResults.smallAA ? "PASS" : "FAIL"}
        </Text>
        <Text
          fontSize="lg"
          color={
            wcagTestResults.smallAAA ? wcagTestPassColor : wcagTestFailColor
          }
        >
          AAA-level: {wcagTestResults.smallAAA ? "PASS" : "FAIL"}
        </Text>
      </Flex>
      <Editable
        bgColor={color2}
        textColor={color1}
        defaultValue="Bold Text. Size 14pt"
        p={4}
        borderRadius={8}
        mt={4}
        fontSize="14pt"
        fontWeight="bold"
      >
        <EditablePreview />
        <EditableInput />
      </Editable>
      <Flex mt={2} justifyContent="space-around">
        <Text
          fontSize="lg"
          color={
            wcagTestResults.largeAA ? wcagTestPassColor : wcagTestFailColor
          }
        >
          AA-level: {wcagTestResults.largeAA ? "PASS" : "FAIL"}
        </Text>
        <Text
          fontSize="lg"
          color={
            wcagTestResults.largeAAA ? wcagTestPassColor : wcagTestFailColor
          }
        >
          AAA-level: {wcagTestResults.largeAAA ? "PASS" : "FAIL"}
        </Text>
      </Flex>
    </Box>
  );
};

export default ColorContrastChecker;
