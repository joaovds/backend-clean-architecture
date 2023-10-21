import { DbUpdateCategory } from "@/data/usecases/product";
import { UpdateCategoryRepositorySpy } from "@/tests/data/mocks/product";
import { mockUpdateCategoryEntity } from "@/tests/domain/mocks/product";

type SutTypes = {
  sut: DbUpdateCategory;
  updateCategoryRepositorySpy: UpdateCategoryRepositorySpy;
};

const makeSut = (): SutTypes => {
  const updateCategoryRepositorySpy = new UpdateCategoryRepositorySpy();
  const sut = new DbUpdateCategory(updateCategoryRepositorySpy);

  return {
    sut,
    updateCategoryRepositorySpy,
  };
};

describe('DbUpdateCategory', () => {
  it('should call UpdateCategoryRepository with correct values', async () => {
    const { sut, updateCategoryRepositorySpy } = makeSut();
    const param = mockUpdateCategoryEntity();

    await sut.update(param);

    expect(updateCategoryRepositorySpy.params).toEqual(param);
  });

  it('should return undefined on success', async () => {
    const { sut } = makeSut();

    const result = await sut.update(mockUpdateCategoryEntity());

    expect(result).toBeUndefined();
  });

  it('should call UpdateCategoryRepository once', async () => {
    const { sut, updateCategoryRepositorySpy } = makeSut();

    await sut.update(mockUpdateCategoryEntity());

    expect(updateCategoryRepositorySpy.callsCount).toBe(1);
  });

  it('should throw if UpdateCategoryRepository throws', async () => {
    const { sut, updateCategoryRepositorySpy } = makeSut();

    jest.spyOn(updateCategoryRepositorySpy, 'update').mockRejectedValueOnce(new Error());
    const promise = sut.update(mockUpdateCategoryEntity());

    expect(promise).rejects.toThrow();
  });
});

