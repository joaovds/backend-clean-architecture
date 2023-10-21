export interface DeleteCategoryRepository {
  delete: (categoryId: string) => Promise<DeleteCategoryRepository.Result>
};

export namespace DeleteCategoryRepository {
  export type Result = void;
};

