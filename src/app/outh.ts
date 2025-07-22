import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Outh {
  private url="http://localhost:3000"
  constructor(private http:HttpClient){}
  signup(data:any):Observable<any>{
    return this.http.post(this.url+'/signup',data)
  }
  login(data:any):Observable<any>{
    return this.http.post(this.url+'/login',data)
  }
  users():Observable<any>{
    return this.http.get(this.url+'/users')
  }
  updateUser(id:any,user:any):Observable<any>{
    return this.http.put(this.url+'/updateUser/'+id,user)
  }
  deleteUser(id:any):Observable<any>{
    return this.http.delete(this.url+'/deleteUser/'+id)
  }
}
