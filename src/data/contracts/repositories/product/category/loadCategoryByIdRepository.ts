import { CategoryEntity } from "@/domain/entities/product"

export interface LoadCategoryByIdRepository {
  loadById: (categoryId: string) => Promise<LoadCategoryByIdRepository.Result>
};

export namespace LoadCategoryByIdRepository {
  export type Result = CategoryEntity | null;
};

