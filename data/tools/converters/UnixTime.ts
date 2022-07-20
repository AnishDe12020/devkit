import { Tool } from "@/data/types";

const UnixTime: Tool = {
  id: 4,
  name: "UnixTime Converter",
  description: "Converts between UnixTime and human readable",
  componentFileName: "UnixTime",
  slug: "unixtime",
  categorySlug: "converters",
  acceptedDataTypes: ["text"],
};

export default UnixTime;
