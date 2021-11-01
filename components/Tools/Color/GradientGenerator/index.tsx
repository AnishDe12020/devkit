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
  Button,
} from "@chakra-ui/react";
import { useState, FormEvent } from "react";

const Gradient = (): JSX.Element => {
  const [gradientCSS, setGradientCSS] = useState<string>(
    "linear(90deg, #ff0000, #00ff00)"
  );
  const [gradientDirection, setGradientDirection] = useState<number>(90);
  const [gradientColors, setGradientColors] = useState<string[]>([
    "#ff0000",
    "#00ff00",
  ]);

  const handleDirectionUpdate = (value: number): void => {
    setGradientDirection(value);
    setGradientCSS(
      `linear-gradient(${gradientDirection}deg, ${gradientColors.join(", ")})`
    );
  };

  const handleColorUpdate = (value: string, index: number): void => {
    setGradientColors(gradientColors.map((c, i) => (i === index ? value : c)));
    setGradientCSS(
      `linear-gradient(${gradientDirection}deg, ${gradientColors.join(", ")})`
    );
  };

  const handleCSSUpdate = (value: string): void => {
    setGradientCSS(value);
    let direction = gradientCSS.split("(")[1].split("deg")[0];
    let colors = gradientCSS.split("deg")[1].split(",");
    colors.shift();
    colors.forEach((color, index) => {
      color = color.trim();
      color = color.replace(")", "");
      colors[index] = color;
    });
    setGradientDirection(parseInt(direction));
    setGradientColors(colors);
  };

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
            onChange={e => handleCSSUpdate(e.target.value)}
          />
          <Slider
            mt={4}
            min={0}
            max={360}
            value={gradientDirection}
            onChange={value => handleDirectionUpdate(value)}
            focusThumbOnChange={false}
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
              onChange={e => handleColorUpdate(e.target.value, index)}
            />
          ))}
          <Button
            onClick={() => setGradientColors([...gradientColors, "#000000"])}
          >
            Add Color
          </Button>
        </Flex>
      </Center>
    </Box>
  );
};

export default Gradient;
