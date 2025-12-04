// types/user.ts
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  joinedDate: string;
}

export interface UserPreferences {
  emailNotifications: boolean;
  pushNotifications: boolean;
  dealAlerts: boolean;
  newsletter: boolean;
  productUpdates: boolean;
}