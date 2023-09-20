import crypto from 'node:crypto';

export class ProductEntity {
  id: string;

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
};

