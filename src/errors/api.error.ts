export class ApiError extends Error {
    constructor(readonly status: number, readonly message: string, readonly details?: unknown) {
      super(message);
      this.name = 'ApiError';
    }
}