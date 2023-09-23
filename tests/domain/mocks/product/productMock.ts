import { ProductEntity } from '@/domain/entities/product';
import { mockCategoryEntity } from './categoryMock';

export const mockProductEntity = new ProductEntity(
  'any_id',
  'any_name',
  0,
  'any_sku',
  true,
);

