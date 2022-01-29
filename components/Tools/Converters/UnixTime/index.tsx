import {
  VStack,
  HStack,
  Table,
  Tbody,
  Tr,
  Td,
  NumberInput,
  NumberInputField,
  FormControl,
  FormLabel,
  useClipboard,
} from "@chakra-ui/react";
import { FiCopy } from "react-icons/fi";
import { useState, useEffect } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

import { PrecisionType, getPresision, getDate } from "@/utils/unixtime";
import CopyIconButton from "@/components/Common/CopyIconButton";

const localTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;

const UnixTime = () => {
  const [unixTime, setUnixTime] = useState<number>();
  const [unixUTC, setUnixUTC] = useState<string>("");
  const [unixLocal, setUnixLocal] = useState<string>("");
  const [precision, setPrecision] = useState<PrecisionType>("seconds");

  const [year, setYear] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [day, setDay] = useState<number>(0);
  const [hour, setHour] = useState<number>(0);
  const [min, setMin] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);
  const [dateLocal, setDateLocal] = useState<string>(""); // used for copy

  const unixUtcCopy = useClipboard(unixUTC);
  const unixLocalCopy = useClipboard(unixLocal);
  const dateLocalCopy = useClipboard(dateLocal);

  const handleUnixTimeChange = (valueAsString: string, value: number) =>
    setUnixTime(value);
  const handleYearChange = (valueAsString: string, value: number) =>
    setYear(value);
  const handleMonthChange = (valueAsString: string, value: number) =>
    setMonth(value);
  const handleDayChange = (valueAsString: string, value: number) =>
    setDay(value);
  const handlehourChange = (valueAsString: string, value: number) =>
    setHour(value);
  const handleMinChange = (valueAsString: string, value: number) =>
    setMin(value);
  const handleSecondhange = (valueAsString: string, value: number) =>
    setSecond(value);

  // use current time initially.
  useEffect(() => {
    const now = new Date();
    setUnixTime(Math.floor(now.getTime() / 1000.0));
    setYear(now.getFullYear());
    setMonth(now.getMonth() + 1);
    setDay(now.getDate());
    setHour(now.getHours());
    setMin(now.getMinutes());
    setSecond(now.getSeconds());
  }, []);

  // UnixTime -> String
  useEffect(() => {
    if (!unixTime) {
      return;
    }
    const precision = getPresision(unixTime);
    setPrecision(precision);

    const d = getDate(unixTime, precision);
    if (!d) {
      return;
    }
    setUnixUTC(d.toLocaleString(navigator.language, { timeZone: "UTC" }));
    setUnixLocal(d.toLocaleString(navigator.language, { timeZone: localTZ }));
  }, [unixTime]);

  // Date -> UnixTime
  useEffect(() => {
    const d = new Date(year, month - 1, day, hour, min, second);
    setDateLocal((d.getTime() / 1000.0).toString());
  }, [year, month, day, hour, min, second]);

  return (
    <VStack spacing="5">
      {/* UnixTime -> Human readable Box */}
      <VStack w="100%" align="left">
        <FormControl as="fieldset">
          <FormLabel as="legend">From UnixTime</FormLabel>
          <NumberInput value={unixTime} min={1} onChange={handleUnixTimeChange}>
            <NumberInputField />
          </NumberInput>
        </FormControl>
        {/* Result table */}
        <Table variant="simple" w="45%" align="left">
          <Tbody>
            <Tr>
              <Td bgColor={"rgba(0,0,0,.04)"}>UTC</Td>
              <Td>{unixUTC}</Td>
              <td>
                <CopyIconButton
                  ariaLabel="Copy"
                  icon={<FiCopy />}
                  onCopy={unixUtcCopy.onCopy}
                  hasCopied={unixUtcCopy.hasCopied}
                />
              </td>
            </Tr>
            <Tr>
              <Td bgColor={"rgba(0,0,0,.04)"}>Local</Td>
              <Td>{unixLocal}</Td>
              <td>
                <CopyIconButton
                  ariaLabel="Copy"
                  icon={<FiCopy />}
                  onCopy={unixLocalCopy.onCopy}
                  hasCopied={unixLocalCopy.hasCopied}
                />
              </td>
            </Tr>
            <Tr>
              <Td bgColor={"rgba(0,0,0,.04)"}>Presision</Td>
              <Td>{precision}</Td>
            </Tr>
          </Tbody>
        </Table>
      </VStack>
      {/* Human readable -> UnixTime Box */}
      <VStack w="100%" align="left">
        <FormControl as="fieldset">
          <FormLabel as="legend">From Date</FormLabel>
          <HStack spacing="2" marginLeft={"auto"}>
            <VStack aligh="left">
              <FormLabel as="legend">Year</FormLabel>
              <NumberInput
                value={year}
                size="sm"
                min={0}
                max={9999}
                onChange={handleYearChange}
              >
                <NumberInputField />
              </NumberInput>
            </VStack>
            <VStack>
              <FormLabel as="legend">Month</FormLabel>
              <NumberInput
                value={month}
                size="sm"
                min={1}
                max={12}
                onChange={handleMonthChange}
              >
                <NumberInputField />
              </NumberInput>
            </VStack>
            <VStack>
              <FormLabel as="legend">Day</FormLabel>
              <NumberInput
                size="sm"
                value={day}
                min={1}
                max={31}
                onChange={handleDayChange}
              >
                <NumberInputField />
              </NumberInput>
            </VStack>
            <VStack>
              <FormLabel as="legend">Hour(24)</FormLabel>
              <NumberInput
                value={hour}
                size="sm"
                min={0}
                max={23}
                onChange={handlehourChange}
              >
                <NumberInputField />
              </NumberInput>
            </VStack>
            <VStack>
              <FormLabel as="legend">Minutes</FormLabel>
              <NumberInput
                value={min}
                size="sm"
                min={0}
                max={59}
                onChange={handleMinChange}
              >
                <NumberInputField />
              </NumberInput>
            </VStack>
            <VStack>
              <FormLabel as="legend">Seconds</FormLabel>
              <NumberInput
                value={second}
                size="sm"
                min={0}
                max={59}
                onChange={handleSecondhange}
              >
                <NumberInputField />
              </NumberInput>
            </VStack>
          </HStack>
        </FormControl>
        {/* Result table */}
        <Table variant="simple" w="45%" align="left">
          <Tbody>
            <Tr>
              <Td bgColor={"rgba(0,0,0,.04)"}>UnixTime</Td>
              <Td>{dateLocal}</Td>
              <td>
                <CopyIconButton
                  ariaLabel="Copy"
                  icon={<FiCopy />}
                  onCopy={dateLocalCopy.onCopy}
                  hasCopied={dateLocalCopy.hasCopied}
                />
              </td>
            </Tr>
          </Tbody>
        </Table>
      </VStack>
    </VStack>
  );
};

export default UnixTime;
