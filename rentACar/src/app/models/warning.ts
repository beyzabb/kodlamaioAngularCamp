import { Observable } from 'rxjs';
export interface Warning{
    canExit: () => Observable<boolean> | Promise<boolean> | boolean;
}