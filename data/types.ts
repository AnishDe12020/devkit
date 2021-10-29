export interface Tool {
  id: number;
  name: string;
  description: string;
  componentFileName: string;
  slug: string;
}

export interface Category {
  id: number;
  name: string;
  children: Tool[];
  slug: string;
  directory: string;
}
