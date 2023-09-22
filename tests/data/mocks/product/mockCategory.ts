import { CategoryEntity } from "@/domain/entities/product";
import { LoadCategoriesRepository } from "@/data/contracts/repositories/product/category";
import { mockCategoryEntity } from "@/tests/domain/mocks/product";

export class LoadCategoriesRepositorySpy implements LoadCategoriesRepository {
  result: CategoryEntity[] = [
    mockCategoryEntity(),
    mockCategoryEntity(),
  ];

  async loadAll (): Promise<LoadCategoriesRepository.Result> {
    return this.result;
  };
};

