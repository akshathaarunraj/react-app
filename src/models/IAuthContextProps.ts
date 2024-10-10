export interface IAuthContextProps {
  isAuthenticated: boolean;
  saveToken: (token: string) => void;
  logout: () => void;
}
