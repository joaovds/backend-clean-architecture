import { ProductEntity } from "@/domain/entities/product";

export interface LoadProductById {
  load: (productId: string) => Promise<LoadProductById.Result>;
};

export namespace LoadProductById {
  export type Result = ProductEntity;
};

