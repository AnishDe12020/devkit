import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  IconButton,
  Flex,
  useDisclosure,
  useClipboard,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FiCopy } from "react-icons/fi";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/css/css";
import { UnControlled as CodeMirror } from "react-codemirror2";

interface CSSModalProps {
  children: ReactNode;
  colors: string[];
  direction: number;
}

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

  const { hasCopied, onCopy } = useClipboard(css);
  return (
    <>
      <Button onClick={onOpen}>{children}</Button>

      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>CSS</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              <CodeMirror
                value={css}
                options={{
                  readOnly: true,
                  mode: "css",
                  theme: "material",
                  lineWrapping: true,
                  lineNumbers: true,
                }}
              />

              <IconButton
                icon={<FiCopy />}
                onClick={onCopy}
                aria-label="Copy Gradient CSS"
              />
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CSSModal;
