import { LoadProducts } from '@/domain/usecases/product';
import { LoadProductsRepository } from '@/data/contracts/repositories/product';

export class DbLoadProducts implements LoadProducts {
  constructor(
    private readonly loadProductsRepository: LoadProductsRepository,
  ) {}

  async load(): Promise<LoadProducts.Result> {
    return this.loadProductsRepository.loadAll();
  }
}

