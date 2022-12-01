import { ApplicationErrorOptions } from './types';
import { ApplicationError } from './ApplicationError';

export class BadRequestError extends ApplicationError {
  constructor(options?: ApplicationErrorOptions) {
    super(options);
    this.status = 400;
    this.name = 'BAD_REQUEST_ERROR';
  }
}
