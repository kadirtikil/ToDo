import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyApiService {
  private api = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  authenticateCredentials(creds: any): Observable<any>{
    return this.http.post(`${this.api}login`, creds);
  } 

  registerNewUser(creds: any): Observable<any>{
    return this.http.post(`${this.http}register`, creds);
  }

  logoutUser(data: any): Observable<any>{
    return this.http.post(`${this.api}logout`, data);
  }

  createNewTask(taskData: any): Observable<any>{
    return this.http.post(`${this.api}createtask`, taskData);
  }

  editTask(id: number, data: any): Observable<any>{
    return this.http.put(`${this.api}edit/${id}`, data);
  }

  deleteTask(id: number): Observable<any>{
    return this.http.delete(`${this.api}deletetask/${id}`);
  }
}
