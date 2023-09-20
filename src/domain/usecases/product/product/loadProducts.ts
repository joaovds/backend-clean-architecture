import { ProductEntity } from '@/domain/entities/product';

export interface LoadProducts {
  load: () => Promise<LoadProducts.Result>;
};

export namespace LoadProducts {
  export type Params = void;

  export type Result = ProductEntity[];
};

