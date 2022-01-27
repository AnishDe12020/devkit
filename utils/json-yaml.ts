import yaml from "js-yaml";

export const toJson = (src: string, indent: number): string => {
  return JSON.stringify(yaml.load(src), null, indent);
};

export const toYaml = (src: string, indent: number): string => {
  const opt = { indent: indent } as yaml.DumpOptions;
  return yaml.dump(JSON.parse(src), opt);
};
