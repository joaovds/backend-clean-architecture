import crypto from 'node:crypto';
import { CustomerEntity } from '@/domain/entities/customer';

type MockCustomerEntity = {
  customerId?: string;
};

const mockCustomerEntity = (params?: MockCustomerEntity) => {
  const { customerId = crypto.randomUUID() } = params || {};

  const customer = new CustomerEntity({
    id: customerId,
    name: 'any_name',
    email: 'any_email',
    phoneNumber: '13999999999',
    personType: 'PF',
    document: 'any_document',
    isActive: true,
  });


  return customer;
};

export {
  mockCustomerEntity,
};

