import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Textarea,
  Flex,
  IconButton,
  useClipboard,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

interface ExportAsUrlProps {
  colors: string[];
  direction: number;
  children: ReactNode;
}

const BASE_URL = "https://devkit.vercel.app/color/gradient-generator";

const ExportAsUrl = ({ colors, direction, children }: ExportAsUrlProps) => {
  colors = colors.map(color => color.replace("#", ""));
  const url = `${BASE_URL}?colors=${colors.join("-")}&direction=${direction}`;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { hasCopied, onCopy } = useClipboard(url);

  return (
    <>
      <Button onClick={onOpen}>{children}</Button>
      <Modal isOpen={isOpen} onClose={onClose} h="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader />
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDir="column">
              <Textarea isReadOnly>{url}</Textarea>
              <IconButton
                icon={hasCopied ? <FiCheck /> : <FiCopy />}
                aria-label="Copy URL"
                onClick={onCopy}
                bgColor={hasCopied ? "green.500" : undefined}
                mt={4}
              />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ExportAsUrl;
