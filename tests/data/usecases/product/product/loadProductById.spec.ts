import { DbLoadProductById } from '@/data/usecases/product';
import { NotFoundError } from '@/domain/errors/shared';
import { LoadProductByIdRepositorySpy } from '@/tests/data/mocks/product';

type SutTypes = {
  sut: DbLoadProductById;
  loadProductByIdRepositorySpy: LoadProductByIdRepositorySpy;
};

const makeSut = (): SutTypes => {
  const loadProductByIdRepositorySpy = new LoadProductByIdRepositorySpy();
  const sut = new DbLoadProductById(loadProductByIdRepositorySpy);

  return {
    sut,
    loadProductByIdRepositorySpy,
  };
};

describe('DbLoadProductById', () => {
  it('should return a product on success', async () => {
    const { sut, loadProductByIdRepositorySpy } = makeSut();

    const product = await sut.load('any_id');

    expect(product).toEqual(loadProductByIdRepositorySpy.result);
  });

  it('should call LoadProductByIdRepository with correct values', async () => {
    const { sut, loadProductByIdRepositorySpy } = makeSut();
    
    await sut.load('any_id');

    expect(loadProductByIdRepositorySpy.productId).toBe('any_id');
  });

  it('should throw if LoadProductByIdRepository throws', async () => {
    const { sut, loadProductByIdRepositorySpy } = makeSut();

    jest.spyOn(loadProductByIdRepositorySpy, 'loadById').mockRejectedValueOnce(new Error());
    const promise = sut.load('any_id');

    expect(promise).rejects.toThrow();
  });

  it('should throw if LoadProductByIdRepository returns null', async () => {
    const { sut, loadProductByIdRepositorySpy } = makeSut();

    loadProductByIdRepositorySpy.result = null;
    const promise = sut.load('any_id');

    expect(promise).rejects.toThrowError(new NotFoundError('Product'));
  });
});
