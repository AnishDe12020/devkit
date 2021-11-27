import {
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Input,
  Box,
  Checkbox,
  CheckboxGroup,
  Grid,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const RegexTester = () => {
  const [regex, setRegex] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [testError, setTestError] = useState<string>("");
  const [regexMatch, setRegexMatch] = useState<string[]>([]);
  const [flags, setFlags] = useState<string[]>(["g"]);

  useEffect(() => {
    if (regex) {
      try {
        setTestError("");
        const match = text.match(new RegExp(regex, flags.join("")));
        console.log(match);
        setRegexMatch(match ? match : []);
      } catch (e: any) {
        setTestError(e.message);
      }
    }
  }, [text, regex, flags]);
  return (
    <>
      <InputGroup>
        <InputLeftAddon>/</InputLeftAddon>
        <Input value={regex} onChange={e => setRegex(e.target.value)} />
        <InputRightAddon>{`/${flags.join("")}`}</InputRightAddon>
      </InputGroup>

      <CheckboxGroup
        colorScheme="green"
        defaultValue={flags}
        onChange={value => setFlags(value as string[])}
      >
        <Grid mt={2} templateColumns="repeat(auto-fit, minmax(100px, 1fr))">
          <Checkbox value="g">Global (g)</Checkbox>
          <Checkbox value="i">Case-insensitive (i)</Checkbox>
          <Checkbox value="m">Multi-line (m)</Checkbox>
          <Checkbox value="s">Dotall (s)</Checkbox>
          <Checkbox value="u">Unicode (u)</Checkbox>
        </Grid>
      </CheckboxGroup>
      {testError && (
        <Box my={2} color="red.500">
          {testError}
        </Box>
      )}
      <Textarea
        placeholder="Text to test against"
        value={text}
        onChange={e => setText(e.target.value)}
        my={4}
        h="200px"
      />
      <Textarea
        my={2}
        value={regexMatch.length >= 1 ? regexMatch.join("\n") : ""}
        isReadOnly
        h="400px"
        placeholder="Match"
      />
    </>
  );
};

export default RegexTester;
