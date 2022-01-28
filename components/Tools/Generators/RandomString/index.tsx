import {
  Flex,
  Box,
  VStack,
<<<<<<< HEAD
=======
  HStack,
>>>>>>> feat: add random string generator
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormControl,
  FormLabel,
  useClipboard,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import { Controlled } from "react-codemirror2";
import { FiCopy } from "react-icons/fi";

import { useState, useEffect } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

import CopyIconButton from "@/components/Common/CopyIconButton";
import range from "@/utils/range";

const defaultLength = 13;
const defaultRow = 5;
const maxLength = 120;

const misreadRegex = /[iloqILOQ019!]/g;
const poolNumber = "0123456789";
const poolLower = "abcdefghijklmnopqrstuvwxyz";
const poolUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const poolSpecial = "!@#$%^&*";

const RandomString = () => {
  const [output, setOutput] = useState<string>("");
  const [optLength, setOptLength] = useState<number>(defaultLength);
  const [optRow, setOptRow] = useState<number>(defaultRow);
  const [flags, setFlags] = useState<string[]>([
    "number",
    "upper",
    "lower",
    "special",
  ]);

  const { hasCopied, onCopy } = useClipboard(output);

  const handleOptLengthChange = (valueAsString: string, value: number) =>
    setOptLength(value);
  const handleOptRowChange = (valueAsString: string, value: number) =>
    setOptRow(value);

  useEffect(() => {
    const f = async () => {
      if (flags.length === 0) {
        return "";
      }
<<<<<<< HEAD
      // create character pool
=======
      // create charactor pool
>>>>>>> feat: add random string generator
      let pool = flags.reduce((p: string, flag: string) => {
        switch (flag) {
          case "number":
            return p + poolNumber;
          case "upper":
            return p + poolUpper;
          case "lower":
            return p + poolLower;
          case "special":
            return p + poolSpecial;
          default:
            return p;
        }
      }, "");
      if (flags.includes("avoid")) {
        pool = pool.replace(misreadRegex, "");
      }
      const len = pool.length;
      const out = range(1, optRow)
        .map(() => {
          return range(1, optLength)
            .map(() => {
              // pick random char from pool
              return pool.charAt(Math.floor(Math.random() * len));
            })
            .join("");
        })
        .join("\n");
      setOutput(out);
    };
    f();
  }, [optLength, optRow, flags]);

  return (
    <VStack spacing="5">
      {/* Output Box */}
      <Box flexGrow="1" w="100%">
        <Flex>
          <Text fontSize="lg" marginLeft={"5px"}>
            Output
          </Text>
          <Box margin={"0 3px 3px auto"}>
            <CopyIconButton
              ariaLabel="Copy"
              icon={<FiCopy />}
              onCopy={onCopy}
              hasCopied={hasCopied}
              size="sm"
            />
          </Box>
        </Flex>
        <Controlled
          onBeforeChange={() => {}}
          value={output}
          options={{
            lineNumbers: true,
            readOnly: true,
            mode: "text",
            theme: "material",
          }}
        />
      </Box>
      {/* Configuration part */}
      <Flex w="100%">
        <VStack spacing="3">
          <FormControl as="fieldset">
<<<<<<< HEAD
=======
            {/* min/max settings */}
>>>>>>> feat: add random string generator
            <FormLabel as="legend">Length</FormLabel>
            <NumberInput
              value={optLength}
              min={1}
              max={maxLength}
              onChange={handleOptLengthChange}
<<<<<<< HEAD
              ml="5px"
=======
>>>>>>> feat: add random string generator
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <FormLabel as="legend">Row</FormLabel>
            <NumberInput
              value={optRow}
              min={1}
              max={maxLength}
              onChange={handleOptRowChange}
<<<<<<< HEAD
              ml="5px"
=======
>>>>>>> feat: add random string generator
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
<<<<<<< HEAD
          </FormControl>
          {/* character settings */}
          <FormControl as="fieldset">
            <FormLabel as="legend">Character</FormLabel>
            <VStack spacing={2} align={"left"} ml="5%">
=======
            {/* charactor settings */}
            <FormLabel as="legend">Charactors</FormLabel>
            <VStack spacing={2} align={"left"}>
>>>>>>> feat: add random string generator
              <CheckboxGroup
                defaultValue={flags}
                onChange={value => setFlags(value as string[])}
              >
<<<<<<< HEAD
=======
                {" "}
>>>>>>> feat: add random string generator
                <Checkbox defaultIsChecked value="number">
                  0-9
                </Checkbox>
                <Checkbox defaultIsChecked value="lower">
                  a-z
                </Checkbox>
                <Checkbox defaultIsChecked value="upper">
                  A-Z
                </Checkbox>
                <Checkbox defaultIsChecked value="special">
                  !@#$%^&*
                </Checkbox>
                <Checkbox value="avoid">
<<<<<<< HEAD
                  Avoid letters that can be mistaken (e.g.: iloqILOQ019!)
=======
                  Avoid misreading chars (iloqILOQ019!)
>>>>>>> feat: add random string generator
                </Checkbox>
              </CheckboxGroup>
            </VStack>
          </FormControl>
        </VStack>
      </Flex>
    </VStack>
  );
};

export default RandomString;
