import { ApplicationErrorOptions } from './types';

export class ApplicationError extends Error {
  public status!: number;

  constructor(options?: ApplicationErrorOptions) {
    if (!options) {
      super('APPLICATION_ERROR');

      return;
    }

    super(options.message || '');
    this.status = options.status || 500;
    this.name = 'APPLICATION_ERROR';
  }
}
