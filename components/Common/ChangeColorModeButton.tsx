import { IconButton, IconButtonProps, useColorMode } from "@chakra-ui/react";
import { FiMoon, FiSun } from "react-icons/fi";

const ChangeColorModeButton = (props: IconButtonProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      onClick={toggleColorMode}
      icon={colorMode === "light" ? <FiSun /> : <FiMoon />}
      {...props}
    />
  );
};

export default ChangeColorModeButton;
