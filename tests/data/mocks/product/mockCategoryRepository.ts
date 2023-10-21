import crypto from "node:crypto";

import { CategoryEntity } from "@/domain/entities/product";
import {
  AddCategoryRepository,
  DeleteCategoryRepository,
  LoadCategoriesRepository,
  LoadCategoryByIdRepository,
  UpdateCategoryRepository,
} from "@/data/contracts/repositories/product/category";
import { mockCategoryEntity, mockUpdateCategoryEntity } from "@/tests/domain/mocks/product";

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

export class UpdateCategoryRepositorySpy implements UpdateCategoryRepository {
  params: UpdateCategoryRepository.Params = mockUpdateCategoryEntity();
  callsCount: number = 0;

  async update(params: UpdateCategoryRepository.Params): Promise<UpdateCategoryRepository.Result> {
    this.params = params;
    this.callsCount++;

    return;
  }
}

export class DeleteCategoryRepositorySpy implements DeleteCategoryRepository {
  categoryId: string = "";

  async delete(categoryId: string): Promise<DeleteCategoryRepository.Result> {
    this.categoryId = categoryId;

    return;
  }
}

