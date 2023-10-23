import { CategoryEntity } from './category';

export class ProductEntity {
  id?: string;
  name: string;
  price: number;
  sku?: string;
  isActive: boolean;
  categories: CategoryEntity[] = [];

  constructor(private productParams: ProductEntity.Params) {
    const { id, name, price, sku, isActive } = this.productParams;

    this.id = id;
    this.name = name;
    this.price = price;
    this.sku = sku;
    this.isActive = isActive;
  };

  public addCategory(category: CategoryEntity) {
    if(!this.hasCategory(category)) {
      this.categories.push(category);
      return;
    };
  };

  private hasCategory(category: CategoryEntity): boolean {
    return this.categories.some((item) => item.id === category.id);
  }

  public removeCategory(categoryId: string): void {
    this.categories = this.categories.filter((item) => item.id !== categoryId);
    return;
  };
};

export namespace ProductEntity {
  export type Params = {
    id?: string;
    name: string;
    price: number;
    sku?: string;
    isActive: boolean;
  };
};

