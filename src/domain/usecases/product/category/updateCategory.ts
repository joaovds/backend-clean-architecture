import { CategoryEntity } from '@/domain/entities/product';

export interface UpdateCategory {
  update: (params: UpdateCategory.Params) => Promise<UpdateCategory.Result>;
};

export namespace UpdateCategory {
  export type Params = Partial<CategoryEntity>;

  export type Result = void;
};

