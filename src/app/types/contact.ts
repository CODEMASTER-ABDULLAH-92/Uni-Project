// types/contact.ts
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  category: 'general' | 'technical' | 'billing' | 'affiliate' | 'other';
}

export interface SupportOption {
  id: string;
  title: string;
  description: string;
  icon: string;
  contact: string;
  responseTime: string;
  hours?: string;
}