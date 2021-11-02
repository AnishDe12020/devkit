import {
  Box,
  Center,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";

interface ColorProps {
  color: string;
  index: number;
  handleColorUpdate: (e: any, index: number) => void;
}

const Color = ({
  color,
  index,
  handleColorUpdate,
}: ColorProps): JSX.Element => (
  <Box mt={4} key={index}>
    <Text my={2}>Color {index + 1}</Text>
    <InputGroup>
      <Input
        type="color"
        value={color}
        onChange={e => handleColorUpdate(e.target.value, index)}
        cursor="pointer"
        variant="filled"
      />
      <Center>
        <InputRightAddon alignContent="center">{color}</InputRightAddon>
      </Center>
    </InputGroup>
  </Box>
);
export default Color;
