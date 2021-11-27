import {
  Box,
  Center,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import { FiX } from "react-icons/fi";

interface ColorProps {
  color: string;
  index: number;
  handleColorUpdate: (e: any, index: number) => void;
  handleColorDelete: (index: number) => void;
}

const Color = ({
  color,
  index,
  handleColorUpdate,
  handleColorDelete,
}: ColorProps): JSX.Element => {
  const handleDelete = () => {
    handleColorDelete(index);
  };
  return (
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
        <IconButton
          icon={<FiX />}
          onClick={handleDelete}
          aria-label="Delete color"
          ml={2}
        />
      </InputGroup>
    </Box>
  );
};
export default Color;
