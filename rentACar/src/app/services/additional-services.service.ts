import { AdditionalService } from './../models/additionalService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdditionalServicesService {

  constructor(private httpClient:HttpClient) { }
  getAdditionalServicess():Observable<AdditionalService[]>{
    return this.httpClient.get<AdditionalService[]>("http://localhost:3000/additionalServices")
  }
}
