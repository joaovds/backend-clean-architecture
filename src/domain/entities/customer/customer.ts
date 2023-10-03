export class CustomerEntity {
  constructor(readonly customer: CustomerEntity.Params) {};
};

export namespace CustomerEntity {
  export type Params = {
    id?: string;
    name: string;
    email: string;
    phoneNumber: string;
    personType: "PF" | "PJ";
    document: string;
    isActive: boolean;
  };
};

