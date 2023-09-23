import { DbLoadPCategoryById } from "@/data/usecases/product";
import { NotFoundError } from "@/domain/errors/shared";
import { LoadCategoryByIdRepositorySpy } from "@/tests/data/mocks/product";

type SutTypes = {
  sut: DbLoadPCategoryById;
  loadCategoryByIdRepositorySpy: LoadCategoryByIdRepositorySpy;
};

const makeSut = (): SutTypes => {
  const loadCategoryByIdRepositorySpy = new LoadCategoryByIdRepositorySpy();
  const sut = new DbLoadPCategoryById(loadCategoryByIdRepositorySpy);

  return {
    sut,
    loadCategoryByIdRepositorySpy,
  };
};

describe('DbLoadCategoryById', () => {
  it('should return a category on success', async () => {
    const { sut, loadCategoryByIdRepositorySpy } = makeSut();

    const category = await sut.load('any_id');

    expect(category).toEqual(loadCategoryByIdRepositorySpy.result);
  });

  it('should call LoadCategoryByIdRepository with correct values', async () => {
    const { sut, loadCategoryByIdRepositorySpy } = makeSut();

    const category = await sut.load('any_id');

    expect(category).toEqual(loadCategoryByIdRepositorySpy.result);
  });

  it('should throw NotFoundError if LoadCategoryByIdRepository returns null', async () => {
    const { sut, loadCategoryByIdRepositorySpy } = makeSut();

    loadCategoryByIdRepositorySpy.result = null;
    const promise = sut.load('any_id');

    expect(promise).rejects.toThrowError(new NotFoundError('Category'));
  });

  it('should throw if LoadCategoryByIdRepository throws', async () => {
    const { sut, loadCategoryByIdRepositorySpy } = makeSut();

    jest.spyOn(loadCategoryByIdRepositorySpy, 'loadById').mockRejectedValueOnce(new Error());
    const promise = sut.load('any_id');

    expect(promise).rejects.toThrow();
  });
});
