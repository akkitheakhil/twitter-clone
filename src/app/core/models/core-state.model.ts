import { IAuth } from './auth.model';
import { UserProfile } from './user-profile.model';

export interface ICoreState {
  auth: Partial<IAuth>;
  profile: Partial<UserProfile>;
}
