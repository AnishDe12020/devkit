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
  [x: string]: any;
}

const BASE_URL = "https://www.devkit.one/color/gradient-generator";

const ExportAsUrl = (props: ExportAsUrlProps): JSX.Element => {
  let { colors, direction, children, ...otherProps } = props;

  colors = colors.map(color => color.replace("#", ""));
  const url = `${BASE_URL}?colors=${colors.join("-")}&direction=${direction}`;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { hasCopied, onCopy } = useClipboard(url);

  return (
    <>
      <Button onClick={onOpen} {...otherProps}>
        {children}
      </Button>
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
