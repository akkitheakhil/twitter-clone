export interface UserProfile {
  uid: string;
  displayName: string;
  email: string;
  userId: string;
  photoUrl: string;
  bio: string;
  followers: number;
  following: number;
  createdAt: Date;
  updatedAt: Date;
  dataStatus?: string;
}
