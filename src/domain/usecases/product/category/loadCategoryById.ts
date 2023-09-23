import { CategoryEntity } from "@/domain/entities/product";

export interface LoadCategoryById {
  load: (categoryId: string) => Promise<LoadCategoryById.Result>;
};

export namespace LoadCategoryById {
  export type Result = CategoryEntity;
};

