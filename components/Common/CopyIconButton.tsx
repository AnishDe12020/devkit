interface CopyIconButtonProps {
  onCopy: () => void;
  hasCopied: boolean;
  ariaLabel?: string;
  [x: string]: any;
}

import { IconButton } from "@chakra-ui/react";
import { FiCopy, FiCheck } from "react-icons/fi";

const CopyIconButton = (props: CopyIconButtonProps): JSX.Element => {
  const {
    onCopy,
    hasCopied,
    ariaLabel = "Copy to Clipboard",
    ...otherProps
  } = props;
  return (
    <IconButton
      onClick={onCopy}
      aria-label={ariaLabel}
      icon={hasCopied ? <FiCheck /> : <FiCopy />}
      bg={hasCopied ? "green.500" : undefined}
      _hover={{
        bg: hasCopied ? "green.500" : undefined,
      }}
      {...otherProps}
    />
  );
};

export default CopyIconButton;
