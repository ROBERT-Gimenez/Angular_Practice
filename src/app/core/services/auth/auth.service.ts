import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http.service';
import { Store } from '@ngrx/store';
import { logout } from '../../state/auth/auth.actions';
import { User } from '../../state/auth/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient, private store: Store){}

  login(form:FormGroup){
      return this.httpClient.post(`${environment.URL_BASE}/auth/login`,form.value)
  }
  register(form:FormGroup){     
    return this.httpClient.post(`${environment.URL_BASE}/users`,form.value)
  }

  getToken() {
    return localStorage.getItem('token') || '';
  }

  isLoggedIn(): boolean{
    return !!this.getToken();
  }

  logout(){
    localStorage.removeItem('token');
    
  }

  userDates(){
    return this.httpClient.get<User>(`${environment.URL_BASE}/auth/me`)
  }

}