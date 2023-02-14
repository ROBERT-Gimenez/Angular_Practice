import { createReducer, on } from '@ngrx/store';
import { login, logout, register } from './auth.actions';
import { User } from './interfaces/user.interface';

export const initialState: User = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    roleId: 0,
    points: 0
};

export const userReducer = createReducer(
    initialState,
  on(login, (state, {user}) => ({
    ...state, 
    email:user.email,
    password:user.password
  })),
  on(logout, (state) => ({
    ...state, 
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    roleId: 0,
    points: 0
  }))
);