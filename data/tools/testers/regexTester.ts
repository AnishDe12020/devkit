import { Tool } from "@/data/types";

const RegexTester: Tool = {
  id: 1,
  name: "Regex Tester",
  description: "Tests regular expressions against a given string",
  componentFileName: "RegexTester",
  slug: "regex",
  categorySlug: "testers",
  acceptedDataTypes: ["regex", "text"],
};

export default RegexTester;
