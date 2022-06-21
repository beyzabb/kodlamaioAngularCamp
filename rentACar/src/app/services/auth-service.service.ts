import { authService } from './../models/authService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpClient:HttpClient) { }

  loginMember(login: Login):Observable<Login[]>{
    return this.httpClient.get<Login[]>("http://localhost:3000/users?email="+login.email+"&password="+login.password)
  }

  isLoggedIn():boolean{
    const token=localStorage.getItem("token");
    if(token){
      return true
    }
    else{
      return false;
    }


  }

  registerMember(login: Login){
    let newPath = "http://localhost:3000/users/"
    return this.httpClient.post<Login>(newPath,login)
  }


  logOut(){
    localStorage.removeItem("token")
  }

  
}
