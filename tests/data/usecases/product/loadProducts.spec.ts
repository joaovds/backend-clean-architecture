import { DbLoadProducts } from '@/data/usecases/product';
import {
  LoadProductsRepositorySpy,
} from '@/tests/data/mocks/product';

type SutTypes = {
  sut: DbLoadProducts;
  loadProductsRepositorySpy: LoadProductsRepositorySpy;
};

const makeSut = (): SutTypes => {
  const loadProductsRepositorySpy = new LoadProductsRepositorySpy();
  const sut = new DbLoadProducts(loadProductsRepositorySpy);

  return {
    sut,
    loadProductsRepositorySpy,
  };
};

describe('DbLoadProducts', () => {
  it('should return a list of products on success', async () => {
    const { sut, loadProductsRepositorySpy } = makeSut();

    const products = await sut.load();
    
    expect(products).toEqual(loadProductsRepositorySpy.result);
  });

  it('should call LoadProductsRepository', async () => {
    const { sut, loadProductsRepositorySpy } = makeSut();

    const result = await sut.load();

    expect(result).toEqual(loadProductsRepositorySpy.result);
  });

  it('should throw if LoadProductsRepository throws', async () => {
    const { sut, loadProductsRepositorySpy } = makeSut();

    jest.spyOn(loadProductsRepositorySpy, 'loadAll').mockRejectedValueOnce(new Error());
    const promise = sut.load();

    expect(promise).rejects.toThrow();
  });
});

