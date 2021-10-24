import { Category } from "@/data/types";

import home from "@/data/tools/home";

import tool1 from "@/data/tools/tool1";
import tool2 from "@/data/tools/tool2";
import tool3 from "@/data/tools/tool3";

const categories: Category[] = [
  {
    id: 1,
    name: "Home",
    children: [home],
    slug: "/",
  },
  {
    id: 2,
    name: "Tools",
    children: [tool1, tool2, tool3],
    slug: "tools",
  },
];

export default categories;
