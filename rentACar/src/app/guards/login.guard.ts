import { MessageService } from 'primeng/api';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { authService } from './../models/authService';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private authService:AuthServiceService, private messageService:MessageService,private router:Router){}
  canActivate(
    
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.isLoggedIn()){
      return true;

    }
    else{
      this.messageService.add({
        summary:'Error!'
      })
      this.router.navigate(["login"])
      return false;
    }
    
  }
  
}
