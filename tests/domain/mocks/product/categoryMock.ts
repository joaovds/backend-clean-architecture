import crypto from 'node:crypto';
import { CategoryEntity } from "@/domain/entities/product";

export const mockCategoryEntity = (): CategoryEntity => {
  const categoryId = crypto.randomUUID();

  const category = new CategoryEntity(
    categoryId,
    'any_name',
    'any_description',
    true,
  );

  return category;
};

export const mockUpdateCategoryEntity = (): Partial<CategoryEntity> => {
  const category = {
    name: 'update_any_name',
    description: 'update_any_description',
  };

  return category;
};

