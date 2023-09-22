import crypto from 'node:crypto';

export class CategoryEntity {
  id: string;

  constructor(
    id: string | undefined,
    readonly name: string,
    readonly description: string,
    readonly isActive: boolean,
  ) {
    if(id) {
      this.id = id;
    } else {
      this.id = crypto.randomUUID();
    }
  };
};
