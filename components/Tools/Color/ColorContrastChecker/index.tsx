import calculateContrastRatio from "@/utils/calculateContrastRatio";

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
} from "@chakra-ui/react";
import { useState } from "react";

const ColorContrastChecker = (): JSX.Element => {
  const [color1, setColor1] = useState<string>("#000000");
  const [color2, setColor2] = useState<string>("#ffffff");

  const [contrastRatio, setContrastRatio] = useState<number[]>(
    calculateContrastRatio(color1, color2)
  );

  const handleColor1Update = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setColor1(value);
    setContrastRatio(calculateContrastRatio(value, color2));
  };

  const handleColor2Update = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setColor2(value);
    setContrastRatio(calculateContrastRatio(color1, value));
  };

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
          {contrastRatio[0]} : {contrastRatio[1]}
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
        <Text fontSize="lg">
          AA-level:{" "}
          {contrastRatio[0] / contrastRatio[1] < 1 / 4.5 ? "PASS" : "FAIL"}
        </Text>
        <Text fontSize="lg">
          AAA-level:{" "}
          {contrastRatio[0] / contrastRatio[1] < 1 / 7 ? "PASS" : "FAIL"}
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
        <Text fontSize="lg">
          AA-level:{" "}
          {contrastRatio[0] / contrastRatio[1] < 1 / 3 ? "PASS" : "FAIL"}
        </Text>
        <Text fontSize="lg">
          AAA-level:{" "}
          {contrastRatio[0] / contrastRatio[1] < 1 / 4.5 ? "PASS" : "FAIL"}
        </Text>
      </Flex>
    </Box>
  );
};

export default ColorContrastChecker;
