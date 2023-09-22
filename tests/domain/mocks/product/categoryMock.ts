import { CategoryEntity } from "@/domain/entities/product";

export const mockCategoryEntity = (): CategoryEntity => ({
  id: 'any_id',
  name: 'any_name',
  description: 'any_description',
  isActive: true,
});

