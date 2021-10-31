import {
  Box,
  Center,
  Heading,
  Flex,
  Input,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { useState } from "react";

const Gradient = (): JSX.Element => {
  const [gradientCSS, setGradientCSS] = useState<string>(
    "linear(to right, #ff0000, #00ff00)"
  );
  const [gradientDirection, setGradientDirection] = useState<number>(90);
  const [gradientColors, setGradientColors] = useState<string[]>([
    "#ff0000",
    "#00ff00",
  ]);

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
            placeholder="Enter raw css. E.g: linear(to right, #ff0000, #00ff00)"
            value={gradientCSS}
            onChange={e => setGradientCSS(e.target.value)}
          />
          <Slider
            mt={4}
            min={0}
            max={360}
            value={gradientDirection}
            onChange={value => setGradientDirection(value)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          {gradientColors.map((color, index) => (
            <Input
              key={index}
              mt={8}
              type="color"
              value={color}
              onChange={e =>
                setGradientColors(
                  gradientColors.map((c, i) =>
                    i === index ? e.target.value : c
                  )
                )
              }
            />
          ))}
        </Flex>
      </Center>
    </Box>
  );
};

export default Gradient;
