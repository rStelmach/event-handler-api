import { ApplicationErrorOptions } from './types';
import { ApplicationError } from './ApplicationError';

export class ValidationError extends ApplicationError {
  constructor(options?: ApplicationErrorOptions) {
    super(options);
    this.status = 403;
    this.name = 'VALIDATION_ERROR';
  }
}
