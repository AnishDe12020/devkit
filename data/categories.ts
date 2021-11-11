import { Category } from "@/data/types";

import gradientGenerator from "@/data/tools/color/gradeintGenerator";
import ImageResizer from "@/data/tools/images/imageResizer";

const categories: Category[] = [
  {
    id: 1,
    name: "Color",
    children: [gradientGenerator],
    slug: "color",
    directory: "Color",
  },
  {
    id: 2,
    name: "Image",
    children: [ImageResizer],
    slug: "image",
    directory: "Image",
  },
];

export default categories;
