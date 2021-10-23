export interface Tool {
  title: string;
  description: string;
  componentFileName: string;
  route: string;
}

export interface Category {
  id: number;
  name: string;
  children: Tool[];
}
