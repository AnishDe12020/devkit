import { Category } from "@/data/types";
import SidebarLink from "@/components/SidebarContent/SidebarLink";
import { Box, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface CategoryProps {
  category: Category;
  onClose: () => void;
}

const CategoryComponent = ({
  category,
  onClose,
}: CategoryProps): JSX.Element => {
  const categoryTitle = useColorModeValue("gray.800", "gray.200");
  const router = useRouter();
  return (
    <Box mt={2}>
      <VStack align="start">
        <Text
          color={categoryTitle}
          fontSize={["lg", "xl"]}
          ml={{ base: 1, md: 2 }}
          fontWeight="semibold"
        >
          {category.name}
        </Text>
        {category.children.map(tool => (
          <SidebarLink
            key={tool.id}
            href={`/${category.slug}/${tool.slug}`}
            active={tool.slug === router.query?.slug?.[1]}
            onClose={onClose}
          >
            {tool.name}
          </SidebarLink>
        ))}
      </VStack>
    </Box>
  );
};

export default CategoryComponent;
