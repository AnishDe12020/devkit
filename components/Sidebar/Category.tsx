import { Category } from "@/data/types";
import SidebarLink from "@/components/Sidebar/SidebarLink";
import { Box, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface CategoryProps {
  category: Category;
}

const CategoryComponent = ({ category }: CategoryProps): JSX.Element => {
  const categoryTitle = useColorModeValue("green.600", "green.300");
  const router = useRouter();
  return (
    <Box mt={2}>
      <VStack align="start">
        <Text color={categoryTitle} fontSize="3xl" ml={2} fontWeight="semibold">
          {category.name}
        </Text>
        {category.children.map(tool => (
          <SidebarLink
            key={tool.id}
            href={`/${category.slug}/${tool.slug}`}
            active={tool.slug === router.query?.slug?.[1]}
          >
            {tool.name}
          </SidebarLink>
        ))}
      </VStack>
    </Box>
  );
};

export default CategoryComponent;
