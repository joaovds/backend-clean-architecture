import { LoadProductById } from '@/domain/usecases/product';
import { LoadProductByIdRepository } from '@/data/contracts/repositories/product';

export class DbLoadProductById implements LoadProductById {
  constructor(
    private readonly loadProductByIdRepository: LoadProductByIdRepository,
  ) {}

  async load(productId: string): Promise<LoadProductById.Result> {
    const product = await this.loadProductByIdRepository.loadById(productId);

    if(product === null) {
      throw new Error('Product not found');
    };

    return product;
  }
}

