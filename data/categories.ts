import { Category } from "@/data/types";

import home from "@/data/tools/home";

const categories: Category[] = [
  {
    id: 1,
    name: "Home",
    children: [home],
    slug: "/",
  },
];

export default categories;
