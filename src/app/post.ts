import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Post {
  private url=""
  constructor(private http:HttpClient){}
  getdata():Observable<any>{
      return this.http.get(this.url)
    }
  postdata(data:any):Observable<any>{
    return this.http.post(this.url,data)
  }
  putdata(id:any,data:any):Observable<any>{
    return this.http.put(this.url+'/'+id,data)
  }
  patchdata(id:any,data:any):Observable<any>{
    return this.http.patch(this.url+'/'+id,data)
  }
  deletedata(id:any):Observable<any>{
    return this.http.delete(this.url+'/'+id)
  }
}
