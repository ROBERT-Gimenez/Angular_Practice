import { ActionReducerMap } from "@ngrx/store";
import { User } from "./auth/interfaces/user.interface";
import { userReducer } from './auth/auth.reducer';

export interface AppState {
    user: User
};

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    user: userReducer
};