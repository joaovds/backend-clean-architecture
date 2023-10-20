import { DbAddCategory } from "@/data/usecases/product";
import { AddCategoryRepositorySpy } from "@/tests/data/mocks/product";
import { mockCategoryEntity } from "@/tests/domain/mocks/product";

type SutTypes = {
  sut: DbAddCategory;
  addCategoryRepositorySpy: AddCategoryRepositorySpy;
};

const makeSut = (): SutTypes => {
  const addCategoryRepositorySpy = new AddCategoryRepositorySpy();
  const sut = new DbAddCategory(addCategoryRepositorySpy);

  return {
    sut,
    addCategoryRepositorySpy,
  };
};

describe('DbAddCategory', () => {
  it('should call AddCategoryRepository with correct values', async () => {
    const { sut, addCategoryRepositorySpy } = makeSut();
    const param = mockCategoryEntity();

    await sut.add(param);

    expect(addCategoryRepositorySpy.params).toEqual(param);
    expect(addCategoryRepositorySpy.callsCount).toBe(1);
  });

  it('should return an category entity on success', async () => {
    const { sut, addCategoryRepositorySpy } = makeSut();

    const result = await sut.add(mockCategoryEntity());

    expect(result).toEqual(addCategoryRepositorySpy.result);
  });

  it('should return an category with correct id', async () => {
    const { sut, addCategoryRepositorySpy } = makeSut();

    addCategoryRepositorySpy.result.id = 'any_id';
    const result = await sut.add(mockCategoryEntity());

    expect(result.id).toEqual(addCategoryRepositorySpy.result.id);
  });

  it('should throw if AddCategoryRepository throws', async () => {
    const { sut, addCategoryRepositorySpy } = makeSut();

    jest.spyOn(addCategoryRepositorySpy, 'add').mockRejectedValueOnce(new Error());
    const promise = sut.add(mockCategoryEntity());

    expect(promise).rejects.toThrow();
  });
});

