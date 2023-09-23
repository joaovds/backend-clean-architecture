import { ProductEntity } from '@/domain/entities/product';
import { mockCategoryEntity } from './categoryMock';

const mockProductEntity = () => {
  const product = new ProductEntity(
    'any_id',
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

