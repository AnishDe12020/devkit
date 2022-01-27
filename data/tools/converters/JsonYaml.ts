import { Tool } from "@/data/types";

const JsonYaml: Tool = {
  id: 3,
  name: "JSON <> YAML",
  description: "Converts between JSON and YAML",
  componentFileName: "JsonYaml",
  slug: "json-yaml",
  categorySlug: "converters",
  acceptedDataTypes: ["json", "yaml"],
};

export default JsonYaml;
