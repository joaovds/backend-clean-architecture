import { LoadProductById } from '@/domain/usecases/product';
import { LoadProductByIdRepository } from '@/data/contracts/repositories/product';

export class DbLoadProductById implements LoadProductById {
  constructor(
    private readonly loadProductByIdRepository: LoadProductByIdRepository,
  ) {}

  async load(productId: string): Promise<LoadProductById.Result> {
    return this.loadProductByIdRepository.loadById(productId);
  }
}
