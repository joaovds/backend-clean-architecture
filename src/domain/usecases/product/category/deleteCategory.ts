export interface DeleteCategory {
  delete: (categoryId: string) => Promise<DeleteCategory.Result>;
};

export namespace DeleteCategory {
  export type Result = void;
};

