import { DeleteCategory } from "@/domain/usecases/product";
import { DeleteCategoryRepository } from "@/data/contracts/repositories/product";

export class DbDeleteCategory implements DeleteCategory {
  constructor(
    private readonly deleteCategoryByIdRepository: DeleteCategoryRepository,
  ) {}

  async delete(categoryId: string): Promise<DeleteCategory.Result> {
    await this.deleteCategoryByIdRepository.delete(categoryId);

    return;
  }
}

