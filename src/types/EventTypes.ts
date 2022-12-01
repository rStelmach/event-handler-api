export interface Event {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  date: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
