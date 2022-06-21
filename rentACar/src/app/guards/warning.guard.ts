import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Warning } from '../models/warning';

@Injectable({
  providedIn: 'root'
})
export class WarningGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: Warning,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return component.canExit ? component.canExit() : true;
  }
  
}
