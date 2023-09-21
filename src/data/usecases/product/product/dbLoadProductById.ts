import { LoadProductById } from '@/domain/usecases/product';
import { MissingParamError } from '@/domain/errors/shared';
import { LoadProductByIdRepository } from '@/data/contracts/repositories/product';

export class DbLoadProductById implements LoadProductById {
  constructor(
    private readonly loadProductByIdRepository: LoadProductByIdRepository,
  ) {}

  async load(productId: string): Promise<LoadProductById.Result> {
    if(!productId) {
      throw new MissingParamError('productId');
    };

    return this.loadProductByIdRepository.loadById(productId);
  }
}
