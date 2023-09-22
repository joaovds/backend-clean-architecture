import { CategoryEntity } from "@/domain/entities/product";

export interface LoadCategories {
  load: () => Promise<LoadCategories.Result>;
};

export namespace LoadCategories {
  export type Params = void;

  export type Result = CategoryEntity[];
};

