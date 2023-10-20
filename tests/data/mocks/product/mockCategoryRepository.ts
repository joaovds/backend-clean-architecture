import crypto from "node:crypto";

import { CategoryEntity } from "@/domain/entities/product";
import {
  AddCategoryRepository,
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

export class AddCategoryRepositorySpy implements AddCategoryRepository {
  params: AddCategoryRepository.Params = mockCategoryEntity();
  callsCount: number = 0;
  result: AddCategoryRepository.Result = {
    id: crypto.randomUUID(),
  };

  async add(params: AddCategoryRepository.Params): Promise<AddCategoryRepository.Result> {
    this.params = params;
    this.callsCount++;

    return this.result;
  }
}



