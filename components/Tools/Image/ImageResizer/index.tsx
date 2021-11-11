import {
  Input,
  InputLeftElement,
  Box,
  InputGroup,
  IconButton,
} from "@chakra-ui/react";
import { FiUpload } from "react-icons/fi";
import { useRef } from "react";

const ImageResizer = (): JSX.Element => {
  const inputElRef = useRef<HTMLInputElement>(null);
  return (
    <Box>
      <InputGroup>
        <InputLeftElement>
          <IconButton
            icon={<FiUpload />}
            aria-label="Upload image"
            onClick={() => inputElRef.current?.click()}
          />
          <Input type="file" accept="image/*" hidden ref={inputElRef} />
        </InputLeftElement>
      </InputGroup>
    </Box>
  );
};

export default ImageResizer;
