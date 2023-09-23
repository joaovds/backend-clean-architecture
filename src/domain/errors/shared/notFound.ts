export class NotFoundError extends Error {
  constructor(entity?: string) {
    super(`${entity || 'Entity'} not found`);
    this.name = 'NotFoundError';
  }
}

