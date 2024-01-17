import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly url="http://localhost:3000/"
  constructor(private http:HttpClient) { }

  addplayer(users:any):Observable<any>{
    return this.http.post(this.url+"player",users)
  }

  Allplayer():Observable<any>{
    return this.http.get(this.url+"player")
  }
}
