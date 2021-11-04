import CopyIconButton from "@/components/Common/CopyIconButton";
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
  useClipboard,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface ExportAsUrlProps {
  children: ReactNode;
  colors: string[];
  direction: number;
}

const BASE_URL = "https://devkit.vercel.app/color/gradient-generator";

const ExportAsUrl = ({
  colors,
  direction,
  children,
}: ExportAsUrlProps): JSX.Element => {
  colors = colors.map(color => color.replace("#", ""));
  const url = `${BASE_URL}?colors=${colors.join("-")}&direction=${direction}`;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { hasCopied, onCopy } = useClipboard(url);

  return (
    <>
      <Button onClick={onOpen}>{children}</Button>
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader />
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDir="column">
              <Textarea isReadOnly>{url}</Textarea>
              <CopyIconButton
                ariaLabel="Copy URL"
                onCopy={onCopy}
                hasCopied={hasCopied}
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
