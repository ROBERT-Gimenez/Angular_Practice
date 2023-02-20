import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private groupId: string = 'default-group-id';
  private headers!: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Group-Id': this.groupId });
  }

/* EN CASO DE QUE SE NECESITE AÑADADIR UN GROUPID PERSONALIZADO A LA PETICION
   **LLAMADA**
  this.httpService.setGroupId('new-group-id');
  this.httpService.get<T>(url, true).subscribe(result => {
  });
   */
  public setGroupId(groupId: string): void {                      
    this.groupId = groupId;
    this.headers = new HttpHeaders({ 'Group-Id': this.groupId });
  }

  public get<T>(url: string, includeHeaders:boolean = false ):Observable<T> {
    return this.http.get<T>(url, includeHeaders ? { headers: this.headers }: {});
  }

  public put<T>(url: string,body: any, includeHeaders:boolean = false ):Observable<T> {
    return this.http.put<T>(url, body, includeHeaders ? { headers: this.headers }: {});
  }

  public patch<T>(url: string,body: any, includeHeaders:boolean = false ):Observable<T> {
    return this.http.patch<T>(url, body, includeHeaders ? { headers: this.headers }: {});
  }
  
  public delete<T>(url: string, id:string, includeHeaders:boolean=false):Observable<T>{
    return this.http.delete<T>(`${url}/${id}`,includeHeaders ? {headers:this.headers}:{});
  }
  
  public getById<T>(url:string, id:string, includeHeaders:boolean=false):Observable<T>{
    return this.http.get<T>(`${url}/${id}`, includeHeaders ? { headers : this.headers } : {});
  }

  public post<T>(url: string,body: any, includeHeaders:boolean = false ):Observable<T> {
    return this.http.post<T>(url, body, includeHeaders ? { headers: this.headers }: {});
  }


}
