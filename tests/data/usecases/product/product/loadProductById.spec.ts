import { DbLoadProductById } from '@/data/usecases/product';
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
});
