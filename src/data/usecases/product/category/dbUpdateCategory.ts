import { UpdateCategory } from '@/domain/usecases/product/category';
import { UpdateCategoryRepository } from '@/data/contracts/repositories/product/category';

export class DbUpdateCategory implements UpdateCategory {
  constructor (private readonly updateCategoryRepository: UpdateCategoryRepository) {}

  async update(params: UpdateCategory.Params): Promise<UpdateCategory.Result> {
    return this.updateCategoryRepository.update(params);
  }
}

