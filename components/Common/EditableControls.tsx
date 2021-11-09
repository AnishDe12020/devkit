import {
  ButtonGroup,
  IconButton,
  Flex,
  useEditableControls,
} from "@chakra-ui/react";
import { FiCheck, FiX, FiEdit } from "react-icons/fi";

const EditableControls = () => {
  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls();

  return isEditing ? (
    <ButtonGroup justifyContent="center" size="sm">
      <IconButton
        icon={<FiCheck />}
        {...getSubmitButtonProps()}
        aria-label="Submit"
      />
      <IconButton
        icon={<FiX />}
        {...getCancelButtonProps()}
        aria-label="Cancel"
      />
    </ButtonGroup>
  ) : (
    <Flex justifyContent="center">
      <IconButton
        icon={<FiEdit />}
        {...getEditButtonProps()}
        aria-label="Edit"
      />
    </Flex>
  );
};

export default EditableControls;
