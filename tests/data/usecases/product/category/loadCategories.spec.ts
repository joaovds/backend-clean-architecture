import { CategoryEntity } from "@/domain/entities/product";
import { LoadCategories } from "@/domain/usecases/product";
import { mockCategoryEntity } from "@/tests/domain/mocks/product";

interface LoadCategoriesRepository {
  loadAll: () => Promise<CategoryEntity[]>;
};

export class LoadCategoriesRepositorySpy implements LoadCategoriesRepository {
  result: CategoryEntity[] = [
    mockCategoryEntity(),
    mockCategoryEntity(),
  ];

  async loadAll (): Promise<CategoryEntity[]> {
    return this.result;
  };
};

export class DbLoadCategories implements LoadCategories {
  constructor (private readonly loadCategoriesRepository: LoadCategoriesRepositorySpy) {}

  async load (): Promise<CategoryEntity[]> {
    return this.loadCategoriesRepository.loadAll();
  }
}

type SutTypes = {
  sut: DbLoadCategories;
  loadCategoriesRepositorySpy: LoadCategoriesRepositorySpy;
};

const makeSut = (): SutTypes => {
  const loadCategoriesRepositorySpy = new LoadCategoriesRepositorySpy();
  const sut = new DbLoadCategories(loadCategoriesRepositorySpy);

  return {
    sut,
    loadCategoriesRepositorySpy,
  };
};

describe("DbLoadCategories", () => {
  it('should call LoadCategoriesRepository with correct values', async () => {
    const { sut, loadCategoriesRepositorySpy } = makeSut();

    const result = await sut.load();

    expect(result).toEqual(loadCategoriesRepositorySpy.result);
  });

  it('should throw if LoadCategoriesRepository throws', async () => {
    const { sut, loadCategoriesRepositorySpy } = makeSut();

    jest.spyOn(loadCategoriesRepositorySpy, 'loadAll').mockRejectedValueOnce(new Error());
    const promise = sut.load();

    expect(promise).rejects.toThrow();
  });
});

