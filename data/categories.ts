import { Category } from "@/data/types";

import gradientGenerator from "@/data/tools/color/gradeintGenerator";
import ImageResizer from "@/data/tools/images/imageResizer";
import MP4ToGIF from "@/data/tools/video/mp4ToGif";
import GIFToMP4 from "@/data/tools/video/gifToMP4";
import RegexTester from "@/data/tools/testers/regexTester";
import ColorContrastChecker from "@/data/tools/color/colorContrastChecker";

const categories: Category[] = [
  {
    id: 1,
    name: "Color",
    children: [gradientGenerator, ColorContrastChecker],
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
  {
    id: 3,
    name: "Video",
    children: [MP4ToGIF, GIFToMP4],
    slug: "video",
    directory: "Video",
  },
  {
    id: 4,
    name: "Testers",
    children: [RegexTester],
    slug: "testers",
    directory: "Testers",
  },
];

export default categories;
