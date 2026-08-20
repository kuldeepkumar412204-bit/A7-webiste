export interface IKhaiwal {
  _id: string;
  name: string;
  data: string;
  whatsappNumber?: string;
  telegramLink?: string;
  isActive: boolean;
  order: number | string;
  createdAt?: string;
  updatedAt?: string;
}