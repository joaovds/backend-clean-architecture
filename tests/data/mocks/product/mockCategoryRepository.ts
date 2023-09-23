import { CategoryEntity } from "@/domain/entities/product";
import {
  LoadCategoriesRepository,
  LoadCategoryByIdRepository,
} from "@/data/contracts/repositories/product/category";
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

export class LoadCategoryByIdRepositorySpy implements LoadCategoryByIdRepository {
  categoryId: string = "";
  result: LoadCategoryByIdRepository.Result = mockCategoryEntity()

  async loadById(categoryId: string): Promise<LoadCategoryByIdRepository.Result> {
    this.categoryId = categoryId;

    return this.result;
  }
}


