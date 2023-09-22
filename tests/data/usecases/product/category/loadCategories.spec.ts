import { DbLoadCategories } from '@/data/usecases/product/category';
import { LoadCategoriesRepositorySpy } from '@/tests/data/mocks/product/mockCategory';

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

  it('should return empty list if LoadCategoriesRepository returns empty list', async () => {
    const { sut, loadCategoriesRepositorySpy } = makeSut();

    loadCategoriesRepositorySpy.result = [];
    const result = await sut.load();

    expect(result).toEqual([]);
  });
});

