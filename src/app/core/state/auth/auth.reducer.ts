import { createReducer, on } from '@ngrx/store';
import { ContactComponent } from 'src/app/pages/contact/contact.component';
import { addContact, contacts, login, logout, register, removeContact } from './auth.actions';
import { User } from './interfaces/user.interface';

export const initialState: User = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    roleId: 0,
    points: 0,
    contacts: []
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
    points: 0,
    contacts: []
  })),
  on(addContact, (state, { contact }) => ({
    ...state,
    contacts: [...(state.contacts ?? []), contact] 
  })),
  on(removeContact, (state, { contact }) => ({
    ...state,
    contacts: (state.contacts ?? []).filter(c => c.userId !== contact.userId)
  })),
  on(contacts, (state) => ({
    ...state,
  }))
);


