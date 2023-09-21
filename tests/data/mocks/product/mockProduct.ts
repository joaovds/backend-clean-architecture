import {
  LoadProductsRepository,
  LoadProductByIdRepository,
} from '@/data/contracts/repositories/product';

export class LoadProductsRepositorySpy implements LoadProductsRepository {
  result: LoadProductsRepository.Result = [
    {
      id: 'any_id',
      name: 'any_name',
      price: 0,
      sku: 'any_sku',
      isActive: true,
    },
  ];

  async loadAll(): Promise<LoadProductsRepository.Result> {
    return this.result;
  }
}

export class LoadProductByIdRepositorySpy implements LoadProductByIdRepository {
  result: LoadProductByIdRepository.Result = {
    id: 'any_id',
    name: 'any_name',
    price: 0,
    sku: 'any_sku',
    isActive: true,
  };

  async loadById(productId: string): Promise<LoadProductByIdRepository.Result> {
    return this.result;
  }
}

