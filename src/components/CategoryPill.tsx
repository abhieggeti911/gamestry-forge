
import { LucideIcon } from "lucide-react";

interface Category {
  name: string;
  icon: LucideIcon;
  color: string;
}

interface CategoryPillProps {
  category: Category;
}

const CategoryPill = ({ category }: CategoryPillProps) => {
  const Icon = category.icon;

  return (
    <div className="category-pill flex items-center space-x-2">
      <Icon className={`h-4 w-4 ${category.color}`} />
      <span>{category.name}</span>
    </div>
  );
};

export default CategoryPill;
