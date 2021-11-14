import { exportComponentAsPNG } from "react-component-export-image";
import { Button } from "@chakra-ui/react";
import { RefObject } from "react";

interface ExportAsPngProps {
  componentRef: RefObject<HTMLDivElement>;
  [x: string]: any;
}

const ExportAsPng = (props: ExportAsPngProps): JSX.Element => {
  const { componentRef, ...otherProps } = props;
  const handleExport = () => {
    exportComponentAsPNG(componentRef, {
      fileName: "gradient.png",
    });
  };

  return (
    <Button onClick={handleExport} {...otherProps}>
      Export PNG
    </Button>
  );
};

export default ExportAsPng;
