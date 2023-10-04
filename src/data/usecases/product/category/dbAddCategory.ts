import { AddCategory } from '@/domain/usecases/product/category';
import { AddCategoryRepository } from '@/data/contracts/repositories/product/category';

export class DbAddCategory implements AddCategory {
  constructor (private readonly addCategoryRepository: AddCategoryRepository) {}

  async add(params: AddCategory.Params): Promise<AddCategory.Result> {
    return this.addCategoryRepository.add(params);
  }
}

