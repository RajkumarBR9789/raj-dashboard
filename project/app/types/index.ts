export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  lastLogin?: string;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}