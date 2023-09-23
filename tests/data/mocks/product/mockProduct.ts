import {
  LoadProductsRepository,
  LoadProductByIdRepository,
} from '@/data/contracts/repositories/product';
import { ProductEntity } from '@/domain/entities/product';
import { mockCategoryEntity } from '@/tests/domain/mocks/product';

export class LoadProductsRepositorySpy implements LoadProductsRepository {
  result: LoadProductsRepository.Result;

  constructor() {
    const product = new ProductEntity(
      'any_id',
      'any_name',
      100,
      'any_sku',
      true
    );
    product.addCategory(mockCategoryEntity());

    this.result = [product];
  };

  async loadAll(): Promise<LoadProductsRepository.Result> {
    return this.result;
  }
}

export class LoadProductByIdRepositorySpy implements LoadProductByIdRepository {
  productId: string = "";
  result: LoadProductByIdRepository.Result;

  constructor() {
    const product = new ProductEntity(
      'any_id',
      'any_name',
      100,
      'any_sku',
      true
    );
    product.addCategory(mockCategoryEntity());

    this.result = product;
  };

  async loadById(productId: string): Promise<LoadProductByIdRepository.Result> {
    this.productId = productId;

    return this.result;
  }
}

