import {
  LoadProductsRepository,
  LoadProductByIdRepository,
  DeleteProductRepository,
} from '@/data/contracts/repositories/product';
import { mockProductEntity } from '@/tests/domain/mocks/product';

export class LoadProductsRepositorySpy implements LoadProductsRepository {
  result: LoadProductsRepository.Result = [
    mockProductEntity(),
    mockProductEntity(),
  ];

  async loadAll(): Promise<LoadProductsRepository.Result> {
    return this.result;
  }
}

export class LoadProductByIdRepositorySpy implements LoadProductByIdRepository {
  productId: string = "";
  result: LoadProductByIdRepository.Result = mockProductEntity()

  async loadById(productId: string): Promise<LoadProductByIdRepository.Result> {
    this.productId = productId;

    return this.result;
  }
}

export class DeleteProductRepositorySpy implements DeleteProductRepository {
  productId: string = "";

  async delete(productId: string): Promise<DeleteProductRepository.Result> {
    this.productId = productId;

    return;
  }
}

