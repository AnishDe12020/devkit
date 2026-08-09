import { Flex, Box, Button, Text } from "@chakra-ui/react";
import { Editor, EditorChange } from "codemirror";
import { Controlled } from "react-codemirror2";
import { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

const HtmlToJsx = () => {
  const [html, setHtml] = useState<string>("");
  const [jsx, setJsx] = useState<string>("");

  const handlechange = (editor: Editor, data: EditorChange, value: string) => {
    setHtml(value);
  };

  const convert = async () => {
    const HTMLToJSX = (await import("@/utils/html-to-jsx")).default;
    const converter = new HTMLToJSX({
      createClass: false,
    });
    setJsx(converter.convert(html));
  };

  return (
    <div>
      <Flex flexWrap="wrap" w="full">
        <Box w={{ base: "full", md: "45%" }} flexBasis={{ base: "100%", md: "45%" }} mr={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }}>
          <Text fontSize="3xl" mb="10px" textAlign="center">
            Html
          </Text>
          <Controlled
            onBeforeChange={handlechange}
            value={html}
            options={{
              lineNumbers: true,
              mode: "xml",
              theme: "material",
            }}
          />
        </Box>
        <Box w={{ base: "full", md: "45%" }} flexBasis={{ base: "100%", md: "45%" }}>
          <Text fontSize="3xl" mb="10px" textAlign="center">
            JSX
          </Text>
          <Controlled
            onBeforeChange={handlechange}
            value={jsx}
            options={{
              lineNumbers: true,
              mode: "xml",
              readOnly: true,
              theme: "material",
            }}
          />
        </Box>
      </Flex>
      <Button w="full" mt={4} onClick={convert}>
        Convert To Jsx
      </Button>
    </div>
  );
};

export default HtmlToJsx;
