import { DeleteProduct } from "@/domain/usecases/product";
import { DeleteProductRepository } from "@/data/contracts/repositories/product";

export class DbDeleteProduct implements DeleteProduct {
  constructor(
    private readonly deleteProductRepository: DeleteProductRepository,
  ) {}

  async delete(productId: string): Promise<DeleteProduct.Result> {
    await this.deleteProductRepository.delete(productId);

    return;
  }
}

