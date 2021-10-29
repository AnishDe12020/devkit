import { Category } from "@/data/types";

import gradientGenerator from "@/data/tools/color/gradeintGenerator";

const categories: Category[] = [
  {
    id: 1,
    name: "Color",
    children: [gradientGenerator],
    slug: "color",
    directory: "Color",
  },
];

export default categories;
