export interface IAuth {
  email: string;
  displayName: string;
  id: string;
  photoUrl: string;
  isAuthenticated: boolean;
  dataStatus: string;
  userID: string;
  error?: any;
}
