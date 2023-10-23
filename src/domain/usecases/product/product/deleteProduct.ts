export interface DeleteProduct {
  delete: (productId: string) => Promise<DeleteProduct.Result>;
};

export namespace DeleteProduct {
  export type Result = void;
};

