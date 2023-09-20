import { ProductEntity } from '@/domain/entities/product';

export interface LoadProductsRepository {
  loadAll: () => Promise<LoadProductsRepository.Result>;
};

export namespace LoadProductsRepository {
  export type Result = ProductEntity[];
};

