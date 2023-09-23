import { CategoryEntity } from "@/domain/entities/product";

export const mockCategoryEntity = (): CategoryEntity => {
  const category = new CategoryEntity(
    'any_id',
    'any_name',
    'any_description',
    true,
  );

  return category;
};

