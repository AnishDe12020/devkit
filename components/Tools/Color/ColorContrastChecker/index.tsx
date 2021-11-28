import calculateContrastRatio from "@/utils/calculateContrastRatio";

import {
  Box,
  Grid,
  Input,
  InputGroup,
  Center,
  InputRightAddon,
  Text,
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
    </Box>
  );
};

export default ColorContrastChecker;
