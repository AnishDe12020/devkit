import {
  Input,
  Box,
  InputGroup,
  Button,
  Image,
  Text,
  Flex,
  chakra,
} from "@chakra-ui/react";
import { FiUpload } from "react-icons/fi";
import { useRef, useState, ChangeEvent } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import getAspectRatio from "@/utils/getAspectRatio";
import Resizer from "react-image-file-resizer";
import ExportAsPng from "@/components/Common/ExportAsPng";

interface IImage {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  aspectRatio?: number[];
  file?: File;
}

const ImageResizer = (): JSX.Element => {
  const inputElRef = useRef<HTMLInputElement>(null);
  const ogImageRef = useRef<HTMLImageElement>(null);
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
    console.log(file);
  };

  const handleOgImageLoad = (): void => {
    if (!ogImageRef.current) return;
    const ogImage = ogImageRef.current;
    const { width, height } = ogImage;
    const aspectRatio: number[] = getAspectRatio(width, height);
    setOgImage(prev => ({ ...prev, width, height, aspectRatio }));
  };

  const handleResizedImageLoad = (): void => {
    if (!resizedImageRef.current) return;
    const resizedImage = resizedImageRef.current;
    const { width, height } = resizedImage;
    const aspectRatio: number[] = getAspectRatio(width, height);
    setResizedImage(prev => ({ ...prev, width, height, aspectRatio }));
  };

  return (
    <Box>
      <InputGroup>
        <Button
          leftIcon={<FiUpload />}
          aria-label="Upload image"
          onClick={() => inputElRef.current?.click()}
          mb={4}
        >
          Upload Image
        </Button>
        <Input
          type="file"
          accept="image/*"
          multiple={false}
          hidden
          ref={inputElRef}
          onChange={handleFileChange}
        />
      </InputGroup>
      <>
        {ogImage?.src && (
          <Image
            src={ogImage.src}
            alt={ogImage.alt}
            ref={ogImageRef}
            onLoad={handleOgImageLoad}
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
          if (values.height <= 0) {
            errors.height = "Height must be greater than 0";
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

          Resizer.imageFileResizer(
            ogImage?.file as File,
            values.width,
            values.height,
            "JPEG",
            100,
            0,
            (uri: any) => {
              console.log(uri);
            },
            "base64"
          );

          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Flex alignContent="center" verticalAlign="center" my={4}>
              <InputGroup lineHeight="40px">
                <Input
                  as={Field}
                  placeholder="Width"
                  mr={2}
                  type="number"
                  name="width"
                />
                <ErrorMessage name="width" />
                <chakra.span
                  textAlign="center"
                  display="inline-block"
                  verticalAlign="middle"
                >
                  x
                </chakra.span>
                <Input
                  as={Field}
                  placeholder="Height"
                  ml={2}
                  type="number"
                  name="height"
                />
                <ErrorMessage name="height" />
              </InputGroup>
              <Button ml={2} p={2} isLoading={isSubmitting} type="submit">
                Resize
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
      {resizedImage && (
        <>
          {resizedImage?.src && (
            <Image
              src={resizedImage.src}
              alt={resizedImage.alt}
              ref={resizedImageRef}
              onLoad={handleResizedImageLoad}
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
      <ExportAsPng componentRef={resizedImageRef} />
    </Box>
  );
};

export default ImageResizer;
