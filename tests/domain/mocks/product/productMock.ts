import { ProductEntity } from '@/domain/entities/product';
import { mockCategoryEntity } from './categoryMock';

const mockProductEntity = () => new ProductEntity(
  'any_id',
  'any_name',
  100,
  'any_sku',
  true,
);
mockProductEntity().addCategory(mockCategoryEntity());

export {
  mockProductEntity,
};

