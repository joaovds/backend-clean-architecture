import { NotFoundError } from '@/domain/errors/shared';

describe('NotFoundError', () => {
  it('should be an instance of Error', () => {
    const sut = new NotFoundError();

    expect(sut).toBeInstanceOf(Error);
  });

  it('should return default message', () => {
    const sut = new NotFoundError();

    expect(sut.message).toBe('Entity not found');
  });

  it('should return custom message', () => {
    const sut = new NotFoundError(`Custom`);

    expect(sut.message).toBe('Custom not found')
  });

  it('should return name as NotFoundError', () => {
    const sut = new NotFoundError();

    expect(sut.name).toBe('NotFoundError');
  });
});

