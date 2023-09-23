export class CategoryEntity {
  constructor(
    readonly id: string | undefined,
    readonly name: string,
    readonly description: string,
    readonly isActive: boolean,
  ) {};
};
