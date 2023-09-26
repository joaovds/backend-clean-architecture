import crypto from 'node:crypto';
import { ProductEntity } from '@/domain/entities/product';
import { mockCategoryEntity } from '@/tests/domain/mocks/product/categoryMock';

type MockProductEntity = {
  productId?: string;
};

const mockProductEntity = (params?: MockProductEntity) => {
  const { productId = crypto.randomUUID() } = params || {};

  const product = new ProductEntity({
    id: productId,
    name: 'any_name',
    price: 100,
    sku: 'any_sku',
    isActive: true,
  });

  product.addCategory(mockCategoryEntity());
  product.addCategory(mockCategoryEntity());

  return product;
};

export {
  mockProductEntity,
};

