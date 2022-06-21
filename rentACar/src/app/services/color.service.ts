import { HttpClient } from '@angular/common/http';
import { Color } from './../models/color';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  

  constructor(private httpClient:HttpClient) { }
  getColorss():Observable<Color[]>{
    return this.httpClient.get<Color[]>("http://localhost:3000/colors")
  }
  deleteColorr(val:number):Observable<Color>{
    return this.httpClient.delete<Color>("http://localhost:3000/colors/"+val)
  }
  addColors(color:Color):Observable<Color>{
    return this.httpClient.post<Color>("http://localhost:3000/colors/",color)
  }
}
