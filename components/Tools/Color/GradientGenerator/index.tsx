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
  Grid,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import Color from "@/components/Tools/Color/GradientGenerator/Color";

const Gradient = (): JSX.Element => {
  const [gradientCSS, setGradientCSS] = useState<string>(
    "linear(90deg, #ff008c, #d30916);"
  );
  const [gradientDirection, setGradientDirection] = useState<number>(90);
  const [gradientColors, setGradientColors] = useState<string[]>([
    "#ff008c",
    "#d30916",
  ]);

  const handleDirectionUpdate = (value: number): void => {
    setGradientDirection(value);
    setGradientCSS(
      `linear(${gradientDirection}deg, ${gradientColors.join(", ")})`
    );
  };

  const handleColorUpdate = (value: string, index: number): void => {
    setGradientColors(gradientColors.map((c, i) => (i === index ? value : c)));
    setGradientCSS(
      `linear(${gradientDirection}deg, ${gradientColors.join(", ")})`
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
    console.log(colors);
    setGradientDirection(parseInt(direction));
    setGradientColors(colors);
  };

  return (
    <Box>
      <Center>
        <Flex flexDir="column" w="4xl">
          <Center>
            <Heading>Gradient Generator</Heading>
          </Center>

          <Box
            w="100%"
            h="400px"
            bgGradient={gradientCSS}
            mt={12}
            borderRadius={16}
          />
          <Box mt={8}>
            <Text my={2}>Raw CSS</Text>
            <Input
              placeholder="Enter raw css. E.g: linear(to right, #ff0000, #00ff00)"
              value={gradientCSS}
              onChange={e => handleCSSUpdate(e.target.value)}
            />
          </Box>
          <Box mt={4}>
            <Text>Gradient Direction</Text>
            <Slider
              min={0}
              max={360}
              value={gradientDirection}
              onChange={value => handleDirectionUpdate(value)}
              focusThumbOnChange={false}
            >
              <SliderTrack>
                <SliderFilledTrack bgGradient={gradientCSS} />
              </SliderTrack>
              <SliderThumb bgGradient={gradientCSS}></SliderThumb>
            </Slider>
          </Box>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            {gradientColors.map((color, index) => (
              <Color
                color={color}
                index={index}
                key={index}
                handleColorUpdate={handleColorUpdate}
              />
            ))}
          </Grid>
          <Button
            onClick={() => setGradientColors([...gradientColors, "#000000"])}
            mt={8}
          >
            Add Color
          </Button>
        </Flex>
      </Center>
    </Box>
  );
};

export default Gradient;
