import { Box, Typography } from "@mui/material";
import ChipBox from "../../../../components/designSystems/ChipBox";

interface CategoryFilterProps {
  categories: { id: string; name: string }[];
  toggleCategory: (categoryId: string) => void;
  hiddenCategories: Set<string>;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  toggleCategory,
  hiddenCategories,
}) => {
  return (
    <Box sx={{ display: "flex", gap: 1, mb: 2, flexWrap: "wrap" }}>
      {categories && categories.length > 0 && (
        <Typography variant="caption">فیلترها: </Typography>
      )}
      {categories.map((category) => (
        <ChipBox
          key={category.id}
          title={category.name}
          isSelected={!hiddenCategories.has(category.id)}
          onClick={() => toggleCategory(category.id)}
        />
      ))}
    </Box>
  );
};

export default CategoryFilter;
