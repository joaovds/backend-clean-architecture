import { UpdateCategory } from "@/domain/usecases/product";

export interface UpdateCategoryRepository {
  update: (params: UpdateCategoryRepository.Params) => Promise<UpdateCategoryRepository.Result>;
};

export namespace UpdateCategoryRepository {
  export type Params = UpdateCategory.Params;

  export type Result = UpdateCategory.Result;
};

