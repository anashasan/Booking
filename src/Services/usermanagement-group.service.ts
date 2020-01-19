import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsermanagementGroupService {

  constructor(private http:HttpClient) { }

  
public postData(obj: any):Observable<any>{
  return this.http.post("http://localhost:3000/myposts",obj);
}

}
