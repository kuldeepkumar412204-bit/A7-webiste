export interface IContact {
  _id: string;
  referenceId: string;
  name: string;
  whatsappNumberOrUrl?: string;
  telegramLink?: string;
  email?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
