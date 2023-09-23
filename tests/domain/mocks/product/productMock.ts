import { ProductEntity } from '@/domain/entities/product';
import { mockCategoryEntity } from './categoryMock';

type MockProductEntity = {
  productId?: string;
};

const mockProductEntity = (params?: MockProductEntity) => {
  const { productId = 'any_id' } = params || {};

  const product = new ProductEntity(
    productId,
    'any_name',
    100,
    'any_sku',
    true,
  );

  product.addCategory(mockCategoryEntity());
  product.addCategory(mockCategoryEntity());

  return product;
};

export {
  mockProductEntity,
};

