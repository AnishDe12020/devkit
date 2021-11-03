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
import { useRouter } from "next/router";
import CSSModal from "./CSSModal";

interface IGradient {
  css: string;
  colors: string[];
  direction: number;
}

const Gradient = (): JSX.Element => {
  const router = useRouter();

  let colors: string[] | undefined = (router.query.colors as string)?.split(
    "-"
  ) as string[];
  colors = colors?.map(color => color.trim());
  colors = colors?.map(color => `#${color}`);
  let direction: number | undefined = parseInt(
    router.query?.direction as string
  );

  const [gradient, setGradient] = useState<IGradient>({
    css: `linear(${direction ? direction : 90}deg, ${
      colors ? colors.join(", ") : "#ff008c, #d30916"
    });`,
    colors: colors ? colors : ["#ff008c", "#d30916"],
    direction: direction ? direction : 90,
  });

  const handleCSSUpdate = (value: string): void => {
    let direction: number = value
      .split("(")[1]
      .split("deg")[0] as unknown as number;
    let colors: string[] = value.split("deg")[1].split(",");
    colors.shift();
    colors.forEach((color, index) => {
      color = color.trim();
      color = color.replace(")", "");
      colors[index] = color;
    });
    setGradient({
      direction,
      colors,
      css: value,
    });
  };

  const handleColorUpdate = (value: string, index: number): void => {
    const colors: string[] = gradient.colors.map((c, i) =>
      i === index ? value : c
    );
    setGradient({
      ...gradient,
      css: `linear(${gradient.direction}deg, ${colors.join(", ")})`,
      colors,
    });
  };

  const handleDirectionUpdate = (value: number): void => {
    setGradient({
      ...gradient,
      css: `linear(${value}deg, ${gradient.colors.join(", ")})`,
      direction: value,
    });
  };

  const handleAddColor = (): void => {
    const colors: string[] = [...gradient.colors, "#000000"];
    setGradient({
      ...gradient,
      colors,
      css: `linear(${gradient.direction}deg, ${colors.join(", ")})`,
    });
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
            bgGradient={gradient.css}
            mt={12}
            borderRadius={16}
          />
          <Box mt={8}>
            <Text my={2}>Raw CSS</Text>
            <Input
              placeholder="Enter raw css. E.g: linear(to right, #ff0000, #00ff00)"
              value={gradient.css}
              onChange={e => handleCSSUpdate(e.target.value)}
            />
          </Box>
          <Box mt={4}>
            <Text>Gradient Direction</Text>
            <Slider
              min={0}
              max={360}
              value={gradient.direction}
              onChange={value => handleDirectionUpdate(value)}
              focusThumbOnChange={false}
            >
              <SliderTrack>
                <SliderFilledTrack bgGradient={gradient.css} />
              </SliderTrack>
              <SliderThumb bgGradient={gradient.css}></SliderThumb>
            </Slider>
          </Box>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            {gradient.colors.map((color, index) => (
              <Color
                color={color}
                index={index}
                key={index}
                handleColorUpdate={handleColorUpdate}
              />
            ))}
          </Grid>
          <Button onClick={handleAddColor} mt={8}>
            Add Color
          </Button>

          <Box mt={4}>
            <Heading size="lg">Export</Heading>
            <CSSModal colors={gradient.colors} direction={gradient.direction}>
              Copy CSS
            </CSSModal>
          </Box>
        </Flex>
      </Center>
    </Box>
  );
};

export default Gradient;
