import { CategoryEntity } from '@/domain/entities/product';

export interface AddCategory {
  add: (params: AddCategory.Params) => Promise<AddCategory.Result>;
};

export namespace AddCategory {
  export type Params = CategoryEntity;

  export type Result = {
    id: string;
  };
};

