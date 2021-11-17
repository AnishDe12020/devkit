import {
  Box,
  Center,
  Flex,
  Input,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Button,
  Grid,
  Text,
  HStack,
  chakra,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import Color from "@/components/Tools/Color/GradientGenerator/Color";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import ExportAsUrl from "@/components/Tools/Color/GradientGenerator/ExportAsUrl";
import GradientPreview from "./GradientPreview";

const CSSModal = dynamic(
  () => import("@/components/Tools/Color/GradientGenerator/CSSModal"),
  { ssr: false }
);
const ExportAsPng = dynamic(() => import("@/components/Common/ExportAsPng"), {
  ssr: false,
});

interface IGradient {
  css: string;
  colors: string[];
  direction: number;
}

const Gradient = (): JSX.Element => {
  const router = useRouter();

  const gradientComponentRef = useRef<HTMLDivElement>(null);

  let colors: string[] | undefined = (router.query.colors as string)?.split(
    "-"
  ) as string[];
  colors = colors?.map(color => color.trim());
  colors = colors?.map(color => `#${color}`);
  const direction: number | undefined = parseInt(
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
    const direction: number = value
      .split("(")[1]
      .split("deg")[0] as unknown as number;
    const colors: string[] = value.split("deg")[1].split(",");
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
    <Center mx={{ base: 2, md: 0 }}>
      <Flex flexDir="column" w="100%">
        <GradientPreview
          gradientCSS={gradient.css}
          gradientComponentRef={gradientComponentRef}
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
        <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
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

        <chakra.hr mt={4} />

        <HStack mt={4} spacing={4}>
          <ExportAsUrl
            fontSize={{ base: "sm", md: "md" }}
            colors={gradient.colors}
            direction={gradient.direction}
          >
            Export as URL
          </ExportAsUrl>
          <CSSModal
            fontSize={{ base: "sm", md: "md" }}
            colors={gradient.colors}
            direction={gradient.direction}
          >
            Copy CSS
          </CSSModal>
          <ExportAsPng
            fontSize={{ base: "sm", md: "md" }}
            componentRef={gradientComponentRef}
          />
        </HStack>
      </Flex>
    </Center>
  );
};

export default Gradient;
