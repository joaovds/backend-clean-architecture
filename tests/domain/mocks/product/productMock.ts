import { ProductEntity } from '@/domain/entities/product';

export const mockProductEntity = (): ProductEntity => ({
  id: 'any_id',
  name: 'any_name',
  price: 0,
  sku: 'any_sku',
  isActive: true,
});

