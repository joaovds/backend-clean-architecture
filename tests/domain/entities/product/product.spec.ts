import { ProductEntity, CategoryEntity } from '@/domain/entities/product';
import { mockCategoryEntity } from '@/tests/domain/mocks/product';

describe('ProductEntity', () => {
  let product: ProductEntity;

  beforeEach(() => {
    product = new ProductEntity({
      id: 'any_id',
      name: 'product',
      price: 100,
      sku: 'any_sku',
      isActive: true,
    });
  });

  it('should create a product entity', () => {
    expect(product).toBeInstanceOf(ProductEntity);
    expect(product.id).toBe('any_id');
    expect(product.name).toBe('product');
    expect(product.price).toBe(100);
  });

  it('should add a category to product', () => {
    product.addCategory(mockCategoryEntity());
    expect(product.categories).toHaveLength(1);
    expect(product.categories[0]).toBeInstanceOf(CategoryEntity);
  });

  it('should not add a category to product if it already exists', () => {
    const category = mockCategoryEntity();

    product.addCategory(category);
    product.addCategory(category);

    expect(product.categories).toHaveLength(1);

    const category2 = mockCategoryEntity();
    product.addCategory(category2);

    expect(product.categories).toHaveLength(2);
  });

  it('should remove a category from product', () => {
    const category = mockCategoryEntity();
    const category2 = mockCategoryEntity();

    product.addCategory(category);
    product.addCategory(category2);

    category.id && product.removeCategory(category.id);

    expect(product.categories).toHaveLength(1);
  });
});

