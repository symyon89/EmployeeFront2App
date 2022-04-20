import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Employee} from "../interface/employee";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = environment.apiURL + "/employee";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.url);

  }

  getByID(id:any):Observable<Employee>{
    return this.httpClient.get<Employee>(this.url+'/'+id);
  }

  save(employee:Employee):Observable<Employee>{
    return this.httpClient.post<Employee>(this.url, JSON.stringify(employee),this.httpOptions);
  }

  deleteById(id:any):Observable<Employee>{
    return this.httpClient.delete<Employee>(this.url+'/'+id,this.httpOptions);
  }
}
