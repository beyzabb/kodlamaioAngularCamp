import { Car } from './../models/cars';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }
  
  getCarss():Observable<Car[]>{
    return this.httpClient.get<Car[]>("http://localhost:3000/cars")
  }

  getCarByColor(colorId:number):Observable<Car[]>{
    let newPath = "http://localhost:3000/cars" + ("?colorId=") + colorId
    return this.httpClient.get<Car[]>(newPath)
  }

  getCarByBrand(brandId:number):Observable<Car[]>{
    let newPath = "http://localhost:3000/cars" + ("?brandId=") + brandId
    return this.httpClient.get<Car[]>(newPath)
  }

  addCars(car:Car):Observable<Car>{
    return this.httpClient.post<Car>("http://localhost:3000/cars",car)
  }
  deleteCarss(val:number):Observable<Car>{
    return this.httpClient.delete<Car>("http://localhost:3000/cars/"+val)
  }
  getCarById(val:number):Observable<Car>{
    return this.httpClient.get<Car>("http://localhost:3000/cars/"+val)
  }
  updateCar(car:Car):Observable<Car>{
    return this.httpClient.put<Car>("http://localhost:3000/cars/"+car.id,car)
  }

  
  getRentCarById(selectedId:number):Observable<Car[]>{
    let newPath = "http://localhost:3000/cars" + ("?id=") + selectedId
    return this.httpClient.get<Car[]>(newPath)
  }

  
}
