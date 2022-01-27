import {
  Flex,
  Box,
  IconButton,
  VStack,
  HStack,
  Text,
  Heading,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  useClipboard,
} from "@chakra-ui/react";
import { CopyIcon, CloseIcon } from "@chakra-ui/icons";
import { Editor, EditorChange } from "codemirror";
import { Controlled } from "react-codemirror2";
import { useState, useEffect } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

type ConvertType = "toYAML" | "toJSON";
const defaultIndent = 2;

const JsonYaml = () => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [indent, setIndent] = useState<number>(defaultIndent);
  const [convertType, setConvertType] = useState<ConvertType>("toYAML");
  const { onCopy } = useClipboard(output);

  const handleChange = (editor: Editor, data: EditorChange, value: string) => {
    setInput(value);
  };

  useEffect(() => {
    const f = async () => {
      const { toJson, toYaml } = await import("@/utils/json-yaml");
      if (input === "") {
        setOutput("");
        return;
      }
      try {
        if (convertType === "toYAML") {
          setOutput(toYaml(input, indent));
        } else {
          setOutput(toJson(input, indent));
        }
      } catch (e: any) {
        setOutput(e.message);
      }
    };
    f();
  }, [input, indent, convertType]);

  return (
    <VStack spacing="5">
      <HStack spacing="5" w="100%">
        {/* Input Box */}
        <Box w="45%">
          <Flex justifyContent={"space-between"}>
            <Text fontSize="2xl" mb="10px" ml="45%">
              Input
            </Text>
            <HStack spacing="2">
              <IconButton
                aria-label="Clear"
                icon={<CloseIcon />}
                onClick={e => setInput("")}
              />
            </HStack>
          </Flex>
          <Controlled
            onBeforeChange={handleChange}
            value={input}
            options={{
              lineNumbers: true,
              mode: convertType === "toYAML" ? "json" : "yaml",
              theme: "material",
            }}
          />
        </Box>
        {/* Output Box */}
        <Box w="45%">
          <Flex justifyContent={"space-between"}>
            <Text fontSize="2xl" mb="10px" ml="45%">
              Output
            </Text>
            <HStack spacing="2">
              <IconButton
                aria-label="Copy"
                icon={<CopyIcon />}
                onClick={onCopy}
              />
            </HStack>
          </Flex>
          <Controlled
            onBeforeChange={handleChange}
            value={output}
            options={{
              lineNumbers: true,
              mode: convertType === "toYAML" ? "yaml" : "json",
              readOnly: true,
              theme: "material",
            }}
          />
        </Box>
      </HStack>

      {/* Configuration part */}
      <Flex w="100%">
        <VStack spacing="3">
          <Heading size="lg">Configuration</Heading>

          <FormControl as="fieldset">
            <FormLabel as="legend">Convert target</FormLabel>
            <RadioGroup
              value={convertType}
              onChange={value => setConvertType(value as ConvertType)}
            >
              <HStack>
                <Radio value="toYAML">To YAML</Radio>
                <Radio value="toJSON">To JSON</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>

          <FormControl as="fieldset">
            <FormLabel as="legend">Indent</FormLabel>
            <RadioGroup
              onChange={value => setIndent(Number(value))}
              value={indent.toString()}
            >
              <HStack direction="row">
                <Radio value="2">2</Radio>
                <Radio value="4">4</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
        </VStack>
      </Flex>
    </VStack>
  );
};

export default JsonYaml;
