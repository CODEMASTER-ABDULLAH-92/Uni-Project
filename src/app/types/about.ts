// types/about.ts
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
  };
}

export interface TrustFactor {
  icon: string;
  title: string;
  description: string;
  stat?: string;
}

export interface Value {
  title: string;
  description: string;
  icon: string;
}