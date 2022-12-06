export interface EventRequest {
  firstName: string;
  lastName: string;
  email: string;
  date: string;
}
export interface Event extends EventRequest {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
