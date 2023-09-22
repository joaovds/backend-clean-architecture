import { CategoryEntity } from "@/domain/entities/product";

export interface LoadCategoriesRepository {
  loadAll: () => Promise<LoadCategoriesRepository.Result>;
};

export namespace LoadCategoriesRepository {
  export type Result = CategoryEntity[];
};

