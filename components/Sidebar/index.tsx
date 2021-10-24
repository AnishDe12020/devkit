import { Category } from "@/data/types";
import { Box, Heading } from "@chakra-ui/react";

interface SidebarProps {
  categories: Category[];
}

const Sidebar = ({ categories }: SidebarProps): JSX.Element => {
  return (
    <Box alignItems="center">
      <Heading>DevKit</Heading>

      <Box>
        {categories.map((category) => (
          <Box key={category.id}>
            <Heading>{category.name}</Heading>
            {category.children.map((tool) => (
              <Box key={tool.id}>{tool.name}</Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
