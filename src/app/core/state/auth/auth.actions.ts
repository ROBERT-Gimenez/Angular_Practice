import { createAction, createSelector, props } from '@ngrx/store';
import { AppState } from '../app.state';
import { Contact, User } from './interfaces/user.interface';

export const login = createAction('[Authorization] Login', props<{user: User}>());
export const register = createAction('[Authorization] Register', props<{user: User}>());
export const logout = createAction('[Authorization] Logout');
export const addContact = createAction('[User] Add Contact', props<{ contact: Contact }>());
export const removeContact = createAction('[User] Remove Contact', props<{ contact: Contact }>());
export const contacts = createAction('[contact]  Contact');


export const selectUser = (state: AppState) => state.user;

export const getContacts = createSelector(
  selectUser , (user:User) => user.contacts
);
