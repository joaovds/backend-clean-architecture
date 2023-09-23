import crypto from 'node:crypto';

import { CategoryEntity } from './category';

export class ProductEntity {
  id: string;
  categories: CategoryEntity[] = [];

  constructor(
    id: string | undefined,
    readonly name: string,
    readonly price: number,
    readonly sku: string | undefined,
    readonly isActive: boolean,
  ) {
    if(id) {
      this.id = id;
    } else {
      this.id = crypto.randomUUID();
    }
  };

  addCategory(category: CategoryEntity) {
    if(!this.categories.includes(category)) {
      this.categories.push(category);
    };
  };
};

