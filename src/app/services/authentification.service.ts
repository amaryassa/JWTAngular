import { Task } from './../tasks/tasks.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private host: string = 'http://localhost:8080';
  private jwtTokken: string = null;

  constructor(private http: HttpClient) { }


  login(user) {
    return this.http.post(this.host + '/login', user, { observe: 'response' });
  }
  saveToken(jwt: string) {
    localStorage.setItem('token', jwt);
  }


  loadToken() {
    return this.jwtTokken = localStorage.getItem('token');
  }
  getTasks(): Observable<Task[]> {
    if (this.jwtTokken == null) {
      this.loadToken();
    }

    return this.http.get<Task[]>(this.host + '/tasks'
      //,
      // {
      //   headers: new HttpHeaders({ 'Authorization' : this.jwtTokken })
      // }
    );
  }
}
