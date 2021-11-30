import { Button, Textarea, Flex, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";

const Base64EncoderDecoder = () => {
  const router = useRouter();

  const [input, setInput] = useState<string>(
    (router?.query.input as string) || ""
  );
  const [output, setOutput] = useState<string>("");

  const toast = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const isBase64 = (str: string): boolean => {
    const base64regex =
      /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    return base64regex.test(str);
  };

  const handleBase64EncodeClick = () => {
    if (!input) return toast({ title: "No input", status: "error" });
    if (isBase64(input))
      return toast({ title: "Input is already base64", status: "error" });
    const encoded = Buffer.from(input).toString("base64");
    setOutput(encoded);
  };

  const handleBase64DecodeClick = () => {
    if (!input) return toast({ title: "No input", status: "error" });
    if (!isBase64(input))
      return toast({ title: "Input is not base64", status: "error" });
    const decoded = Buffer.from(input, "base64").toString();
    setOutput(decoded);
  };

  return (
    <>
      <Textarea
        value={input}
        onChange={handleChange}
        placeholder="Input (String or Base64)"
      />
      <Flex my={4}>
        <Button
          mr={4}
          w={{ base: "100%", md: "auto" }}
          onClick={handleBase64EncodeClick}
        >
          Encode
        </Button>
        <Button
          w={{ base: "100%", md: "auto" }}
          value={output}
          onClick={handleBase64DecodeClick}
        >
          Decode
        </Button>
      </Flex>
      <Textarea value={output} placeholder="Output" isReadOnly />
    </>
  );
};

export default Base64EncoderDecoder;
