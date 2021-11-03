import { exportComponentAsPNG } from "react-component-export-image";
import { Button } from "@chakra-ui/react";
import { RefObject } from "react";

interface ExportAsPngProps {
  gradientComponentRef: RefObject<HTMLDivElement>;
}

const ExportAsPng = ({
  gradientComponentRef,
}: ExportAsPngProps): JSX.Element => {
  const handleExport = () => {
    exportComponentAsPNG(gradientComponentRef, {
      fileName: "gradient.png",
    });
  };

  return <Button onClick={handleExport}>Export PNG</Button>;
};

export default ExportAsPng;
