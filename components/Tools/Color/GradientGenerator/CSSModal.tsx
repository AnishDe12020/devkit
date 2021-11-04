import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  IconButton,
  Flex,
  useDisclosure,
  useClipboard,
  chakra,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FiDownload } from "react-icons/fi";
import { saveAs } from "file-saver";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/css/css";
import { UnControlled as CodeMirror } from "react-codemirror2";
import CopyIconButton from "@/components/Common/CopyIconButton";

interface CSSModalProps {
  children: ReactNode;
  colors: string[];
  direction: number;
}

const ChakraCodeMirror = chakra(CodeMirror, {
  baseStyle: {
    width: "100%",
    height: "100%",
    fontSize: "lg",
  },
});

const CSSModal = ({
  colors,
  direction,
  children,
}: CSSModalProps): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const css = `background: linear-gradient(${direction}deg, ${colors.join(
    ", "
  )});
background: -webkit-linear-gradient(${direction}deg, ${colors.join(", ")});
background: -o-linear-gradient(${direction}deg, ${colors.join(", ")});
background: -moz-linear-gradient(${direction}deg, ${colors.join(", ")});
background: -ms-linear-gradient(${direction}deg, ${colors.join(", ")});`;

  const downloadCSS = () => {
    const fileName = "gradient.css";
    const blob = new Blob([css], { type: "text/css" });

    saveAs(blob, fileName);
  };

  const { hasCopied, onCopy } = useClipboard(css);
  return (
    <>
      <Button onClick={onOpen}>{children}</Button>

      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader />
          <ModalCloseButton />
          <ModalBody mt={4}>
            <Flex flexDir="column">
              <ChakraCodeMirror
                value={css}
                options={{
                  readOnly: true,
                  mode: "css",
                  theme: "material",
                  lineWrapping: true,
                  lineNumbers: true,
                }}
              />

              <Flex my={4} justifyContent="end">
                <IconButton
                  icon={<FiDownload />}
                  aria-label="Download Gradient CSS"
                  onClick={downloadCSS}
                  mr={4}
                />
                <CopyIconButton
                  ariaLabel="Copy CSS"
                  onCopy={onCopy}
                  hasCopied={hasCopied}
                />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CSSModal;
