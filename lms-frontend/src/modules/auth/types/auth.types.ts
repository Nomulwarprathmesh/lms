export type User = {
  id: number;
  name: string;
  email: string;
};

export type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
};