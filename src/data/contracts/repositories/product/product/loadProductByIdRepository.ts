import { ProductEntity } from '@/domain/entities/product';

export interface LoadProductByIdRepository {
  loadById: (productId: string) => Promise<LoadProductByIdRepository.Result>;
};

export namespace LoadProductByIdRepository {
  export type Result = ProductEntity;
};

