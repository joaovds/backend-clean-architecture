import { CategoryEntity } from './category';

export class ProductEntity {
  categories: CategoryEntity[] = [];

  constructor(
    readonly id: string | undefined,
    readonly name: string,
    readonly price: number,
    readonly sku: string | undefined,
    readonly isActive: boolean,
  ) {};

  addCategory(category: CategoryEntity) {
    if(!this.categories.some((item) => item.id === category.id)) {
      this.categories.push(category);
      return;
    };
  };
};

