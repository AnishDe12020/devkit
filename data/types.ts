export interface Tool {
  id: number;
  name: string;
  description: string;
  componentFileName: string;
  slug: string;
  categorySlug: string;
  acceptedDataTypes?: DataTypes[];
}

export interface Category {
  id: number;
  name: string;
  children: Tool[];
  slug: string;
  directory: string;
}

export type DataTypes =
  | "text"
  | "base64"
  | "hex"
  | "image"
  | "gif"
  | "mp4"
  | "regex"
  | "html"
  | "json"
  | "yaml"
  | "jsx";
