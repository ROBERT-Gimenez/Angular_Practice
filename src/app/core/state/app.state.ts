import { ActionReducerMap } from "@ngrx/store";
import { User } from "./auth/interfaces/user.interface";
import { userReducer } from './auth/auth.reducer';
import { Loader } from "./loader/loader.interface";
import { loaderReducer } from './loader/loader.reducer';

export interface AppState {
    user: User
    isLoading : Loader
};

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    user: userReducer,
    isLoading : loaderReducer
};