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
    if(!this.categories.includes(category)) {
      this.categories.push(category);
    };
  };
};

