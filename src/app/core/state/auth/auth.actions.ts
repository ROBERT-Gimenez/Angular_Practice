import { createAction, props } from '@ngrx/store';
import { User } from './interfaces/user.interface';

export const login = createAction('[Authorization] Login', props<{user: User}>());
export const register = createAction('[Authorization] Register', props<{user: User}>());
export const logout = createAction('[Authorization] Logout');