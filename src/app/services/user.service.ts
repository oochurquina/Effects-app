import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://reqres.in/api'
  constructor( private _http: HttpClient) { }


  getUsers(){
    return this._http.get(`${this.url}/users?per_page=6&delay=3`)
               .pipe(
                 map(resp=>{
                   return resp['data'];
                 })
               )
  }

  getUserById(id : string){
    return this._http.get(`${this.url}/users/${id}`)
               .pipe(
                 map(resp=>{
                   return resp['data'];
                 })
               )
  }
}