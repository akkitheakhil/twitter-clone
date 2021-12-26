import { IAuth } from './auth.model';

export interface ICoreState {
  auth: Partial<IAuth>;
}
