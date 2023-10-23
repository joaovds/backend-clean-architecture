import { DbDeleteProduct } from "@/data/usecases/product";
import { DeleteProductRepositorySpy } from "@/tests/data/mocks/product";

type SutTypes = {
  sut: DbDeleteProduct;
  deleteProductRepositorySpy: DeleteProductRepositorySpy;
};

const makeSut = (): SutTypes => {
  const deleteProductRepositorySpy = new DeleteProductRepositorySpy();
  const sut = new DbDeleteProduct(deleteProductRepositorySpy)

  return {
    sut,
    deleteProductRepositorySpy,
  };
};

describe('DbDeleteProduct', () => {
  it('should call DeleteProductRepository with correct values', async () => {
    const { sut, deleteProductRepositorySpy } = makeSut();

    await sut.delete('any_id');

    expect(deleteProductRepositorySpy.productId).toBe('any_id');
  });

  it('should throw if DeleteProductRepository throws', async () => {
    const { sut, deleteProductRepositorySpy } = makeSut();

    jest.spyOn(deleteProductRepositorySpy, 'delete').mockRejectedValueOnce(new Error());
    const promise = sut.delete('any_id');

    expect(promise).rejects.toThrow();
  });

  it('should return void on success', async () => {
    const { sut } = makeSut();

    const result = await sut.delete('any_id');

    expect(result).toBeUndefined();
  });
});
