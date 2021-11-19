import {
  Input,
  Box,
  Button,
  Image as ChakraImage,
  Text,
  Flex,
  Alert,
  AlertIcon,
  HStack,
  chakra,
  FormControl,
} from "@chakra-ui/react";
import { useRef, useState, ChangeEvent } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import getAspectRatio from "@/utils/getAspectRatio";
import Resizer from "react-image-file-resizer";
import getImageDimensions from "@/utils/getImageDimensions";
import dynamic from "next/dynamic";
import FileUpload from "@/components/Common/FileUpload";

const ExportAsPng = dynamic(() => import("@/components/Common/ExportAsPng"), {
  ssr: false,
});

interface IImage {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  aspectRatio?: number[];
  file?: File;
}

const ImageResizer = (): JSX.Element => {
  const resizedImageRef = useRef<HTMLImageElement>(null);
  const [ogImage, setOgImage] = useState<IImage>();
  const [resizedImage, setResizedImage] = useState<IImage>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const fileList = e.target.files;
    if (!fileList) return;
    const file = fileList[0];
    setOgImage(prev => {
      if (prev) {
        return {
          ...prev,
          src: URL.createObjectURL(file),
        };
      }
      return {
        src: URL.createObjectURL(file),
        alt: file.name,
        width: 0,
        height: 0,
        aspectRatio: [0, 0],
        file,
      };
    });
  };

  const handleOgImageLoad = (): void => {
    if (!ogImage?.src) return;

    const [width, height] = getImageDimensions(ogImage.src);

    const aspectRatio: number[] = getAspectRatio(width, height);
    setOgImage(prev => ({ ...prev, width, height, aspectRatio }));
  };

  const handleResizedImageLoad = (): void => {
    if (!ogImage?.src) return;
    const [width, height] = getImageDimensions(resizedImage!.src!);
    const aspectRatio: number[] = getAspectRatio(width, height);
    setResizedImage(prev => ({
      ...prev,
      width,
      height,
      aspectRatio,
    }));
  };

  return (
    <Box>
      <FileUpload
        onChange={handleFileChange}
        label="Upload Image"
        accept="image/*"
        mb={4}
        w={{ base: "100%", md: "auto" }}
      />
      <>
        {ogImage?.src && (
          <ChakraImage
            src={ogImage.src}
            alt={ogImage.alt}
            onLoad={handleOgImageLoad}
            maxHeight="300px"
            maxWidth={{ base: "70vw", md: "50vw" }}
          />
        )}
        {ogImage?.height && ogImage?.width && ogImage?.aspectRatio && (
          <>
            <Text
              mt={4}
              fontSize="xl"
            >{`Original Image Dimensions: ${ogImage.width}x${ogImage.height}`}</Text>
            <Text
              mt={4}
              fontSize="xl"
            >{`Original Image Aspect Ratio: ${ogImage.aspectRatio[0]}x${ogImage.aspectRatio[1]}`}</Text>
          </>
        )}
      </>

      <Formik
        initialValues={{
          width: 500,
          height: 500,
        }}
        validate={values => {
          const errors: any = {};
          if (values.width <= 0) {
            errors.width = "Width must be greater than 0";
          }
          if (values.width >= (ogImage?.width as number)) {
            errors.width = "Width must be less than original image width";
          }
          if (values.height <= 0) {
            errors.height = "Height must be greater than 0";
          }
          if (values.height >= (ogImage?.height as number)) {
            errors.height = "Height must be less than original image height";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          Resizer.imageFileResizer(
            ogImage?.file as File,
            values.width,
            values.height,
            "PNG",
            100,
            0,
            (file: any) => {
              setResizedImage(prev => {
                if (prev) {
                  return {
                    ...prev,
                    src: URL.createObjectURL(file),
                  };
                }
                return {
                  src: URL.createObjectURL(file),
                  alt: file.name,
                  width: 0,
                  height: 0,
                  aspectRatio: [0, 0],
                  file,
                };
              });
            },
            "file"
          );

          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Flex alignContent="center" verticalAlign="center" my={4}>
              <HStack lineHeight="40px">
                <FormControl>
                  <Input
                    as={Field}
                    placeholder="Width"
                    type="number"
                    name="width"
                    disabled={!ogImage?.src}
                  />
                  <ErrorMessage name="width" />
                </FormControl>
                <chakra.span
                  textAlign="center"
                  display="inline-block"
                  verticalAlign="middle"
                >
                  x
                </chakra.span>
                <FormControl>
                  <Input
                    as={Field}
                    placeholder="Height"
                    type="number"
                    name="height"
                    disabled={!ogImage?.src}
                  />
                  <ErrorMessage name="height" />
                </FormControl>
              </HStack>
              <Button
                ml={2}
                p={2}
                isLoading={isSubmitting}
                type="submit"
                disabled={!ogImage?.src}
              >
                Resize
              </Button>
            </Flex>
            <Alert status="info" mb={4} borderRadius={8}>
              <AlertIcon />
              Images can only be downscaled
            </Alert>
          </Form>
        )}
      </Formik>
      {resizedImage && (
        <>
          {resizedImage?.src && (
            <ChakraImage
              src={resizedImage.src}
              alt={resizedImage.alt}
              ref={resizedImageRef}
              onLoad={handleResizedImageLoad}
              maxHeight="300px"
              maxWidth={{ base: "70vw", md: "50vw" }}
            />
          )}
          {resizedImage?.height &&
            resizedImage?.width &&
            resizedImage?.aspectRatio && (
              <>
                <Text
                  mt={4}
                  fontSize="xl"
                >{`Resized Image Dimensions: ${resizedImage.width}x${resizedImage.height}`}</Text>
                <Text
                  mt={4}
                  fontSize="xl"
                >{`Resized Image Aspect Ratio: ${resizedImage.aspectRatio[0]}x${resizedImage.aspectRatio[1]}`}</Text>
              </>
            )}
        </>
      )}
      <ExportAsPng
        componentRef={resizedImageRef}
        disabled={!resizedImage?.src}
        mt={4}
        w={{ base: "100%", md: "auto" }}
      />
    </Box>
  );
};

export default ImageResizer;
