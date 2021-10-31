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
import { useState, useEffect } from "react";

const Gradient = (): JSX.Element => {
  const [gradientCSS, setGradientCSS] = useState<string>(
    "linear(90deg, #ff0000, #00ff00)"
  );
  const [gradientDirection, setGradientDirection] = useState<number>(90);
  const [gradientColors, setGradientColors] = useState<string[]>([
    "#ff0000",
    "#00ff00",
  ]);

  useEffect(() => {
    console.log(gradientCSS);
    setGradientCSS(
      `linear-gradient(${gradientDirection}deg, ${gradientColors.join(", ")})`
    );
  }, [gradientDirection, gradientColors]);

  useEffect(() => {
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
  }, [gradientCSS]);

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
