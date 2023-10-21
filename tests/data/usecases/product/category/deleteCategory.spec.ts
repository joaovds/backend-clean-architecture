import { DbDeleteCategory } from "@/data/usecases/product";
import { DeleteCategoryRepositorySpy } from "@/tests/data/mocks/product";

type SutTypes = {
  sut: DbDeleteCategory;
  deleteCategoryRepositorySpy: DeleteCategoryRepositorySpy;
};

const makeSut = (): SutTypes => {
  const deleteCategoryRepositorySpy = new DeleteCategoryRepositorySpy();
  const sut = new DbDeleteCategory(deleteCategoryRepositorySpy)

  return {
    sut,
    deleteCategoryRepositorySpy,
  };
};

describe('DbDeleteCategory', () => {
  it('should call DeleteCategoryRepository with correct values', async () => {
    const { sut, deleteCategoryRepositorySpy } = makeSut();

    await sut.delete('any_id');

    expect(deleteCategoryRepositorySpy.categoryId).toBe('any_id');
  });

  it('should throw if DeleteCategoryRepository throws', async () => {
    const { sut, deleteCategoryRepositorySpy } = makeSut();

    jest.spyOn(deleteCategoryRepositorySpy, 'delete').mockRejectedValueOnce(new Error());
    const promise = sut.delete('any_id');

    expect(promise).rejects.toThrow();
  });
});
