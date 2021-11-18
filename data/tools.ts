import categories from "@/data/categories";
import { Tool } from "@/data/types";

const tools: Tool[] = [];

categories.map(category => {
  category.children.map(tool => {
    tools.push(tool);
  });
});

export default tools;
