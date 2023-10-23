export interface DeleteProductRepository {
  delete: (productId: string) => Promise<DeleteProductRepository.Result>
};

export namespace DeleteProductRepository {
  export type Result = void;
};

