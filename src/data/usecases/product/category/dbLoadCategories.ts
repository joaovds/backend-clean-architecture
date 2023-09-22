import { LoadCategories } from '@/domain/usecases/product/category';
import { LoadCategoriesRepository } from '@/data/contracts/repositories/product/category';

export class DbLoadCategories implements LoadCategories {
  constructor (private readonly loadCategoriesRepository: LoadCategoriesRepository) {}

  async load (): Promise<LoadCategories.Result> {
    return this.loadCategoriesRepository.loadAll();
  }
}

