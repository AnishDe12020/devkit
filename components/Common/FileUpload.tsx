import { ChangeEvent, useRef } from "react";
import { InputGroup, Button, Input } from "@chakra-ui/react";
import { FiUpload } from "react-icons/fi";

interface FileUploadProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  accept?: string;
  multiple?: boolean;
  [x: string]: any;
}

const FileUpload = ({
  onChange,
  label,
  accept = "*",
  multiple = false,
  ...otherProps
}: FileUploadProps): JSX.Element => {
  const inputElRef = useRef<HTMLInputElement>(null);

  return (
    <InputGroup>
      <Button
        leftIcon={<FiUpload />}
        aria-label={label}
        onClick={() => inputElRef.current?.click()}
        {...otherProps}
      >
        {label}
      </Button>
      <Input
        type="file"
        accept={accept}
        multiple={multiple}
        hidden
        ref={inputElRef}
        onChange={onChange}
      />
    </InputGroup>
  );
};

export default FileUpload;
